import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { SHOP_DATA } from '../../util/data';

function ShopPage(){

    const [collections] = useState(SHOP_DATA);

    return (
        <div>
            {
                collections.map(({ id, ...rest }) => 
                    <CollectionPreview key={id} {...rest} />
                )
            }
        </div>
    );
}

export default ShopPage;