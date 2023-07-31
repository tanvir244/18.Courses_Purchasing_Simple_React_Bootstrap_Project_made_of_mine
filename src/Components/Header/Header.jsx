import React from 'react';
import logo from '../../image/logo.png';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Header.css'

const Header = () => {
    return (
        <div className="row">
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;