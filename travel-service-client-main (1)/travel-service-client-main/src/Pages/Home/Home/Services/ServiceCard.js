import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <PhotoProvider>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                    <p>
                        {
                            description.length > 100 ?
                                <p>{description.slice(0, 100) + '...'}</p>
                                :
                                <p>{description}</p>
                        }
                    </p>
                    <div className="card-actions justify-center">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider >
    );
};

export default ServiceCard;