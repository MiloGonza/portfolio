"use client";

import { useScrollContext } from "@/components/utilities/ScrollProvider";
import { useEffect, useState } from "react";
import ClippedDiv from "@/components/ClippedDiv";
import { motion } from "framer-motion";
import Covers from "@/components/utilities/Covers";

export default function Home() {
    const { scrollYValue, setScrollYValue } = useScrollContext();

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const mainElement = event.target as HTMLDivElement;
        const scrollY = mainElement.scrollTop;
        setScrollYValue(scrollY);
    };

    useEffect(() => {
        console.log(scrollYValue);
    });

    const [textIn, setTextIn] = useState(false);

    return (
        <main
            onScroll={handleScroll}
            className="flex flex-col min-h-screen h-full w-full  overflow-y-auto overflow-x-hidden z-40"
        >
            <div className="flex w-full h-screen relative">
                <section className="pt-[100px] w-[40vw] flex-1/2 relative pl-40 flex flex-col justify-center">
                    <div className="relative">
                        <motion.div
                            className="z-10 bg-[var(--focusText1)] absolute  h-full w-[33vw]"
                            style={{ originX: 1 }}
                            initial={{
                                scaleX: 1,
                                backgroundColor: "var(--focusText1)",
                            }}
                            whileInView={{
                                scaleX: 0,
                                backgroundColor: "var(--secondary1)",
                            }}
                        />
                        <div>
                            <h1 className="text-[4rem] font-bold items-center flex text-center">
                                Software developer
                            </h1>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.div
                            className="z-10 bg-[var(--focusText1)] absolute  h-full w-[30vw]"
                            style={{ originX: 1 }}
                            initial={{
                                scaleX: 1,
                                backgroundColor: "var(--focusText1)",
                            }}
                            whileInView={{
                                scaleX: 0,
                                backgroundColor: "var(--secondary1)",
                            }}
                        />
                        <h2 className="text-[3rem] text-[var(--focusText1)] font-bold">
                            Juan Camilo Gonzalez
                        </h2>
                    </div>
                    <div className="relative z-50">
                        <motion.div
                            className="z-40 bg-[var(--focusText1)] absolute  h-full w-[31vw]"
                            style={{ originX: 1 }}
                            initial={{
                                scaleX: 1,
                                backgroundColor: "var(--focusText1)",
                            }}
                            whileInView={{
                                scaleX: 0,
                                backgroundColor: "var(--secondary1)",
                            }}
                        />
                        <p className="text-[1.5rem] w-1/2 z-10">
                            A software developer with a passion for the craft in
                            constant training and learning, I’m a{" "}
                            <b className="text-[var(--focusText1)]">
                                frontend-focused{" "}
                            </b>
                            developer who’s passionate about expanding into{" "}
                            <b className="text-[var(--focusText1)]">backend.</b>
                        </p>
                    </div>
                </section>
                <Covers />
                <ClippedDiv />
            </div>
            <div>
                <h3 className="pl-40 text-[3rem]">
                    Experience
                </h3>
                
            </div>
        </main>
    );
}
