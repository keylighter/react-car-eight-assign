import React from 'react';
import './Cars.css'

const Cars = (props) => {
    const { name, price, image, mileage, size, country } = props.car;
    // console.log(image)
    return (
        <div className='car-card'>
            <img className='car-image' src={image} alt='' />
            <h5>Name: {name}</h5>
            <p>Mileage: {mileage} </p>
            <p>Size: {size} </p>
            <p>Price:${price} </p>
            <p>Origin: {country}</p>
            <button onClick={() => props.handleToCart(props.car)}>Add to cart</button>
            <br /><br />
        </div>
    );
};

export default Cars;