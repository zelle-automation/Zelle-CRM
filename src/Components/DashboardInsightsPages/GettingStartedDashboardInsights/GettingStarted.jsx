import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { VscGithub } from "react-icons/vsc";
import { SiAbdownloadmanager } from "react-icons/si";
import { FaBug, FaCog, FaDesktop, FaEye, FaRedo, FaHeadphones } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import MaleAvatar from '../../../assets/Avatar_MALE.png';
import FemaleAvatar from '../../../assets/Avatar_FEMALE.png';
import { CiFolderOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { TbProgressDown } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import QuestionYearGettingStarted from './QuestionYearGettingStarted/QuestionYearGettingStarted';
import CompanyFormGettingStarted from './CompanyFormGettingStarted/CompanyFormGettingStarted';
import AccessCredentialsGettingStarted from './AccessCredentialsGettingStarted/AccessCredentialsGettingStarted';
import './GettingStarted.css'
const tickets = [
  {
    id: "#TI001",
    avatar: "C",
    avatarStyle: { background: '#eef2ff', color: '#4f46e5' },
    subject: "Custom development software",
    desc: "Could you share few examples about the invoice...",
    type: "Customization",
    typeIcon: <FaDesktop />,
    priority: "Medium",
    priorityClass: "PriorityTag_Medium",
    assignedName: "Rahul Verma",
    assignedDate: "Feb 16, 2026, 07:43 AM",
    assignedAvatar: MaleAvatar,
    status: "Resolved",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />
  },
  {
    id: "#TI002",
    avatar: "U",
    avatarStyle: { background: '#f3f4f6', color: '#6b7280' },
    subject: "Unable to Login to Account",
    desc: "I am trying to log in using my registered email...",
    type: "General",
    typeIcon: <FaCog />,
    priority: "Low",
    priorityClass: "PriorityTag_Low",
    assignedName: "Un Assigned",
    assignedDate: "Feb 16, 2026, 07:43 AM",
    assignedAvatar: MaleAvatar,
    status: "Open",
    statusClass: "StatusBadge_Open",
    statusIcon: <GoClock />
  },
  {
    id: "#TI003",
    avatar: "P",
    avatarStyle: { background: '#fee2e2', color: '#ef4444' },
    subject: "Payment Failed but Amount Deducted",
    desc: "Could you share few examples about the invoice...",
    type: "Bug",
    typeIcon: <FaBug />,
    priority: "Low",
    priorityClass: "PriorityTag_Low",
    assignedName: "Sneha Reddy",
    assignedDate: "Feb 16, 2026, 07:43 AM",
    assignedAvatar: FemaleAvatar,
    status: "Inprogress",
    statusClass: "StatusBadge_Inprogress",
    statusIcon: <TbProgressDown />
  },
  {
    id: "#TI004",
    avatar: "D",
    avatarStyle: { background: '#e0f2fe', color: '#0284c7' },
    subject: "Dashboard Not Loading",
    desc: "Could you share few examples about the invoice...",
    type: "Customization",
    typeIcon: <FaDesktop />,
    priority: "High",
    priorityClass: "PriorityTag_High",
    assignedName: "Un Assigned",
    assignedDate: "Feb 16, 2026, 07:43 AM",
    assignedAvatar: null,
    status: "Resolved",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />
  },
  {
    id: "#TI005",
    avatar: "U",
    avatarStyle: { background: '#f3f4f6', color: '#6b7280' },
    subject: "Unable to Update Profile Details",
    desc: "Could you share few examples about the invoice...",
    type: "General",
    typeIcon: <FaCog />,
    priority: "Medium",
    priorityClass: "PriorityTag_Medium",
    assignedName: "Rahul Verma",
    assignedDate: "Feb 16, 2026, 07:43 AM",
    assignedAvatar: MaleAvatar,
    status: "Open",
    statusClass: "StatusBadge_Open",
    statusIcon: <GoClock />
  }
];

// const rightVariants = {
//   hidden: { y: 220, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.3,
//       duration: 1,
//       staggerChildren: 0.1
//     }
//   }
// };

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const quickActionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

function GettingStarted() {
  const [isQuestionFilled, setIsQuestionFilled] = useState(false);
  const [isCompanyFilled, setIsCompanyFilled] = useState(false);
  const [isAccessFilled, setIsAccessFilled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Tickets");
  const filterNavRef = useRef(null);
  const filterIndicatorRef = useRef(null);

  const moveIndicator = (el) => {
    if (!el || !filterIndicatorRef.current) return;
    filterIndicatorRef.current.style.width = `${el.offsetWidth}px`;
    filterIndicatorRef.current.style.left = `${el.offsetLeft}px`;
  };

  const resetIndicator = () => {
    if (!filterNavRef.current) return;
    const activeBtn = filterNavRef.current.querySelector('.FilterBtn_DashboardInsightsRight.active');
    if (activeBtn) {
      moveIndicator(activeBtn);
    }
  };

  useEffect(() => {
    resetIndicator();
  }, [activeFilter]);
  const calculateProgress = () => {
    let progress = 0;
    if (isQuestionFilled) progress += 25;
    if (isCompanyFilled) progress += 25;
    if (isAccessFilled) progress += 50;
    return progress;
  };

  const progressValue = calculateProgress();
  return (
    <motion.div
      className='Main_DashboardInsightsRight'
      initial="hidden"
      animate="visible"
    >
      {/* Progress Bar UI */}

      <div className='TopSection_DashboardInsightsRight'>
        <div className="LeftBanner_DashboardInsightsRight">
          <div className="Greeting_DashboardInsightsRight">
            <h4>Get Started</h4>
            <h2>Lets Grow Your Business </h2>
          </div>
          <div className="ProgressBarContainer_GettingStarted">
  <div className="ProgressHeader_GettingStarted">
    <div className="ProgressLabelGroup_GettingStarted">
      <span className="ProgressTitle_GettingStarted">Profile Completion</span>
      <span className="ProgressSubtitle_GettingStarted">Complete all steps to unlock full features</span>
    </div>
    <div className="ProgressBadge_GettingStarted">
      {progressValue}%
    </div>
  </div>
  <div className="ProgressBase_GettingStarted">
    <motion.div
      className="ProgressFill_GettingStarted"
      initial={{ width: 0 }}
      animate={{ width: `${progressValue}%` }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="ProgressGlow_GettingStarted" />
    </motion.div>
  </div>
</div>
          {/* <div className="MetricsContainer_DashboardInsightsRight">
            <motion.div className="MetricCard_DashboardInsightsRight" variants={itemVariants}>
              <h3>Total Application</h3>
              <div className="MetricValue_DashboardInsightsRight">
                13 <span style={{ fontSize: '12px', color: 'green' }}>+10%</span>
              </div>
              <div className="MetricSub_DashboardInsightsRight">+02 This Month</div>
            </motion.div>

            <motion.div className="MetricCard_DashboardInsightsRight" variants={itemVariants}>
              <h3>All Tickets</h3>
              <div className="MetricValue_DashboardInsightsRight">
                18 <span style={{ fontSize: '12px', color: 'red' }}>-8%</span>
              </div>
              <div className="MetricSub_DashboardInsightsRight">No Urgent</div>
            </motion.div>
          </div> */}
        </div>

        <div className="RightSection_DashboardInsightsRight">
          <h3 className="QuickActionTitle_DashboardInsightsRight">Uploads</h3>
          <motion.div
            className="QuickGrid_DashboardInsightsRight"
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 1.5 } }
            }}
          >
            {[
              { icon: <SiAbdownloadmanager />, label: "Install New App", desc: "Deploy your latest application..." },
              { icon: <GiProgression />, label: "Performance Report", desc: "Generate detailed analytics..." },
              { icon: <FaHeadphones />, label: "Support Ticket", desc: "Get help with technical issues..." },
              { icon: <VscGithub />, label: "Connect GitHub", desc: "Link your repository for access..." }
            ].map((action, index) => (
              <motion.div
                key={index}
                className="ActionItem_DashboardInsightsRight"
                variants={quickActionVariants}
                whileHover={{ scale: 1.05 }}
              >
                {React.cloneElement(action.icon, { className: 'TopBannerRightSideDashboardInsideIcons' })}
                <span>{action.label}</span>
                <p>{action.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div>
        <div className='DashboardGettingStarted_Middle'>
          <QuestionYearGettingStarted onComplete={() => setIsQuestionFilled(true)} />
          <CompanyFormGettingStarted onComplete={() => setIsCompanyFilled(true)} />
        </div>
        <div className='DashboardGettingStarted_Last'>
          <AccessCredentialsGettingStarted onComplete={() => setIsAccessFilled(true)} />
        </div>
      </div>



    </motion.div>
  )
}

export default GettingStarted