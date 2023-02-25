import React from 'react'
import "./Products.css"

import prod1 from "./images/prod1.png"
import prod2 from "./images/prod2.png"
import prod3 from "./images/prod3.png"
import prod4 from "./images/prod4.png"
import prod5 from "./images/prod5.png"
import prod6 from "./images/prod6.png"
import prod7 from "./images/prod7.png"
import prod8 from "./images/prod8.png"
import prod9 from "./images/prod9.png"
import ProductBox from './ProductBox'


const Products = () => {
    return (
        <div className='product'>
            <div className='product-sec'>
                <div className='product-sec-top'>
                    <h3>Vår butik</h3>
                    <h2>Kampanj - tom 21/12</h2>
                </div>
                <div className='product-sec-bottom'>
                    <div className='products-portion'>
                        <ProductBox image={prod1} name="Nibe Compact 300-CU" price="köpa (SEK 22,995)" discount="SEK 26,790" />
                        <ProductBox image={prod2} name="Nibe Compact 200-CU" price="köpa (SEK 21,690)" discount="SEK 25,999" />
                        <ProductBox image={prod3} name="Nibe Compact 300-R" price="köpa (SEK 23,990)" discount="SEK 27,900" />
                    </div>
                    <div className='products-portion'>
                        <ProductBox image={prod4} name="Nibe Eminent 100 – CU" price="köpa (SEK 14,720)" discount="SEK 16,720" />
                        <ProductBox image={prod5} name="Nibe Eminent 100 – R" price="köpa (SEK 14,234)" discount="SEK 16,578" />
                        <ProductBox image={prod6} name="Nibe Compact 200-R" price="köpa (SEK 23,190)" discount="SEK 26,899" />
                    </div>
                    <div className='products-portion'>
                        <ProductBox image={prod7} name="Nibe Eminent 35 – CU" price="köpa (SEK 9999)" discount="SEK 11,250" />
                        <ProductBox image={prod8} name="Nibe VVM 225" price="köpa (SEK 52,190)" discount="SEK 59,990" />
                        <ProductBox image={prod9} name="WC chair 6860, Ifö Sign" price="köpa (SEK 5990)" discount="SEK 6490" />
                    </div>

                    <button type="">Visa Alla</button>
                </div>
            </div>
        </div>
    )
}

export default Products
