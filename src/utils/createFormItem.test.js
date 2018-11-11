import createFormItem from './createFormItem';
import { notEmpty } from './rules';

describe('createFormItem', () => {
  it('creates form item without any params', () => {
    expect(createFormItem()).toEqual({
      value: '',
      error: 'Can not be empty',
      touched: false,
      rules: [notEmpty],
    });
  });

  it('uses default value if specified', () => {
    const test = createFormItem({ defaultValue: 'test' });
    expect(test.value).toBe('test');
  });

  it('uses rules if specified', () => {
    const rules = [() => 'error'];
    const test = createFormItem({ rules });
    expect(test.rules).toEqual(rules);
    expect(test.error).toBe('error');
  });
});
