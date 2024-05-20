import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedCart = [];
        // step1: get id 
        for (const id in storeCart) {
            //step 2: get the product from the products 
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: set quantity in the cart
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the addedproduct to the saved cart 
                savedCart.push(addedProduct);
            }
            // console.log(id, addedProduct);
        }
        // step 5: set the saved cart to the cart state 
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
         // if document doesn't exist in the cart , then set  quantity  =1
         // if exist update quantity by1
        const exists = cart.find(p => p.id === product.id);
        if (!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
     else{
         exists.quantity = exists.quantity + 1;
         const remaining = cart.filter(p => p.id !== product.id);
        newCart = [...remaining, exists];
     }


        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;