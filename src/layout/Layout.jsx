import React from 'react'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import SecondSection from '../pages/SecondSection'
import DownloadSection from '../pages/DownloadSection'
import PartnerUs from '../pages/PartnerUs'
import Feedback from '../pages/Feedback'
import Footer from '../pages/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Home />
            <SecondSection />
            <DownloadSection />
            <PartnerUs />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Layout
