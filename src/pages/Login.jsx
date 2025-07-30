import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

const Login = () => {
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [errmsg, setErrMsg] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(number);
        console.log(password);
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-content items-center gap-5 m-3">
            <div className="w-full md:w-3/5"></div>
            <form className='w-full md:w-2/5 max-w-[400px] rounded-2xl p-10 shadow-md bg-white' onSubmit={handleSubmit}>
                <h1 className='font-semibold text-[24px]'>Login</h1>
                <p className='login-para font-medium text-[12px]'>Login to access your travelwise  account</p>
                <div className='flex flex-col gap-2 mt-4 w-full'>
                    <label htmlFor='username' className='text-[#64748B] text-xs font-medium'>Mobile Number</label>
                    <input
                        type="number"
                        id="number"
                        value={number}
                        placeholder="Enter the Number"
                        className="p-2 border-[2px] border-[#D3DDEC] rounded-md outline-none"
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2 mt-4 w-full'>
                    <label htmlFor='password' className='text-[#64748B] text-xs font-medium'>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Enter the Password"
                        className="p-2 border-[2px] border-[#D3DDEC] rounded-md outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="w-full mt-5 flex flex-col justify-center items-center">
                    <button className="w-[55%] btn text-white font-semibold px-auto py-3 rounded-xl mb-3" type="submit">Login</button>
                    {/* <p className="text-[14px]">Don't have an account? <span className="primary-color font-bold cursor-pointer hover:underline">Sign Up</span></p> */}
                    <p className="text-[14px]">
                        Don't have an account?{" "}
                        <Link
                            to="/registerstore"
                            className="primary-color font-bold cursor-pointer hover:underline underline-offset-2"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
