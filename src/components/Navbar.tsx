"use client";
import React from "react";
import { useScrollContext } from "@/components/utilities/ScrollProvider";
import { motion } from "framer-motion";

function Navbar() {
    const { scrollYValue } = useScrollContext();

    return (
        <motion.nav
            className="z-50 flex py-10 px-10 fixed top-0"
            initial={{ backgroundColor: "transparent" }}
            animate={{
                backgroundColor: scrollYValue > 0 ? "#940000" : "transparent",
                clipPath:
                    scrollYValue > 0
                        ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
                        : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                padding:
                    scrollYValue > 0
                        ? "10px 200px 10px 40px"
                        : "40px 40px 40px 40px",
                
            }}
            transition={{ duration: 1 }}
        >
            <ul className="flex gap-4 text-2xl">
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        Contact me
                    </button>
                </li>
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        Experience
                    </button>
                </li>
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        Education
                    </button>
                </li>
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        Tools
                    </button>
                </li>
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        Projects
                    </button>
                </li>
                <li>
                    <button className={`cursor-pointer ${scrollYValue <= 0 ? "hover:text-[#940000]": "hover:text-black"} transition-all duration-150 active:text-[#ff0000]`}>
                        About me
                    </button>
                </li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;
