import React from 'react';
import PropTypes from 'prop-types';


const Slide = ({ className, children }) => {
    return (
        
  <li><a href="#" className={className}>{children}</a></li>

 );

  };
  Slide.propTypes = {
    className: PropTypes.string
  };
  
  Slide.defaultProps = {
    className: null
  };

export default Slide;