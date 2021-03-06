const path = require('path');
const fs = require('@danielcobo/fs');

/**
 * Copy appropriate boilerplates
 * @param {boolean} browserModule - true/false if module is a browser module
 * @param {string} sourcePath - boilerplate folder path
 * @param {string} destinationPath - path to copy the boilerplate files to
 */
module.exports = async function copyBoilerplate(
  browserModule,
  sourcePath,
  destinationPath
) {
  console.log('Copying boilerplates...');
  const boilerplate = await fs.read(sourcePath);
  await Promise.all(
    boilerplate.pruned.files
      .filter(function (filename) {
        if (!browserModule && filename === 'rollup.config.js') {
          return false;
        } else {
          return true;
        }
      })
      .map(async function (filename) {
        const source = path.join(sourcePath, filename);
        const file = filename.replace('__', '.');
        const destination = path.join(destinationPath, file);
        return await fs
          .clone(source, destination, { overwrite: false })
          .then(function () {
            console.log(`${filename} copied`);
          });
      })
  );
};
