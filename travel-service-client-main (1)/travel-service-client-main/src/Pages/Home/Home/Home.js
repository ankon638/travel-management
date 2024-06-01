import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Place from '../Place/Place';
import AboutMe from './AboutMe/AboutMe';
import GoogleMap from './GoogleMap/GoogleMap';
import Services from './Services/Services';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='my-5 text-center'>
                <Link to="/allservices">
                    <button className="btn btn-primary">See All Services</button>
                </Link>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div>
                <Place></Place>
            </div>
            <div className='flex flex-col items-center my-5'>
                <h2 className='text-2xl font-semibold mb-4 underline underline-offset-4'>My Location: Daffodil International University</h2>
                <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default Home;