import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
//import { ListGroup } from 'react-bootstrap';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCarts(newCart);

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }

            </div>

            <div className="card-container">
                <h6>Order Summary</h6>
                <p>Selected Items: {cart.length}</p>

            </div>

        </div>





    );
};

export default Shop;