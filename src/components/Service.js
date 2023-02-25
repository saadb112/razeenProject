import React from 'react'
import "./Service.css"

import car from "./images/car.png"
const Service = () => {
    return (
        <>
            <div className='service'>
                <div className='service-sec'>
                    <img src={car} alt="" />
                </div>
                <div className='service-content'>
                    <div className='content'>
                        <h2>Rörmokare Göteborg <br />
                            med VVS Jour 24/7</h2>
                        <p>När du behöver pålitliga och utbildade rörmokare i Göteborg kan du vända dig till oss. Vi har ett flertal vvs montörer som är ute på fältet och dagligen utför både planerade och akuta VVS-arbeten. Som kund kan du anlita oss för enklare reparationer inom VVS eller större problem som kan uppstå där total entreprenad behövs.. Anlita en kunnig vvs montör och rörmokare i Göteborg. Vi brukar kunna hjälpa alla inom 2 tim så slå oss en signal om ni behöver snabb vvs hjälp. På dom flesta jobb har vi fasta priser på installation av vvs produkter som WC, Varmvattenberedare, Köksblandare, Vattenutkastare mm.
                        </p>
                        <button type="">Boka</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Service