/**
 *  Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const chromeFlags = [
  '--disable-gpu',
  '--headless',
  '--no-zygote',
  '--no-sandbox',
];

const getChromeFlags = () => chromeFlags;

module.exports = { getChromeFlags };
