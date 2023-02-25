import React from 'react'
import Front from './Front'
import "./Header.css"
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <Front />
        </div>
    )
}

export default Header
