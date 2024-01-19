/* eslint-disable no-underscore-dangle */
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
  expect(HexletCode.formFor(template, { url: '/users' }, () => {})).toBe("<form action='/users' method='post'></form>");
});

test('test 2. Input', () => {
  const { result } = JSON.parse(readFile('file1.json'));

  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  })).toBe(result);
});

test('test 3. TextArea', () => {
  const { result } = JSON.parse(readFile('file2.json'));

  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  })).toBe(result);
});

test('test 4. submit', () => {
  const { result } = JSON.parse(readFile('file3.json'));

  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('name');
    f.input('job');
    f.submit('Wow');
  })).toBe(result);
});
