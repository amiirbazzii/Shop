import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/download.svg';
import { auth } from '../../firebase/FireBase-utlis';
import { connect } from "react-redux";
 
const Header = ({ currentUser }) => (
    <div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo'/>
    </Link>
    <div className="options">
        <Link className='option' to='/shop'>
        SHOP
        </Link>
        <Link className='option' to='/shop'>
        CONTRACT
        </Link>
        {
            currentUser ?(
            <div className='option' onClick={() => auth.signOut()} > SIGN OUT </div>
            ):(
            <Link className='option' to='/signin'> SIGN IN </Link>
            )
        }
    </div>
</div>
)
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
