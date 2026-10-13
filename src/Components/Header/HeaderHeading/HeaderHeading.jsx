import { Calendar, Plus } from 'lucide-react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './HeaderHeading.css'

function HeaderHeading() {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      className='HeaderHeading_Main_Container'
      animate={{ minHeight: location.pathname === '/reservations' ? 0 : 280 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className='HeaderHeading_Main_Content_Container'>

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {location.pathname === '/dashboard' && (
              <>
                <div className='HEADR_HEADING_GODEVENING'>
                  <h2>Good Evening, Alex!</h2>
                  <p>Hey Alex, This is your dashboard you can manage <br /> all the business from here</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '45px', color: 'var(--foreground-2)' }}>
                  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                    <Calendar />January 9, 2024
                  </span>
                  <button className='button_Header_Heading_Primary'><Plus /> Decision Career</button>
                </div>

              </>
            )}

            {location.pathname === '/projects' && (
              <>
                <h2>All Projects</h2>
                <button className='button_Header_Heading_Primary'><Plus /> New Reservation</button>
              </>
            )}
            {location.pathname === '/dashboard-insights' && (
              <>
                <h2>Your Data Analysis</h2>
                <button className='button_Header_Heading_Primary'><Plus /> New Reservation</button>
              </>
            )}
            {location.pathname === '/support' && (
              <>
                <div className='HEADR_HEADING_GODEVENING'>
                  <h2>Support </h2>
                  <p> We are here to assist your every problem which <br />  you in the business</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '45px', color: 'var(--foreground-2)' }}>
                  <button className='button_Header_Heading_Primary'><Plus /> Decision Career</button>
                </div>
              </>
            )}

            {(location.pathname !== '/dashboard' &&
              location.pathname !== '/projects' &&
              location.pathname !== '/dashboard-insights' &&
              location.pathname !== '/support') && (
                <h2>Default Header</h2>
              )}
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.div >
  )
}

export default HeaderHeading