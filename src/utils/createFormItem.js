import validator from './validator';
import { notEmpty } from './rules';

// basic shape of form item with initial value and validation rules
const createFormItem = ({ defaultValue = '', rules = [notEmpty] } = {}) => {
  return {
    value: defaultValue,
    error: validator(rules, defaultValue),
    touched: false,
    rules,
  };
};

export default createFormItem;
