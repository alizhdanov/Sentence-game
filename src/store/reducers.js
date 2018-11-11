import { combineReducers } from 'redux';
import validator from '../utils/validator';
import { notEmpty } from '../utils/rules';
import { CHANGE_FORM } from './actions';

// basic shape of form item with initial value and validation rules
export const createFormItem = ({
  defaultValue = '',
  rules = [notEmpty],
} = {}) => {
  return {
    value: defaultValue,
    error: validator(rules, defaultValue),
    touched: false,
    rules,
  };
};

export const initialState = {
  who: createFormItem(),
  what: createFormItem(),
  when: createFormItem(),
  where: createFormItem(),
};

export const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM:
      const { name, value } = action.payload;
      const currentForm = state[name];
      return {
        ...state,
        [name]: {
          ...currentForm,
          value,
          touched: true,
          error: validator(currentForm.rules, value),
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form,
});

export default rootReducer;
