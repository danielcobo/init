const fs = require('@danielcobo/fs');
const ammendPackage = require('./ammendPackage.js');

beforeEach(async function () {
  await fs.mk('./testdir/package.json', JSON.stringify({}));
});

afterEach(async function () {
  await fs.rm('./testdir');
});

test('Test ammendPackage.js - browser module', async function () {
  await ammendPackage(true, './testdir');
  const pkg = JSON.parse(await fs.read('./testdir/package.json'));

  expect(pkg.devDependencies).toStrictEqual({
    '@danielcobo/docs': '^1.0.16',
    jest: '^27.2.5',
    '@stryker-mutator/core': '^5.4.1',
    '@stryker-mutator/jest-runner': '^5.4.1',
    '@rollup/plugin-commonjs': '^20.0.0',
    '@rollup/plugin-node-resolve': '^13.0.4',
    rollup: '^2.56.3',
    'rollup-plugin-terser': '^7.0.2',
  });

  expect(pkg.scripts).toStrictEqual({
    test: 'jest --collectCoverage --runInBand',
    testing: 'jest --watch --collectCoverage --runInBand',
    mutation: 'npx stryker run',
    docs: 'docs',
    patch: 'git push && npm version patch && npm publish',
    minor: 'git push && npm version minor && npm publish',
    major: 'git push && npm version major && npm publish',
    rollup: './node_modules/.bin/rollup -c',
    prepublishOnly: './node_modules/.bin/rollup -c',
  });
});

test('Test ammendPackage.js - NodeJS module', async function () {
  await ammendPackage(false, './testdir');
  const pkg = JSON.parse(await fs.read('./testdir/package.json'));

  expect(pkg.devDependencies).toStrictEqual({
    '@danielcobo/docs': '^1.0.16',
    jest: '^27.2.5',
    '@stryker-mutator/core': '^5.4.1',
    '@stryker-mutator/jest-runner': '^5.4.1',
  });

  expect(pkg.scripts).toStrictEqual({
    test: 'jest --collectCoverage --runInBand',
    testing: 'jest --watch --collectCoverage --runInBand',
    mutation: 'npx stryker run',
    docs: 'docs',
    patch: 'git push && npm version patch && npm publish',
    minor: 'git push && npm version minor && npm publish',
    major: 'git push && npm version major && npm publish',
    rollup: './node_modules/.bin/rollup -c',
  });
});
