import React from 'react'
import "./Front.css"

import image from "./images/front.jpg"

import box from "./images/box.png"
const Front = () => {
    return (
        <div className='front'>
            <div className='front-sec'>
                <div className='front-sec-left'>
                    <div className='front-left-content'>
                        <h3>Om oss</h3>
                        <h2>Rörmokare Göteborg <br />
                            med VVS Jour 24/7</h2>
                        <p>När du behöver pålitliga och utbildade rörmokare i Göteborg kan du vända dig till oss. Vi har ett flertal vvs montörer som är ute på fältet och dagligen utför både planerade och akuta VVS-arbeten. Som kund kan du anlita oss för enklare reparationer inom VVS eller större problem som kan uppstå där total entreprenad behövs.. Anlita en kunnig vvs montör och rörmokare i Göteborg. Vi brukar kunna hjälpa alla inom 2 tim så slå oss en signal om ni behöver snabb vvs hjälp. På dom flesta jobb har vi fasta priser på installation av vvs produkter som WC, Varmvattenberedare, Köksblandare, Vattenutkastare mm.</p>
                        <div className='jobs-sec'>
                            <div className='job'>
                                <h1>512</h1>
                                <p>Total Jobs</p>
                            </div>
                            <div className='job'>
                                <h1>15</h1>
                                <p>Experts</p>
                            </div>
                        </div>
                        <button type="">Boka</button>
                    </div>
                </div>
                <div className='front-sec-right'>
                    <img src={image} alt="" />
                    <div className='box'>
                        <img src={box} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Front
