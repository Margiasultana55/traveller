import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Service.css';
const Services = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://warm-earth-51398.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className='container' style={{ marginTop: '5rem' }}>
            <h1 className='mb-5 headd text-white'>

                <span>P</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
                <span>A</span>
                <span>G</span>
                <span>E</span>
            </h1>
            <div className=" align-items-center  boxx-container  ">
                {
                    packages.map(pack => <Package
                        key={pack._id}
                        pack={pack}
                    ></Package>)
                }



            </div >
        </div>
    );
};

export default Services;