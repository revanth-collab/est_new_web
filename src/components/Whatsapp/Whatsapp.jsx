import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

import whatsapp  from "../../assets/images/whatsapp.jpg"

const Whatsapp = () => {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / height) * 100;
            setScrollPercent(progress);
            setShow(scrolled > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {show && (
                <div
                    className="fixed bottom-[80px] right-6 z-50 cursor-pointer group"
                >
                    <div className="relative w-12 h-12">
                        <a href="https://wa.me/message/AUXMVPTXROAHC1" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="whatsapp" className="w-[50px] h-[50px] rounded-full shadow-lg hover:scale-110 transition-transform duration-200" />
                            {/* <BsWhatsapp className="w-12 h-12 text-white bg-green-500 rounded-full p-2 shadow-lg" /> */}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Whatsapp;
