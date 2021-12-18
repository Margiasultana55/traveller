import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MyPackage from '../MyPackage/MyPackage';
import RecentBookings from '../RecentBookings/RecentBookings';
const drawerWidth = 200;

function Dashboardd(props) {
    const { user, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/home'><Button color="inherit" style={{ fontSize: '1rem', marginTop: 10 }}>Home</Button></Link><br />
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/service'><Button color="inherit" style={{ fontSize: '1rem', marginTop: 10 }}>Service</Button></Link><br />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/mypackage`}><Button color="inherit" style={{ fontSize: '1rem', marginTop: 10 }}>My Package</Button></Link><br />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/recentBooking`}><Button color="inherit" style={{ fontSize: '1rem', marginTop: 10 }}>Recent Bookings</Button></Link><br />


            {user?.email && <Button onClick={logout} style={{ backgroundColor: 'white', border: "1px solid black", fontWeight: 600, color: "black", marginTop: 30, marginLeft: 5 }} >Log out</Button>}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: 'rgba(20, 20, 20, 1.904)' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        <MyPackage></MyPackage>
                    </Route>
                    <Route path={`${path}/mypackage`}>
                        <MyPackage></MyPackage>
                    </Route>
                    <Route path={`${path}/recentBooking`}>
                        <RecentBookings></RecentBookings>
                    </Route>


                </Switch>
            </Box>
        </Box>
    );
}

Dashboardd.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboardd;
