import React, { Component } from 'react';

export default function Product (props){
    let { product, image, price, id, deleteFn } = props
    return(
        <div key={id}>
           <img src={image} alt=""/>
            <p>{product}</p>
            <p>{price}</p>
            <button onClick={() => {deleteFn(id)}}>Delete</button>
        </div>
    )
};