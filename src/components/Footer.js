import React from 'react'
import "./Footer.css"

import logo2 from "./images/logo2.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import youtube from "./images/youtube.png"

import telephone from "./images/call.png"
import message from "./images/message.png"
import location from "./images/locat.png"

import endline from "./images/endline.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-sec'>

                <div className='footer-portion'>
                    <img className='footer-img' src={logo2} alt="" />
                    <p className='footer-image-p'>Vi utför VVS-arbeten och VVS-service i nyproduktioner, ombyggnader och industri runt om i Göteborg, Kungälv och Stenungsund. Vi har erfarenhet av VVS sedan 1989 vars huvudsakliga verksamhet är inom värme och sanitet.</p>

                    <div className='icons'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                    </div>

                </div>
                <div className='footer-portion'>
                    <h2>Lankar</h2>
                    <p>
                        Home <br />

                        Plumber On-call Gothenburg<br />

                        FAQ - Nibe<br />

                        FAQ exhaust air heat pump<br />

                        Water heater<br />

                        Manufacturers<br />

                        Contact<br />
                    </p>
                </div>
                <div className='footer-portion'>
                    <h2>Tjänster</h2>
                    <p>
                        Badrumsrenovering<br />
                        Byta Toalettstol<br />
                        Rorjour<br />
                        Varmepumpar<br />
                        Avloppsrensning<br />
                        Varmvattenberedare<br />
                        Varmesystem<br />
                        Undercentraler<br />
                        Rordragning<br />
                        Blandare<br />
                        Serviceavtal<br />
                        Vattenmatarkonsol<br />
                    </p>
                </div>
                <div className='footer-portion'>
                    <div className='footer-card'>
                        <h2>Kontakt</h2>
                        <div className='card-item'>
                            <div className='card-image'>
                                <img className='card-img' src={telephone} alt="" />
                            </div>
                            <div className='card-content'>
                                <h2>Phone</h2>
                                <p>010-330 93 93</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-image'>
                                <img className='card-img' src={message} alt="" />
                            </div>
                            <div className='card-content'>
                                <h2>Email</h2>
                                <p>info@vvsgroup.se</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-image'>
                                <img className='card-img' src={location} alt="" />
                            </div>
                            <div className='card-content'>
                                <h2>Location</h2>
                                <p>AB Marieholmsgatan 2415 02 <br />
                                    Gothenburg</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <img className='endline' src={endline} alt="" />
            <h2 className='copyright'>© 2022 vvsgroup. All rights reserved</h2>

        </div>
    )
}

export default Footer
