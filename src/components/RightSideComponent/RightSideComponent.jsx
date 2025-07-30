import React from 'react'
import BasicDetails from './BasicDetails'

const RightSideComponent = ({ value }) => {
    return (
        <div className='w-full p-5 h-full rounded-2xl bg-white'>
            {value == 1 && (
                <BasicDetails />
            )}
        </div>
    )
}

export default RightSideComponent
