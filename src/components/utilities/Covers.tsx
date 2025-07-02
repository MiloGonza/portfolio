"use client";

import React from "react";
import { motion } from "framer-motion";

const Covers = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -160, y: 1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2 }}
                className="w-50 h-120 bg-[var(--secondary1)] flex z-30 rotate-42 -translate-x-[90rem] translate-y-150"
            />
            <motion.div
                initial={{ opacity: 0, x: 60, y: -160 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-15 h-120 bg-[var(--secondary2)] flex z-50 rotate-42 -translate-x-85 shadow"
            />
            <motion.div
                initial={{ opacity: 0, x: -60, y: 160 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2 }}
                className="w-15 h-120 bg-[var(--secondary2)] flex z-50 rotate-42 -translate-x-[50rem] translate-y-160 shadow"
            />
            <motion.div
                initial={{ opacity: 0, x: -160, y: 1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-15 h-120 bg-[var(--secondary2)] flex z-50 rotate-42 -translate-x-[30rem] translate-y-130"
            />
            <motion.div
                initial={{ opacity: 0, x: -160, y: 1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-15 h-120 bg-[var(--background1)] flex z-50 rotate-42 -translate-x-[35rem] translate-y-150"
            />
            <motion.div
                initial={{ opacity: 0, x: 160, y: -1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-15 h-120 bg-[var(--secondary1)] flex z-50 rotate-42 -translate-x-[2rem] translate-y-10"
            />
            <motion.div
                initial={{ opacity: 0, x: 160, y: -1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-15 h-120 bg-[var(--secondary1)] flex z-50 rotate-42 -translate-x-[5rem] translate-y-50"
            />
        </>
    );
};

export default Covers;
