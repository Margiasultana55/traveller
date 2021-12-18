import React from 'react';
import { Link } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import './Package.css'


const Package = ({ pack }) => {

    const { _id, img, name, price } = pack;

    return (
        <div>
            <div className=" boxx">
                <img className='' src={img} alt="" />
                <div className="contenntt-pack">
                    <div className='cont'>
                        <p>{name}</p>
                        <h5 >BDT:{price}</h5>
                    </div>
                    <div>
                        <Link to={`/booking/${_id}`} >
                            <button className='btn book-btn mt-3' >Book now</button></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Package;