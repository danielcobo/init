const fs = require('@danielcobo/fs');
const makeFolders = require('./makeFolders.js');

beforeEach(async function () {
  await fs.mk('./testdir');
});

afterEach(async function () {
  await fs.rm('./testdir');
});

test('Test makeFolders.js - browser module', async function () {
  await makeFolders(true, './testdir');
  const testdir = await fs.read('./testdir');

  expect(testdir.pruned.dirs).toStrictEqual(['dist', 'src']);
});

test('Test makeFolders.js - NodeJS module', async function () {
  await makeFolders(false, './testdir');
  const testdir = await fs.read('./testdir');

  expect(testdir.pruned.dirs).toStrictEqual(['src']);
});
