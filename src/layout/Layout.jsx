// import React from 'react'
// import Header from '../components/Header/Header'
// import Home from '../pages/Home'
// import SecondSection from '../pages/SecondSection'
// import DownloadSection from '../pages/DownloadSection'
// import PartnerUs from '../pages/PartnerUs'
// import Feedback from '../pages/Feedback'
// import Footer from '../pages/Footer'
// import HomePage from '../pages/HomePage'

// const Layout = () => {
//     return (
//         <div>
//             <Header />
//             <HomePage />
//             {/* <Home /> */}
//             <SecondSection />
//             <DownloadSection />
//             <PartnerUs />
//             <Feedback />
//             <Footer />
//         </div>
//     )
// }

// export default Layout


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../pages/Footer.jsx";
import Header from '../components/Header/Header';

const Layout = () => {
    const location = useLocation();

    const hideHeaderRoutes = ['/as']; // adjust routes as needed
    const shouldHideHeader = hideHeaderRoutes.some(route =>
        location.pathname.startsWith(route)
    );

    // const backgroundStyle = {
    //     background: `
    //         linear-gradient(
    //             to bottom,
    //             rgba(108, 93, 211, 0.3) 0%,
    //             rgba(255, 255, 255, 0.2) 65%,
    //             rgba(255, 255, 255, 1) 100%
    //         ),
    //         url(${BgImage}),
    //         white
    //     `,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100% auto',
    //     backgroundPosition: 'center top',
    //     minHeight: '100vh',
    // };


    return (
        <div className="flex flex-col min-h-screen w-full md:px-4 mx-auto max-w-screen-xl">
            {!shouldHideHeader && <Header />}

            <main className="flex-grow w-[100%] md:w-[90%] md:mx-auto px-0 md:px-4 pt-2">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
