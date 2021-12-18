import React from 'react';
import './About.css'
import d1 from '../../img/af.jpg'
import d2 from '../../img/an.jpg'
import d3 from '../../img/ca.jpg'
import d4 from '../../img/eu.jpg'
import d5 from '../../img/me.jpg'
import d6 from '../../img/na.jpg'
import d7 from '../../img/nam.jpg'
import d8 from '../../img/nz.jpg'

const About = () => {
    return (
        <div className=' mb-5 container' style={{ marginTop: '6rem' }}>
            <h1 className='mb-5 text-white headd'>

                <span>D</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
                <span>I</span>
                <span>N</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>

            </h1>
            <div className=" align-items-center  boxx-container ">
                <div className=" boxx">
                    <img className='' src={d1} alt="" />
                    <div className="contenntt">
                        <p>AFRICA</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d2} alt="" />
                    <div className="contenntt">
                        <p>ANTARCTICA</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d3} alt="" />
                    <div className="contenntt">
                        <p>Caribbean</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d4} alt="" />
                    <div className="contenntt">
                        <p>Europe</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d5} alt="" />
                    <div className="contenntt">
                        <p>Middle East</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d6} alt="" />
                    <div className="contenntt">
                        <p>Northeast Asia</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d7} alt="" />
                    <div className="contenntt">
                        <p>North America</p>
                    </div>
                </div>
                <div className=" boxx">
                    <img className='' src={d8} alt="" />
                    <div className="contenntt">
                        <p>New Zealand</p>
                    </div>
                </div>





            </div >
        </div>
    );
};

export default About;