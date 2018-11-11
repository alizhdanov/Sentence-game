import validator from './validator';

describe('validator.js', () => {
  it('return the first error message in rules', () => {
    expect(
      validator([() => 'First error', () => 'Second error'], 'value')
    ).toBe('First error');
  });

  it('return an empty string, if no error occured', () => {
    expect(validator([() => ''], 'value')).toBe('');
  });
});
