import React from 'react'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import SecondSection from '../pages/SecondSection'
import DownloadSection from '../pages/DownloadSection'
import PartnerUs from '../pages/PartnerUs'
import Feedback from '../pages/Feedback'
import Footer from '../pages/Footer'
import HomePage from '../pages/HomePage'

const Layout = () => {
    return (
        <div>
            <Header />
            <HomePage />
            {/* <Home /> */}
            <SecondSection />
            <DownloadSection />
            <PartnerUs />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Layout
