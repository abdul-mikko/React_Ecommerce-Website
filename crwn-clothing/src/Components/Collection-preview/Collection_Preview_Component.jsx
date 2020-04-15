import React from 'react';
import CollectionMenuItem from '../Collection-menu-item/Collection-menu-item-component'
import './collection-preview.styles.scss'

const ShopHomePage = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((val, idx) => idx < 4)
                        .map(({ id, ...menu }) => <CollectionMenuItem key={id} {...menu} />)
                }
            </div>
        </div>
    );
}


export default ShopHomePage;