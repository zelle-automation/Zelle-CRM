import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import BookingChart from '../../Components/DashboardComponents/BookingChart/BookingChart';
import TopCategoryChart from '../../Components/DashboardComponents/TopCategoryChart/TopCategoryChart'
import OurProjectsDashboard from '../../Components/DashboardComponents/OurProjectsDashboard/OurProjectsDashboard';
import BillingDashboard from '../../Components/DashboardComponents/BillingDashboard/BillingDashboard';
 import OnboardingModal from '../../Components/DashboardComponents/OnboardingModal/OnboardingModal';
import { data } from 'react-router';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const dashboardStats = [
  {
    title: "Active Projects",
    description: "Our Active Projects for Clients",
    stat: "1"
  },
  {
    title: "Performance",
    description: "Our Performance for our client projects",
    stat: "65 %"
  },
  {
    title: "Billing",
    description: "We charged less for our clients",
    stat: "1"
  }
];
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnboardingComplete = (data)=>{
    console.log("Onboarding Form Data Recived" , data)
  }
  return (
    <motion.div
      className="dashboard-wrapper_ZELLECLIENT__DASHBOARD"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="top-section_ZELLECLIENT__DASHBOARD">
        <motion.div className="action-buttons_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
          <button className="action-btn_ZELLECLIENT__DASHBOARD check-in_ZELLECLIENT__DASHBOARD" onClick={()=> setIsModalOpen(true) }><BiLogIn className='iconschecked_ZELLECLIENT_DASHBOARD' />Request Services</button>
          

          {dashboardStats.map((item, index) => (
            <motion.div
              key={index}
              className="stat-card_ZELLECLIENT__DASHBOARD"
              variants={itemVariants}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className='Bottom_cards_zelleclients_Dashboard'>
                <p className='cardstats_CARD_ZELLECLIENT'>{item.stat}</p>
                <p className='stat-card_ZELLECLIENT__DASHBOARD_COLORPINK'>View</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div style={{display:'flex', justifyContent:'center', alignItems:'center',  gap:'20px'}}>
          <motion.div className="left-panel_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
            <OurProjectsDashboard textClass="text-small" isDashboard={true} />
          </motion.div>
          <motion.div className="left-panel_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
            <BillingDashboard textClass="text-small" isDashboard={true} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="main-content_ZELLECLIENT__DASHBOARD" variants={itemVariants}>

        <motion.div className="right-panel_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
          <motion.div className="chart-card_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
            <BookingChart />
          </motion.div>
          <motion.div className="chart-card_ZELLECLIENT__DASHBOARD" variants={itemVariants}>
            <TopCategoryChart />
          </motion.div>
        </motion.div>

      </motion.div>
      <OnboardingModal
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      onComplete={handleOnboardingComplete}
      
      />
    </motion.div>
  );
};

export default Dashboard;