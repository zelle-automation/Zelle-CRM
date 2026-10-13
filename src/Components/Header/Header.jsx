import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar/Navbar'
import HeaderHeading from './HeaderHeading/HeaderHeading'
import Headerfilters from './HeaderFilters/Headerfilters'
import './Header.css'

function Header() {
  const location = useLocation();

  return (
    <div className='HEADER_MAIN_CONTAINER'>
      <div className="Header_Content_Main">
        <Navbar />
      </div>

      <div className="Header_Content_Main">
        <HeaderHeading />
      </div>

      <AnimatePresence mode="wait">
        {location.pathname !== '/dashboard' && location.pathname !== '/support' && location.pathname !== '/dashboard-insights' &&(
          <motion.div
            className="Header_Content_Main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Headerfilters />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header