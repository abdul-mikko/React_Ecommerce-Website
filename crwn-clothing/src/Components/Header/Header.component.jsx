import React from "react"
import './header.styles.scss'
import { auth } from '../../Firebase/Firebase_Util'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './original.svg'

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>  <Logo className='logo' /> </Link>

            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>ABOUT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>

        </div >
    );
}
export default Header;