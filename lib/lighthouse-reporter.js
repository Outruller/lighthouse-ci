/**
 *  Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');

const launchChromeAndRunLighthouse = async (
  url,
  chromeFlags,
  lighthouseFlags,
  config = null,
) => {
  const chrome = await chromeLauncher.launch({
    chromeFlags,
  });
  const flags = {
    port: chrome.port,
    output: 'json',
    ...lighthouseFlags,
  };

  if (flags.extraHeaders) {
    let extraHeadersStr = flags.extraHeaders;
    if (extraHeadersStr.substr(0, 1) !== '{') {
      extraHeadersStr = fs.readFileSync(extraHeadersStr, 'utf-8');
    }

    flags.extraHeaders = JSON.parse(extraHeadersStr);
  }

  const result = await lighthouse(url, flags, config);
  await chrome.kill();

  return result;
};

const createReport = results => ReportGenerator.generateReportHtml(results);

async function writeReport(
  url,
  flags = {},
  defaultChromeFlags,
  lighthouseFlags,
) {
  const { chromeFlags, ...extraLHFlags } = lighthouseFlags;
  const customChromeFlags = chromeFlags ? chromeFlags.split(',') : [];

  const lighouseResult = await launchChromeAndRunLighthouse(
    url,
    [...defaultChromeFlags, ...customChromeFlags],
    extraLHFlags,
  );

  let htmlReport;
  if (flags.report) {
    htmlReport = await createReport(lighouseResult.lhr);
  }

  const ciReport = {};
  for (const [categoryName, category] of Object.entries(lighouseResult.lhr.categories)) {
    ciReport[categoryName] = category.score;
  }

  let validationReport;
  if (flags.validate) {
    validationReport = {
      audits: [],
      categories: [],
    };

    // audits report
    if (flags.validate.audits) {
      for (const auditToValidate of flags.validate.audits) {
        if (
          !Object.prototype.hasOwnProperty.call(
            lighouseResult.lhr.audits,
            auditToValidate.id,
          )
        ) {
          continue;
        }

        const audit = { ...auditToValidate, ...lighouseResult.lhr.audits[auditToValidate.id] };
        validationReport.audits.push(audit);
      }
    }

    // category report
    if (flags.validate.categories) {
      for (const categoryToValidate of flags.validate.categories) {
        if (
          !Object.prototype.hasOwnProperty.call(
            lighouseResult.lhr.categories,
            categoryToValidate.id,
          )
        ) {
          continue;
        }
        const { auditRefs, ...lhCategory } = lighouseResult.lhr.categories[categoryToValidate.id];
        const category = { ...categoryToValidate, ...lhCategory };
        validationReport.categories.push(category);
        // Math.round(category.score * 100)
      }
    }
  }

  return { ciReport, validationReport, htmlReport };
}

module.exports = writeReport;
