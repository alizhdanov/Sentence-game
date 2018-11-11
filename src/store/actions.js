export const CHANGE_FORM = 'CHANGE_FORM';

export const changeForm = (name, value) => ({
  type: CHANGE_FORM,
  payload: {
    name,
    value,
  },
});
