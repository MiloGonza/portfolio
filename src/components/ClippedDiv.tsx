import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function ClippedDiv() {
    return (
        <section className="w-[65vw] absolute right-0">
            {/* DEFINICIÓN DEL CLIP-PATH */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                    <clipPath
                        id="roundedPoly"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="M 0.3 1 L 1 1 L 1 0 L 0.63 0 L 0.0113 0.8922 Q 0 0.91 0.019 0.9157 L 0.3 1 Z" />
                    </clipPath>
                </defs>
            </svg>
            <motion.div
                className="absolute h-[100vh] w-full bg-black/40"
                style={{
                    clipPath: "url(#roundedPoly)",
                    filter: "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))",
                    transform: "translateY(60px) translateX(60px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="h-[100vh] w-full bg-[var(--secondary1)] relative z-10 flex items-center justify-center text-white text-2xl"
                style={{ clipPath: "url(#roundedPoly)" }}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="h-[100vh] w-full bg-[var(--secondary1)] relative z-10 flex items-center justify-center text-white text-2xl"
                    style={{ clipPath: "url(#roundedPoly)" }}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 60 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image loading="lazy" fill src="/cover.png" alt="" />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ClippedDiv;
