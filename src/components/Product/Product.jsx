import React from 'react';
import './Product.css';


const Product = (props) => {
    const { name, img, seller, price, stock, ratings } = props.product;

    const handleAddToCart = (product) => {
        console.log(product);
    }
        
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}Star:</p>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    ); 
};

export default Product;