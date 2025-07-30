import React from 'react'
import BasicDetails from './BasicDetails'
import Documents from './Documents'
import Location from './Location'
import BankDetails from './BankDetails'
import StaffDetails from './StaffDetails'
import Service from './Service'

const RightSideComponent = ({ value }) => {
    return (
        <div className='w-full p-5 h-full shadow-md rounded-2xl bg-white'>
            {value == 1 && (
                <BasicDetails />
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
