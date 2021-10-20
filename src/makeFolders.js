const path = require('path');
const fs = require('@danielcobo/fs');

/**
 * Make appropriate folders
 * @param {boolean} browserModule - true/false if module is a browser module
 * @param {string} destinationPath - destination root path
 */
module.exports = async function makeFolders(browserModule, destinationPath) {
  console.log('Adding folders...');
  if (browserModule) {
    await fs.mk(path.join(destinationPath, 'dist'));
  }
  await fs.mk(path.join(destinationPath, 'src'));
};
