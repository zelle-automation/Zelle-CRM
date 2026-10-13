import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion' 
import DashboardInsightsSidebar from './DashboardInsightsSidebar/DashboardInsightsSidebar'
import DashboardInsightsRight from './DashboardInsightsRight/DashboardInsightsRight'
import './DashboardInsights.css'
import WelcomeBannerDashbaordInsight from '../../Components/DashboardInsightsPages/WelcomeandComingBannersDashbaordInsight/WelcomeBannerDashbaordInsight/WelcomeBannerDashbaordInsight'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 1 
    }
  }
};

function DashboardInsights() {
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('getting-started')) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [location.pathname]);

  return (
    <motion.div 
      className='Main_DashboardInsights'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ position: 'relative' }} 
    >
      <AnimatePresence>
        {showBanner && (
          <WelcomeBannerDashbaordInsight 
            key="banner" 
            onComplete={() => setShowBanner(false)} 
          />
        )}
      </AnimatePresence>

      <div className='Main_DashboardInsights_Left'>
        <DashboardInsightsSidebar/>
      </div>
      <div className='Main_DashboardInsights_Right'>
        <DashboardInsightsRight/>
      </div>
    </motion.div>
  )
}

export default DashboardInsights