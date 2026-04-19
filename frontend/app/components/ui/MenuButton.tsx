"use client"

import { useState, useEffect } from "react";
import { motion } from "motion/react";


type MenuButtonProps = {
    isOpen?: boolean;
    onToggle?: (next: boolean) => void;
    className?: string;
}

export function MenuButton({isOpen, onToggle, className}: MenuButtonProps){

    const [internalOpen, setInternalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const open = isOpen ?? internalOpen;


    function handleToggle() {
        if (isAnimating) return;
        setIsAnimating(true);
        const next = !open;

        if (onToggle) {
            onToggle(next);
        }else{
            setInternalOpen(next);
        }
    }


    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
            setIsAnimating(false);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);


    return (
        <button 
            type = "button"
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded = {open}
            onClick={handleToggle}
            disabled={isAnimating}
            className={`btn-interactive relative inline-flex h-12 w-12 items-center justify-center rounded-md ${className}`}
        >
            <span className = "sr-only">{open ? "Close Menu" : "Open Menu"}</span>

            <div className = "relative h-10 w-10">
                <svg
                    viewBox="0 0 32 32"
                    className = "absolute inset-0 h-full w-full"
                    aria-hidden = "true"
                >
                    <motion.circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2px"
                        strokeLinecap="round"
                        initial={false}
                        animate={
                            open
                                ? {
                                    opacity: 1,
                                    pathLength: 1,
                                    pathOffset: 0,
                                }
                                : {
                                    opacity: 0,
                                    pathLength: 0,
                                    pathOffset: .5,
                                }
                        }
                        transition={{
                            duration: 0.5,
                            delay: open ? 0.2 : 0,
                            ease: "easeInOut",
                            opacity: {
                                duration: 0.20,
                                delay: open ? 0.2 : .4,
                                ease: "easeOut",
                            },
                        }}
                    />
                </svg>
                
                <motion.span
                    className="absolute left-1/2 top-1/2 block h-[3px] w-6 -translate-x-1/2 rounded-full bg-current"
                    style={{ transformOrigin: "50% 50%" }}
                    initial={false}
                    animate={{
                        y: open ? -1 : -6,
                        rotate: open ? 45 : 0,
                    }}
                    transition={{
                        duration: 0.28,
                        delay: open ? 0.25 : .25,
                        ease: "easeInOut",
                    }}
                />

                <motion.span
                    className="absolute left-1/2 top-1/2 block h-[3px] w-6 -translate-x-1/2 rounded-full bg-current"
                    style={{ transformOrigin: "0% 50%" }}
                    initial={false}
                    animate={{
                        x: open ? -5 : 0,
                        scaleX: open ? 0 : 1,
                    }}
                    transition={{
                        scaleX: {
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: open ? .1 : .25,
                        },
                        x: {
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: open ? .14 : 0.4,
                        },
                    }}
                />

                <motion.span
                    className="absolute left-1/2 top-1/2 block h-[3px] w-6 -translate-x-1/2 rounded-full bg-current"
                    style={{ transformOrigin: "50% 50%" }}
                    initial={false}
                    animate={{
                        y: open ? -1 : 6,
                        rotate: open ? -45 : 0,
                    }}
                    transition={{
                        duration: 0.28,
                        delay: open ? 0.25 : .25,
                        ease: "easeInOut",
                    }}
                />

            </div>
        </button>
    )
}