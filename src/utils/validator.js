// for simplicity reason we're assuming that empty string means truthy value

const validator = (rules, value) => {
  let error = '';

  for (let i = 0; i < rules.length; i++) {
    const validationMsg = rules[i](value);
    if (validationMsg) {
      error = validationMsg;
      break;
    }
  }

  return error;
};

export default validator;
