import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {show && (
                <div
                    onClick={handleClick}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer group"
                >
                    <div className="relative w-12 h-12">
                        {/* Circular Progress */}
                        <svg className="absolute inset-0" viewBox="0 0 36 36">
                            <path
                                className="text-gray-300"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="text-primary transition-all duration-200"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray={`${scrollPercent}, 100`}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>

                        {/* Arrow Icon */}
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-200 transition">
                            <ArrowUp className="text-[#6C5DD3] w-6 h-6" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
