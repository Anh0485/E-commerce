import React, { useState, useEffect } from 'react'
// import {logo} from 'https://levents.asia/wp-content/uploads/2021/10/logo.png'
import '../scss/Header.scss'
import FavoriteProduct from './Modal/FavoriteProduct'
import HeaderTop from './Header/HeaderTop';
import HeaderBot from './Header/HeaderBot';
import Banner from './Banner';

const Header = () => {
   
    // useEffect(() => {
    //     alert('reload!')
    // }, [])

    return (
        <React.Fragment>
            <HeaderTop/>
            <HeaderBot/>
            <Banner/>
        </React.Fragment>

    )
}

export default Header