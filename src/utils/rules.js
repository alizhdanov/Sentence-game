// for simplicity reason we're assuming that empty string means truthy value

export const notEmpty = value => {
  return value.length ? '' : 'Can not be empty';
};
