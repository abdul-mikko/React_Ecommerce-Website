import React from "react"
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './original.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>  <Logo classname='logo' /> </Link>

            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>ABOUT</Link>
            </div>

        </div >
    );
}
export default Header;