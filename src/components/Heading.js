import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children }) => {
  return <h3 className="heading">{children}</h3>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
