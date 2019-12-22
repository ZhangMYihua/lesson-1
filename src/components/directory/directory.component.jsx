import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { SECTION_DATA } from '../../util/data';
import './directory.styles.scss';

function Directory(){

    const [sections] = useState(SECTION_DATA);

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...rest }) => (
                    <MenuItem key={id} {...rest}/>
                ))
            }
        </div>
    );
}

export default Directory;