import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, ...rest }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest}>
        { children }
    </button>
)

export default CustomButton;