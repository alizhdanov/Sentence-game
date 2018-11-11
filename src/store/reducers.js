import { combineReducers } from 'redux';
import validator from '../utils/validator';
import createFormItem from '../utils/createFormItem';
import { CHANGE_FORM } from './actions';

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
