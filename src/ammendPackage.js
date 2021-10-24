const fs = require('@danielcobo/fs');
const path = require('path');

/**
 * Add appropriate dependencies and scripts
 * @param {boolean} browserModule - true/false if module is a browser module
 * @param {string} destinationPath - package root path
 */
module.exports = async function ammendPackage(browserModule, destinationPath) {
  console.log('Adding dev packages and custom scripts...');

  const pkgTxt = await fs.read(path.join(destinationPath, 'package.json'));
  const pkg = JSON.parse(pkgTxt);

  pkg.devDependencies = {
    '@danielcobo/docs': '^1.0.16',
    jest: '^27.2.5',
    '@stryker-mutator/core': '^5.4.1',
    '@stryker-mutator/jest-runner': '^5.4.1',
  };
  if (browserModule) {
    pkg.devDependencies = Object.assign(pkg.devDependencies, {
      '@rollup/plugin-commonjs': '^20.0.0',
      '@rollup/plugin-node-resolve': '^13.0.4',
      rollup: '^2.56.3',
      'rollup-plugin-terser': '^7.0.2',
    });
  }

  pkg.scripts = {
    test: 'jest --collectCoverage --runInBand',
    testing: 'jest --watch --collectCoverage --runInBand',
    mutation: 'npx stryker run',
    docs: 'docs',
    patch: 'git push && npm version patch && npm publish',
    minor: 'git push && npm version minor && npm publish',
    major: 'git push && npm version major && npm publish',
  };
  if (browserModule) {
    pkg.scripts.prepublishOnly = './node_modules/.bin/rollup -c';
  }

  await fs.mk(
    path.join(destinationPath, 'package.json'),
    JSON.stringify(pkg, null, ' ')
  );
};
