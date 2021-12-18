import React from 'react';
import { useSelector } from "react-redux"

const RecentBookings = () => {
    const recentBookings = useSelector(state => state.manageBooking.bookingList);
    console.log(recentBookings);
    // const { clientName, email, packagePrice, serviceName } = recentBookings;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.2rem' }}>
            {
                recentBookings.map((booking, i) => (
                    <div key={i} style={{ boxShadow: "5px 2px 2px 2px #888888", width: '50%', padding: '1rem', }}>
                        <p>Name: {booking.clientName}</p>
                        <p>Email: {booking.email}</p>
                        <p>Price: {booking.packagePrice}</p>
                        <p>Package: {booking.serviceName}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default RecentBookings;