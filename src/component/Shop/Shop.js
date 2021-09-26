import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import './Shop.css';


const Shop = () => {

    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setCars(data));

    }, []);

    const handleToCart = (car) => {
        const newCart = [...cart, car]
        setCart(newCart);

        // console.log(car);
    }


    return (
        <div className='shop-container'>

            <div className='cars-container'>

                {
                    cars.map(car => <Cars
                        handleToCart={handleToCart}
                        key={car.number}
                        car={car} />)
                }

            </div>

            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;