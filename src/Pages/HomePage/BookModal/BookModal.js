import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';


import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBookingList } from '../../../redux/actions/bookingAction';

const BookModal = () => {

    let { postId } = useParams();
    // console.log(useParams);
    const [bookings, setBookings] = useState([]);

    // const [singleBookingData, setSingleBookingData] = useState([]);
    const dispatch = useDispatch();

    const { user } = useAuth();
    const initialInfo = { clientName: user?.displayName, email: user?.email }
    const [bookInfo, setBookInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookInfo };
        newInfo[field] = value;
        setBookInfo(newInfo);
        // console.log(bookInfo);
    }

    const handleBookSubmit = e => {
        //collect data
        const booking = {
            ...bookInfo,
            serviceName: name,
            packagePrice: price
        }
        // const array = [booking]
        console.log(booking);
        // setSingleBookingData([...singleBookingData, array]);
        // console.log("data", singleBookingData);

        //send data to server
        fetch('https://warm-earth-51398.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {

                // console.log(data);
                if (data.insertedId) {
                    alert('Booking successfully');

                }

            })




        dispatch(addToBookingList(booking));


        e.preventDefault();
    }
    //get package info from server
    useEffect(() => {
        fetch('https://warm-earth-51398.herokuapp.com/package')
            .then(res => res.json())
            .then(data => {
                const service = data.find(data => data._id === postId);
                setBookings(service);
                // console.log(data);
            });
    }, [postId])
    const { name, price } = bookings;
    // console.log(bookings);


    return (

        <>

            <h1 className='mb-5 text-white headd mt-5'>

                <span>B</span>
                <span>O</span>
                <span>O</span>
                <span>K</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </h1>

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'cernter', alignContent: 'center' }} className='container'>





                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{name}</p>
                <p>BDT:{price}</p>



                <form onSubmit={handleBookSubmit} style={{ width: '100%', marginBottom: '4rem', }}>
                    <TextField
                        label="email"
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        name="email"

                        onBlur={handleOnBlur}
                        defaultValue={user?.email}
                        size="small"
                    />
                    <TextField
                        label="name"
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        name="name"
                        onBlur={handleOnBlur}
                        defaultValue={user?.displayName}
                        size="small"
                    />


                    <TextField

                        label="phone"
                        name='phone'
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        onBlur={handleOnBlur}
                        size="small"
                    /> <br />
                    <TextField

                        label="date"
                        name='date'
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        onBlur={handleOnBlur}
                        size="small"
                    /> <br />
                    <Button className=' btn book-btn px-5'
                        type="submit" sx={{ m: 1 }} style={{ border: '1px solid black', color: 'black', marginTop: '3rem' }}>submit</Button>
                </form>









            </div>
        </>
    );
};

export default BookModal;