import React from 'react'
import img from "../../assets/images/est_logo.png"
const LogoutHeader = () => {
    const handleLogoutButton = () => {
        console.log("logout");
        localStorage.removeItem('/auth_token');
    }
    return (
        <div className='flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl px-10 2xl:px-7 py-2'>
            <img
                src={img}
                alt="logo"
                className="w-40 sm:w-52 md:w-[200px] h-auto p-1 px-2 rounded-md cursor-pointer"
                onClick={() => navigate('/')}
            />
            <div className="flex flex-wrap gap-2 sm:gap-5">
                <button
                    type="button"
                    className="rounded-[20px] secondary-btn outline-none w-[75px] sm:w-[100px] text-center flex items-center justify-center"
                    onClick={() => handleLogoutButton()}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default LogoutHeader