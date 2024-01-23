import React from "react";
import { motion } from "framer-motion";

export default function NoiseTexture() {
    return (
        <motion.div
            initial={{ transform: "translateX(-5%) translateY(-5%)" }}
            animate={{
                transform: "translateX(10%) translateY(10%)",
            }}
            transition={{
                repeat: Infinity,
                duration: 0.05,
                ease: "linear",
                repeatType: "mirror",
            }}
            style={{
                backgroundImage: 'url("/assets/img/black-noise.png")',
                backdropFilter: "blur(10px)",
            }}
            className="hidden md:flex pointer-events-none fixed z-0 -inset-[100%] opacity-[5%]"
        />
    );
}