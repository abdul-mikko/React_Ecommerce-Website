import React from 'react';
import { SHOP_DATA } from './SHOP_DATA';
import ShopHomePage from '../../Components/Collection-preview/Collection_Preview_Component'

class CollectionArray extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collectionArray: SHOP_DATA
        }

    }

    render() {

        return (
            <div>
                {
                    this.state.collectionArray.map(({ id, ...args }) => (
                        < ShopHomePage key={id} {...args} />
                    ))
                }
            </div>
        );
    }
}

export default CollectionArray;