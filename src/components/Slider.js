import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import './Slider.css';

class Slider extends Component {
  slider = React.createRef();

  state = {
    activeIndex: 0,
  };

  handleSlideChange = (oldIndex, newIndex) => {
    this.setState({ activeIndex: newIndex });
    this.props.onChange(newIndex);
  };

  handleNext = () => {
    this.slider.current.slickNext();
  };

  handlePrev = () => {
    this.slider.current.slickPrev();
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { children, nextDisabled } = this.props;
    const { activeIndex } = this.state;

    const settings = {
      arrows: false,
      draggable: false,
      accessibility: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      swipe: false,
      beforeChange: this.handleSlideChange,
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <SlickSlider ref={this.slider} className="slider" {...settings}>
          {children}
        </SlickSlider>
        <div className="slider-controls">
          <button
            className="button next"
            disabled={nextDisabled}
            onClick={this.handleNext}
          >
            next
          </button>
          <button
            type="button"
            className="button prev"
            disabled={activeIndex === 0}
            onClick={this.handlePrev}
          >
            previous
          </button>
        </div>
      </form>
    );
  }
}

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Slider;
