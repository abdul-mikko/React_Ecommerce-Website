import React, { Component } from 'react'
import { sections } from './original'
import './Directory-menu.style.scss';
import { MenuItem } from '../Menu-item/Menu-item.component';





export default class DirectoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]

        }

    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({ title, imageUrl, id, size }) => (< MenuItem id={id} title={title} url={imageUrl} size={size} />
                    ))}
            </div>
        );
    }
}


















