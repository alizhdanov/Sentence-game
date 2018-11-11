import { CHANGE_FORM, changeForm } from './actions';

describe('actions', () => {
  it('changeForm should create CHANGE_FORM action', () => {
    const name = 'name';
    const value = 'value';
    expect(changeForm(name, value)).toEqual({
      type: CHANGE_FORM,
      payload: {
        name: name,
        value: value,
      },
    });
  });
});
