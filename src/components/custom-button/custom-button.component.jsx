import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) => (
  <div>
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  </div>
)
export default CustomButton;
