import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './WelcomeBannerDashbaordInsight.css';

const WelcomeBannerDashbaordInsight = ({ onComplete }) => {
    const sentence = "Welcome to Zelle One";
    const totalDuration = 3; 
    const characterCount = sentence.length;
    const staggerTime = totalDuration / characterCount;

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, totalDuration * 1000 + 500); 
        return () => clearTimeout(timer);
    }, [onComplete, totalDuration]);

    const letterVariants = {
        hidden: {
            backgroundPosition: "100% 0%",
            color: "rgba(255, 255, 255, 0)"
        },
        visible: {
            backgroundPosition: "0% 0%",
            color: "var(--theme-color-secondary)",
            transition: {
                duration: staggerTime * 0.8,
                ease: "linear"
            }
        }
    };

    const bgVariants = {
        visible: { opacity: 1 },
        exit: { 
            opacity: 0, 
            transition: { duration: 0.5, ease: "easeInOut" } 
        }
    };

    return (
        <motion.div
            className='WelcomeBannerDashbaordInsight'
            variants={bgVariants}
            initial="visible"
            animate="visible"
            style={{ pointerEvents: 'all' }}
            exit="exit"
        >
            <motion.div 
                className="bg-gradient-overlay"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                
                transition={{ 
                    delay: totalDuration, 
                    duration: 0.5, 
                    ease: "easeIn" 
                }}
            />

            <motion.h1
                className='_WelcomeBanner__Text'
                initial="hidden"
                animate="visible"
                transition={{
                    staggerChildren: staggerTime,
                    delayChildren: 0.05
                }}
            >
                {sentence.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        style={{
                            display: 'inline-block',
                            whiteSpace: 'pre',
                            backgroundImage: "linear-gradient(90deg, var(--theme-color-secondary) 50%, transparent 50%)",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
        </motion.div>
    );
}

export default WelcomeBannerDashbaordInsight;