import React from 'react'
import Header from '../components/Header/Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
        <Header />
        <section className="py-8 px-6 sm:px-10 contact-us">
            
            <div className="max-w-screen-xl mx-auto mb-12 text-center sm:text-left">
                <p className="text-[12px] text-gray-500 font-semibold mb-2">Get Started</p>
                <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
                Get in touch with us. <br />
                We're here to assist you.
                </h2>
            </div>

            <form className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <input type="text" placeholder="Your Name" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="text" placeholder="Your Role" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="tel" placeholder="Phone Number" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="email" placeholder="Email Address" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="text" placeholder="Service type" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="text" placeholder="Location" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="text" placeholder="Type of Outlet" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="number" placeholder="No of Outlets" className="form-input placeholder-[#303030] font-semibold" />
                    <input type="text" placeholder="Do you want onboard your store?" className="form-input placeholder-[#303030] font-semibold" />
                </div>

                <div className="mt-6">
                <textarea
                    rows={4}
                    placeholder="What do you want"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-[#6C5DD3] text-sm px-2 py-3 bg-transparent resize-none placeholder-[#303030] font-semibold"
                ></textarea>
                </div>

                <div className="mt-10">
                <button
                    type="submit"
                    className="bg-[#6C5DD3] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition"
                >
                    Leave us a Message →
                </button>
                </div>
            </form>
            </section>
        <Footer />
    </>
  )
}

export default Contact
