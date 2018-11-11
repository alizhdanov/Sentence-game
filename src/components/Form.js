import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from './Slider';
import { changeForm } from '../store/actions';
import FormItem from './FormItem';
import Heading from './Heading';

class Form extends Component {
  input = React.createRef();

  state = {
    activeIndex: 0,
  };

  getFields = () => {
    const { who, what, where, when } = this.props;
    return [
      {
        name: 'who',
        label: 'Who?',
        value: who.value,
        error: who.error,
        touched: who.touched,
      },
      {
        name: 'what',
        label: 'What?',
        value: what.value,
        error: what.error,
        touched: what.touched,
      },
      {
        name: 'when',
        label: 'When?',
        value: when.value,
        error: when.error,
        touched: when.touched,
      },
      {
        name: 'where',
        label: 'Where?',
        value: where.value,
        error: where.error,
        touched: where.touched,
      },
    ];
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.props.onChange(name, value);
  };

  onSliderChange = activeIndex => this.setState({ activeIndex });

  render() {
    const { who, what, where, when } = this.props;
    const { activeIndex } = this.state;
    const fields = this.getFields();

    const nextDisabled = !fields[activeIndex] || !!fields[activeIndex].error;

    return (
      <Slider nextDisabled={nextDisabled} onChange={this.onSliderChange}>
        {fields.map(item => (
          <div key={item.label} className="slider-item">
            <FormItem
              label={item.label}
              value={item.value}
              name={item.name}
              error={item.error}
              touched={item.touched}
              onChange={this.handleChange}
              onBlur={this.handleChange}
              ref={this.input}
              autofocus
            />
          </div>
        ))}
        <div className="slider-item">
          <Heading>
            {who.value}
            <br />
            {what.value}
            <br />
            {where.value}
            <br />
            {when.value}
          </Heading>
        </div>
      </Slider>
    );
  }
}

Form.propTypes = {
  who: PropTypes.object.isRequired,
  what: PropTypes.object.isRequired,
  where: PropTypes.object.isRequired,
  when: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateFromProps = ({ form: { who, what, where, when } }) => ({
  who,
  what,
  where,
  when,
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeForm(name, value)),
});

export default connect(
  mapStateFromProps,
  mapDispatchToProps
)(Form);
