import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import {useState} from 'react';

const Nav = () => {

    
    return (
        <nav >
            <div className="navbar">
                <p ><Link className='link' to="/" style={{"fontSize": "25px" }}><b><i>ZOMATO</i></b></Link></p>
                <p ><Link className='link' to="/addrestro" >Add your Restaurant<b>+</b></Link></p>
                <p ><Link className='link' to="/cart" >Your Orders</Link></p>
                <p ><Link className='link' to="/address_payment" >Address & Payment</Link></p>
                <p ><Link className='link' to="/login">LOGIN</Link></p>
                <p ><Link className='link' to="https://www.zomato.com/mobile">Get an App</Link></p>
            </div>
            <hr/>
        </nav>
    )
}

export default Nav
