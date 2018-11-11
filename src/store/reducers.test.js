import { form, initialState } from './reducers';
import { CHANGE_FORM } from './actions';

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
