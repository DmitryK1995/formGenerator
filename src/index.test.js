/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from 'vitest';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';

import HexletCode from './index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const template = { name: 'rob', job: 'hexlet', gender: 'm' };

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test 1', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, () => {})).toBe('<form action="/users" method="post"></form>');
});

test('test 2', () => {
  expect(readFile('file1.json')).toBe(readFile('file2.json'));
});

test('test 3. Input', () => {
  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  })).toBe('<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><input name="job" type="text" value="hexlet"></form>');
});

test('test 4. TextArea', () => {
  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  })).toBe('<form action="#" method="post"><textarea cols="50" rows="50" name="job">hexlet</textarea></form>');
});
