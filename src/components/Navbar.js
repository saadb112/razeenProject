import React from 'react'
import "./Navbar.css"

import logo from "./images/logo.png"
import search from "./images/searchicon.svg"
import boka from "./images/Groupboka.png"
import phone from "./images/Groupphone.png"
import telephone from "./images/Grouptelephone.png"
import msg from "./images/Groupmsg.png"
import location from "./images/Grouplocation.png"
import dropdown from "./images/dropdown.png"
import line from "./images/line.png"
const Navbar = () => {
    return (
        <>
            <div className='top-nav'>
                <div className='top-nav-sec'>
                    <div className='top-nav-left-sec'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='top-nav-right-sec'>
                        <div className='top-nav-details'>
                            <img src={telephone} alt="" />
                            <h2>Telefon</h2>
                            <p>010-330 93 93</p>
                        </div>
                        <img src={line} alt="" />
                        <div className='top-nav-details'>
                            <img src={msg} alt="" />
                            <h2>E-post</h2>
                            <p>info@vvsgroup.se</p>
                        </div>
                        <img src={line} alt="" />
                        <div className='top-nav-details'>
                            <img src={location} alt="" />
                            <h2>Plats</h2>
                            <p>AB Marieholmsgatan 2415 02 Gothenburg</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='navbar'>
                <div className='nav'>
                    <div className='nav-left'>
                        <ul>
                            <li><a href="/">Hem</a></li>
                            <li>
                                <a href="/">Tjänster
                                    <img src={dropdown} alt="" />
                                </a>
                            </li>
                            <li><a href="/">Installerad Klar</a></li>
                            <li><a href="/">Boka en rörmokare</a></li>
                            <li><a href="/">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className='nav-right'>
                        <div className='input'>
                            <input type="text" name="search" placeholder='Sök' />
                            <div className='searchbtn'>
                                <img src={search} alt="search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bottom'>
                <div className='nav-bottom-sec'>
                    <div className='nav-bottom-left'>
                        <h2>Rörmokare Göteborg</h2>
                        <h3>Fasta Priser</h3>
                    </div>
                    <div className='nav-bottom-center'>
                        <button type=""><img src={boka} alt="" /> Boka</button>
                        <button type=""> <img src={phone} alt="" />Ring</button>
                    </div>
                    <div className='nav-bottom-right'>
                        <h2>Varmvattenberedare</h2>
                        <h3>Installerat & klart</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
