import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div style ={{
        // eslint-disable-next-line no-template-curly-in-string
        backgroundImage: `url(${imageUrl})`
    }} 
        className = {`${size} menu-item`}>
        <div className = 'content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;