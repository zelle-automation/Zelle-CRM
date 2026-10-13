import React from 'react'
import './MainContent.css'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from "../../Components/Header/Header"

function MainContent() {
    const location = useLocation();
    const isInsights = location.pathname.startsWith("/dashboard-insights") ;

    return (
        <div className='MainContent_MainConatiner'>
            <div className='MainContent_MainContentheight_MainConatiner'>
<AnimatePresence mode="wait">
    <motion.div
        layout
        className="MainContent_MainConatiner_Header"
        style={isInsights ? { position: 'absolute', zIndex: 10, width: '91%', pointerEvents: 'none' } : {}}
        
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1, height: 200 }}
        animate={{ 
            clipPath: isInsights ? "inset(0 100% 0 0)" : "inset(0 0 0 0)",
            opacity: isInsights ? 0 : 1,
            height: 200 
        }}
        exit={{ clipPath: "inset(0 100% 0 0)", opacity: 0, height: 200 }}
        transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
        }}
    >
        <Header />
    </motion.div>
</AnimatePresence>

                <div className={`MainContent_MainConatiner_Middle ${isInsights ? 'no-margin-class' : ''}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainContent