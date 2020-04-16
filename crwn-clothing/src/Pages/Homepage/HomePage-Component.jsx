import React from 'react'
import './homepage.styles.scss'
import DirectoryMenu from '../../Components/Directory-menu/Directory-menu';



export default function HomePageComponent() {
    return (
        <div className="homepage">
            <DirectoryMenu />
        </div>
    );
}

