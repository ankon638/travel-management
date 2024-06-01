import React from 'react';
import img1 from '../../../assets/images/about_me/3.JPG'

const Place = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            <figure><img src={img1} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">World best beautiful places!</h2>
                <p>Torres del Paine National Park, Chile
                </p>
                <p>There's no better way to experience Patagonia's rugged natural beauty than in Torres del Paine National Park. The UNESCO Biosphere Reserve is home to its namesake granite towers as well as sparkling lagoons and otherworldly glaciers — the park's Perito Moreno Glacier is part of the third-largest ice cap in the world.
                </p>
            </div>
        </div>
    );
};

export default Place;