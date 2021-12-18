import React from 'react';
import logo from '../../../img/logo.png'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgba(8, 8, 8, 0.904)", color: 'white', paddingBottom: 1, paddingTop: 20 }}>
            <div className="container-fluid px-5">
                <h4 className="mt-2 mb-4"><i className="fab fa-facebook me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-youtube me-3"></i>
                    <i className="fab fa-instagram "></i></h4>
            </div>
            <div className=" container border-top text-center ">
                <p className="p-3">© 2021 Traveller, All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;