/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from 'vitest';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';

import Tag from './index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test 1', () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>');
});

test('test 2', () => {
  expect(readFile('file1.json')).toBe(readFile('file2.json'));
});
