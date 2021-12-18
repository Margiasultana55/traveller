import React from 'react';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../img/banner1.jpg';

import banner3 from '../../../img/banner3.jpg';
import v1 from '../../../videos/video-1.mp4'
import './Banner.css'


const Banner = () => {

    return (
        <div className='home'>
            <div className='content'>
                <h3 className='glow'>Aventure is worthwhile</h3>
                <h5 className='typewriter mt-3' style={{ fontFamily: 'sans-serif', fontSize: '26px' }}>Discover <span style={{ color: 'rgb(156, 226, 253)', fontWeight: 'bold', }}> new places with us..</span></h5>

                <NavLink to='/about'>  <button className="btn btn-outline-white login-btnn  px-5  me-4 " type="submit">Destinaton</button></NavLink>
            </div>
            <div className='videoContainet'>
                <video autoPlay loop muted >
                    <source src={v1} type='video/mp4' />

                </video>
            </div>
        </div>
    );
};

export default Banner;