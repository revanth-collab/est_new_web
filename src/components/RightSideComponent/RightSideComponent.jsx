import React from 'react'
import { useNavigate } from 'react-router-dom'
import BasicDetails from './BasicDetails'
import Documents from './Documents'
import Location from './Location'
import BankDetails from './BankDetails'
import StaffDetails from './StaffDetails'
import Service from './Service'

const RightSideComponent = ({ value }) => {
    const navigate = useNavigate()
    // const value = localStorage.getItem('activeField');
    return (
        <div className='w-full p-5 h-full shadow-md rounded-2xl bg-white'>
            {value == 1 && (
                < BasicDetails />
            )}

            {value == 3 && (
                <Documents />
            )}
            {value == 4 && (
                <Location />
            )}
            {value == 5 && (
                <BankDetails />
            )}
            {value == 6 && (
                <StaffDetails />
            )}
            {value == 7 && (
                <Service />
            )}

        </div>
    )
}

export default RightSideComponent

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RightSideComponent = ({ value }) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         switch (value) {
//             case 1:
//                 navigate('/basic-details');
//                 break;
//             case 3:
//                 navigate('/documents');
//                 break;
//             case 4:
//                 navigate('/location');
//                 break;
//             case 5:
//                 navigate('/bank-details');
//                 break;
//             case 6:
//                 navigate('/staff-details');
//                 break;
//             case 7:
//                 navigate('/service');
//                 break;
//             default:
//                 break;
//         }
//     }, [value, navigate]);

//     return null; // or a loading spinner while navigating
// };

// export default RightSideComponent;

