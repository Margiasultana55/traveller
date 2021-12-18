import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyPackage = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    //get booking 
    useEffect(() => {

        fetch("https://warm-earth-51398.herokuapp.com/booking")
            .then(res => res.json())
            .then(data => {
                const service = data.filter(data => data.email === user.email);

                setOrders(service)
                // console.log(service);
            })
            .catch(e => {
                console.log(e);
            })
    }, [user.email])


    //Delete booking
    const handleDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://warm-earth-51398.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })

        }

    }
    return (
        <div>
            <h2 className='arrived'>My Package {orders.length}</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 600 }}>Client-Name</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">email</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Package-Name</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Price</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ color: 'gray' }} component="th" scope="row">
                                    {row.clientName}
                                </TableCell>
                                <TableCell style={{ color: 'gray' }} align="right">{row.email}</TableCell>
                                <TableCell style={{ color: 'gray' }} align="right">{row.serviceName}</TableCell>
                                <TableCell style={{ color: 'gray' }} align="right">{row.packagePrice}</TableCell>

                                <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} style={{ backgroundColor: 'white', border: "1px solid #EA1F15", fontWeight: 600, color: "#EA1F15" }} >Cancle</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default MyPackage;