import React, { useState, useEffect } from 'react'
// import {logo} from 'https://levents.asia/wp-content/uploads/2021/10/logo.png'
import '../scss/Header.scss'
import FavoriteProduct from './Modal/FavoriteProduct'
import HeaderTop from './Header/HeaderTop';
import HeaderBot from './Header/HeaderBot';
import { Route } from 'react-router-dom';

const Header = () => {

    // useEffect(() => {
    //     alert('reload!')
    // }, [])

    return (
        <div>
            <HeaderTop />
            <HeaderBot />
        </div>

    )
}

export default Header