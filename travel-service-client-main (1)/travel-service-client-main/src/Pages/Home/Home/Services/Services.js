import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('AllServices')

    useEffect(() => {
        fetch('https://travel-service-server-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className='grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;