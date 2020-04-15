import React from 'react';
import './Menu-Item.style.scss'


export const MenuItem = ({ title, url, size }) => (
    <div className={`menu-item ${size}`}>
        <div className='background-image' style={{ backgroundImage: `url(${url})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
);


