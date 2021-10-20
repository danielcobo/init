const fs = require('@danielcobo/fs');
const copyBoilerplate = require('./copyBoilerplate.js');

beforeEach(async function () {
  await fs.mk('./testdir');
});

afterEach(async function () {
  await fs.rm('./testdir');
});

test('Test copyBoilerplate.js - browser module', async function () {
  await copyBoilerplate(true, './boilerplate', './testdir');
  const testdir = await fs.read('./testdir');

  expect(testdir.pruned.files).toStrictEqual([
    '.gitignore',
    '.npmignore',
    'rollup.config.js',
  ]);
});

test('Test copyBoilerplate.js - NodeJS module', async function () {
  await copyBoilerplate(false, './boilerplate', './testdir');
  const testdir = await fs.read('./testdir');

  expect(testdir.pruned.files).toStrictEqual(['.gitignore', '.npmignore']);
});
