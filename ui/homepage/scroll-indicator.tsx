"use client";

import { useEffect, useState } from "react";
import { space_700weight } from "@/app/fonts/fonts";

export default function ScrollDown() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Fade out when the user scrolls down past 100px
            setIsVisible(window.scrollY < 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed flex justify-center items-center content-center bottom-10 w-full transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                } ${space_700weight.className}`}
        >
            <div className="border-2 p-2 relative rounded-2xl bg-black right-6 border-white animate-bounce">
                <div className="flex flex-col relative top-1 justify-center items-center">
                    <p className="mb-2">Scroll Down</p>
                </div>
            </div>

        </div>
    );
};
