import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardMainInsghts from '../../../Components/DashboardInsightsPages/DashboardMainInsghts/DashboardMainInsghts';
import GettingStarted from '../../../Components/DashboardInsightsPages/GettingStartedDashboardInsights/GettingStarted';

function DashboardInsightsRight() {
  const location = useLocation();

  return (
    <div className='DashboardInsightsRight_All_Routes'>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<DashboardMainInsghts />} />
          <Route path="getting-started" element={<GettingStarted />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default DashboardInsightsRight;