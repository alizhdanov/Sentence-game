import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormItem.css';
import Heading from './Heading';

class FormItem extends Component {
  input = React.createRef();

  componentDidMount() {
    if (this.props.autofocus) {
      const input = this.input.current;
      // manage autofocus after slide change
      setTimeout(() => {
        input.focus();
      }, 600);
    }
  }

  render() {
    const { label, value, name, error, touched, onChange, onBlur } = this.props;
    return (
      <label className="input">
        <Heading>{label}</Heading>
        <input
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          ref={this.input}
        />
        <div className="error">{touched && error}</div>
      </label>
    );
  }
}

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  autofocus: PropTypes.bool,
};

export default FormItem;
