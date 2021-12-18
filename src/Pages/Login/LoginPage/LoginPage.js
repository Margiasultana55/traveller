import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './Login.css'



const LoginPage = () => {

    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const fied = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fied] = value;
        setLoginData(newLoginData);


    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();

    }

    return (
        <div style={{

        }}>
            <form onSubmit={handleLogin} style={{ paddingBottom: '8rem', color: 'white' }}>
                <Typography className=' head' style={{ paddingTop: '10rem' }} variant="h4" component="h2">
                    <span>L</span>
                    <span>O</span>
                    <span>G</span>
                    <span>I</span>
                    <span>N</span>
                </Typography><br />
                <Box style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
                </Box>

                <TextField sx={{ width: '50%', mt: 5, }}

                    id="standard-password-input"
                    label="email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <TextField sx={{ width: '50%', mt: 5, mb: 2 }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <NavLink style={{ textDecoration: 'none' }} to='/register'>
                    <Button style={{ color: 'gray' }} variant="text">New user?<span style={{ color: "rgb(10, 155, 212)" }}>Please register</span></Button>
                </NavLink>
                <br />
                <button type="submit" className="btn login-btnnn px-5 mt-3 ">Login</button><br />

            </form>
            {
                isLoading && <CircularProgress />
            }


        </div >
    );
};

export default LoginPage;