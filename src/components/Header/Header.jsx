// import React from 'react'
// import img from "../../assets/images/est_logo.png"

// const Header = () => {
//   return (
//     <div className='flex justify-between items-center p-4 px-7'>
//       <img src={img} alt="logo" className='w-[200px] h-auto p-1 px-2 rounded-md'/>
//       <div className='flex gap-5'>
//         <button className='rounded-[20px] primary-btn'>Download</button>
//         <button className='rounded-[20px] secondary-btn'>Contact</button>
//         <p></p>
//       </div>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/images/est_logo.png";
import { Link } from 'react-router-dom';

const Header = ({color}) => {
  
  const navigate = useNavigate();
  return (
    <div className={`flex flex-wrap items-center justify-between px-4 py-4 sm:px-6 md:px-10 gap-2 z-[1000] ${color !== undefined ? 'bg-[#0D0C17]':""}`}>
      <img
        src={img}
        alt="logo"
        className="w-40 sm:w-52 md:w-[200px] h-auto p-1 px-2 rounded-md cursor-pointer"
        onClick={()=>navigate('/')}
      />
      <div className="flex flex-wrap gap-2 sm:gap-5">
        <Link to="/" className="rounded-[20px] primary-btn outline-none w-[70px] sm:w-[100px] text-center flex items-center justify-center">
          Home
        </Link>
        <Link to="/contact" className="rounded-[20px] secondary-btn outline-none w-[75px] sm:w-[100px] text-center flex items-center justify-center">Partners</Link>
        {/* <button  onClick={()=>navigate('/contact')}>Contact</button> */}
      </div>
    </div>
  );
};

export default Header;
