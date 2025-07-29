import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen flex justify-content items-center gap-5">
            <div></div>
            <div className='rounded-2xl p-4 bg-white'>
                <h1 className='font-semibold text-[24px]'>Login</h1>
                <p className='login-para font-medium text-[12px]'>Login to access your travelwise  account</p>
                <div className='flex flex-col gap-2 mt-4 w-full min-w-[400px]'>
                    <label htmlFor='username' className='login-para text-xs'>User name</label>
                    <input text="email" id='username' placeholder='Enter the Username' className='p-2 border-1 border-[#D3DDEC]' />
                </div>
            </div>
        </div>
    )
}

export default Login
