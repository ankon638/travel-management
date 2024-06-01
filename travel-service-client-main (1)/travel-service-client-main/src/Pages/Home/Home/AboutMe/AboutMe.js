import React from 'react';
import img1 from '../../../../assets/images/about_me/1.png'
import img2 from '../../../../assets/images/about_me/2.jpg'

const AboutMe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            {/* <figure><img src={img1} alt="Album" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">About Me!</h2>
                <p>I am one of the top 500 ranked tourist in the world.
                </p>
                <h2 className="card-title">Who is a Tourist?</h2>
                <p>Anyone travelling for leisure, business, sports, family reasons, romance, shopping, or recreation purposes, and staying overnight in a place outside their usual environment is classed as a tourist. There are many reasons that motivate tourists to visit another destination.
                </p>
            </div>
            <figure><img src={img2} alt="Album" /></figure>
        </div>
    );
};

export default AboutMe;