import { notEmpty } from './rules';

describe('notEmpty', () => {
  it('returns error msg if value is empty', () => {
    expect(notEmpty('')).toBeTruthy();
  });

  it('returns no error if value is not empty', () => {
    expect(notEmpty('String')).toBeFalsy();
  });
});
