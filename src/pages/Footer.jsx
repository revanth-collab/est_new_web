import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img from "../assets/images/est_logo.png";
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#FCFCFC] text-black w-full">
      <footer className="border-t px-6 sm:px-10 py-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={img} alt="logo" className="w-[180px]" />
            <p className="flex flex-row justify-center items-center text-sm font-semibold text-black">
              Beauty <BsDot className="mt-1" /> Anywhere <BsDot className="mt-1" /> Instantly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
            <div>
              <h4 className="font-bold mb-2">About</h4>
              <ul className="space-y-1">
                <li>Help and Support</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">For Business</h4>
              <ul className="space-y-1">
                <li>For Partners</li>
                <li>Pricing</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li><Link to='/terms-and-condition' className="cursor-pointer">Terms of Service</Link></li>
                <li><Link to="privacy-policy" className="cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="cursor-pointer">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Find us on social</h4>
              <ul className="space-y-1">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2025 Esteticanow. All rights reserved.</p>
          <div className="flex gap-4 text-base">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
