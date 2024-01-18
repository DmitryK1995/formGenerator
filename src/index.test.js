// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from 'vitest';
import Tag from './index.ts';

test('test 1', () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>');
});
