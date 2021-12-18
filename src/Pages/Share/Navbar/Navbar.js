import React from 'react';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark my-navbar fixed-top">
                <div className="container-fluid">

                    <button className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h5 className='mt-2 ms-3 me-3 ' style={{ color: 'white', fontFamily: 'monospace' }}><span style={{ color: 'rgb(10, 155, 212)', fontWeight: 'bold', fontFamily: '-moz-initial' }}>T</span>raveller</h5>
                        <ul className="navbar-nav me-auto  mb-lg-0  ">
                            <li className="nav-item ">
                                <NavLink className='nav-link ' style={{ textDecoration: 'none', color: 'white' }} to='/home'> Home</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink className='nav-link ' style={{ textDecoration: 'none', color: 'white' }} to='/service'>Service</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className='nav-link ' style={{ textDecoration: 'none', color: 'white' }} to='/gallery'>Gallery</NavLink>
                            </li>


                            {user?.email &&
                                <li className="nav-item ">
                                    <NavLink className='nav-link ' style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> Dashboard</NavLink>
                                </li>

                            }


                        </ul>
                    </div>
                    <form className="d-flex ">


                        {
                            user?.email ?
                                <div className="d-flex">
                                    <span className='ms-5 mt-2 text-white'> <i className="far fa-user-circle"></i> {user?.displayName}</span>
                                    <button onClick={logout} className="btn btn-outline-white  login-btn px-3 me-1 " >Log out</button>
                                </div>
                                :


                                <NavLink to='/login'>  <button className="btn btn-outline-white login-btn  px-4  me-4 " type="submit">Login</button></NavLink>

                        }
                    </form>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;