'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ className = "h-8" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <motion.div
                initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex items-center justify-center"
            >
                <svg
                    viewBox="0 0 100 100"
                    className="w-10 h-10 filter drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Main Shape */}
                    <path
                        d="M50 5L95 80H5L50 5Z"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinejoin="round"
                        className="text-blue-600 dark:text-blue-500"
                    />
                    {/* Inner Accent */}
                    <circle
                        cx="50"
                        cy="55"
                        r="15"
                        fill="currentColor"
                        className="text-blue-600/20 dark:text-white"
                    />
                    <path
                        d="M35 55L50 40L65 55L50 70L35 55Z"
                        fill="currentColor"
                        className="text-blue-600 dark:text-blue-400"
                    />
                </svg>
            </motion.div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
                One<span className="text-blue-600">Four</span>
            </span>
        </div>
    );
}
