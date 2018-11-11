import { form, initialState, createFormItem } from './reducers';
import { CHANGE_FORM } from './actions';
import { notEmpty } from '../utils/rules';

describe('form reducers', () => {
  it('handles initial state', () => {
    expect(form(undefined, {})).toEqual(initialState);
  });

  it('handles form change', () => {
    const value = 'Jack';
    expect(
      form(undefined, {
        type: CHANGE_FORM,
        payload: {
          name: 'who',
          value,
        },
      })
    ).toEqual({
      ...initialState,
      who: {
        ...initialState.who,
        value,
        error: '',
        touched: true,
      },
    });
  });
});

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
