import React from 'react';
import { motion } from 'framer-motion'; 
import './DashboardInsightsSidebar.css';
import { useNavigate, useLocation } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { FaAudible } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { FaCubes } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { PiVaultBold } from "react-icons/pi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaUsersRectangle } from "react-icons/fa6";


const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      delay: 0.7, 
      duration: 0.5, 
      ease: "easeOut",
      staggerChildren: 0.05, 
      delayChildren: 1.3 
    } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.3 } 
  }
};

const DashboardInsightsSidebar = () => {
    const navigate = useNavigate()
    const location = useLocation();
const menuItems = [
    { icon: <RxDashboard/>, label: "Dashboard",  path: "/dashboard-insights" },
    { icon: <FaAudible/>, label: "Getting Started", path: "/dashboard-insights/getting-started" },
    { icon: <FaBuffer/>, label: "Projects", path: "/projects" },
    { icon: <FaBullhorn/>, label: "Marketing", path: "/marketing" },
    { icon: <TbSitemap/>, label: "Roadmap",path: "/roadmap" },
    { icon: <FaCubes/>, label: "Decision Center", path: "/decision-center" },
    { icon: <MdSpeed/>, label: "Performance Insights", path: "/performance" },
    { icon: <PiVaultBold/>, label: "Asset Vault",  path: "/assets" },
    { icon: <FaHeadphonesAlt/>, label: "Support",  path: "/support" },
    { icon: <FaMoneyBillTransfer/>, label: "Billing", path: "/billing" },
    { icon: <FaUsersRectangle/>, label: "Meeting Tab",  path: "/meetings" },
  ];


  return (
    <motion.div 
      className="_DashboardInsightsSidebar__Container"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="_DashboardInsightsSidebar__BackWrapper" onClick={() => navigate("/")}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span className="_DashboardInsightsSidebar__BackText">Go Back</span>
      </div>

      <ul className="_DashboardInsightsSidebar__List">
       {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.li 
              key={index} 
              className={`_DashboardInsightsSidebar__Item ${isActive ? 'active_sidebar_item' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, originX: 0 }}
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer', backgroundColor: isActive ? 'var(--theme-color-secondary)' : 'transparent', color: isActive ? 'var(--background)': "var(--foreground)" }}
            >
              <div className="_DashboardInsightsSidebar__ItemLeft">
                <span className="_DashboardInsightsSidebar__Label">
                  <span style={{fontSize:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>{item.icon}</span>
                  {item.label}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default DashboardInsightsSidebar;