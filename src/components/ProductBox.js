import React from 'react'
import "./ProductBox.css"
const ProductBox = ({ image, name, price, discount }) => {
    return (
        <div className='productbox'>
            <div className='product-top'>
                <img src={image} alt="" />
                <span>Rea!</span>
            </div>
            <div className='product-bottom'>
                <h3>Bergvärmepumpar</h3>
                <h2>{name}</h2>
                <button type="">{price}</button>
                <h4>{discount}</h4>
            </div>
        </div>
    )
}

export default ProductBox
