import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './DashboardMainInsghts.css'
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
import PurchasedApplications from './PurchasedApplications/PurchasedApplications';
import RecentActivityDashboardInsights from './RecentActivityDashboardInsights/RecentActivityDashboardInsights';

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

const rightVariants = {
  hidden: { y: 220, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

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

function DashboardMainInsghts() {
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

  return (
    <motion.div
      className='Main_DashboardInsightsRight'
      initial="hidden"
      animate="visible"
      variants={rightVariants}
    >
      <div className='TopSection_DashboardInsightsRight'>
        <div className="LeftBanner_DashboardInsightsRight">
          <div className="Greeting_DashboardInsightsRight">
            <h4>Welcome Back!</h4>
            <h2>Good Morning! David Markram </h2>
          </div>

          <div className="MetricsContainer_DashboardInsightsRight">
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
          </div>
        </div>

        <div className="RightSection_DashboardInsightsRight">
          <h3 className="QuickActionTitle_DashboardInsightsRight">Quick Action</h3>
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
            <div className='DashboardInsightsRight_Middle'>
        <div className="TableHeader_DashboardInsightsRight">
          <h3 className="TableTitle_DashboardInsightsRight">201 Support Tickets</h3>
          <div className="Controls_DashboardInsightsRight">
            <div className="Filters_DashboardInsightsRight" ref={filterNavRef} onMouseLeave={resetIndicator}>
              <div className="Filter_Indicator_Dashboard" ref={filterIndicatorRef}></div>
              {["All Tickets", "Open", "Inprogress", "Resolved"].map((item) => (
                <button 
                  key={item}
                  className={`FilterBtn_DashboardInsightsRight ${activeFilter === item ? 'active' : ''}`}
                  onClick={() => setActiveFilter(item)}
                  onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="SearchSection_Dashboard">
              <div className="SearchInputGroup_Dashboard">
                <input type="text" placeholder="Search Something..." />
                <FiSearch className="SearchIcon_Dashboard" />
              </div>
              <button className="RefreshBtn_Dashboard">
                <FaRedo />
              </button>
            </div>
          </div>
        </div>

        <table className="Table_DashboardInsightsRight">
          <thead>
            <tr>
              <th>TICKET ID</th>
              <th>SUBJECT & DESCRIPTION</th>
              <th>TYPE / PRIORITY</th>
              <th>ASSIGNED</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, index) => (
              <motion.tr 
                key={index}
                variants={itemVariants}
                className='table_TR_zelle_dashboardInsights'
              >
                <td><strong>{t.id}</strong></td>
                <td>
                  <div className="Cell_Subject_DashboardInsightsRight">
                    <div className="Avatar_Dashboard" style={t.avatarStyle}>{t.avatar}</div>
                    <div className="TextStack_Dashboard">
                      <strong>{t.subject}</strong>
                      <small>{t.desc}</small>
                    </div>
                  </div>
                </td>
                <td >
                   <span style={{display:'flex', alignItems:'center', gap:'5px', fontWeight:'600', color:'#868686'}}>
                    <span className='type_icons_Dashboard_insight'>{t.typeIcon}</span>
                     {t.type} / <span className={t.priorityClass}>{t.priority}</span></span></td>
                <td>
                  <div className="AssignedCell_Dashboard">
                    {t.assignedAvatar ? (
                      <img src={t.assignedAvatar} alt="User" className="UserAvatar_Dashboard" style={{ width: '28px', height: '28px', borderRadius: '50%' }} />
                    ) : (
                      <div className="UserAvatar_Dashboard" style={{ background: '#e5e7eb' }} />
                    )}
                    <div className="TextStack_Dashboard">
                      <strong style={{color:'#868686'}}>{t.assignedName}</strong>
                      <small>{t.assignedDate}</small>
                    </div>
                  </div>
                </td>
                <td><span className={t.statusClass} style={{display:'flex', alignItems:'center', gap:'10px', width:'fit-content'}}  ><span className='type_icons_Dashboard_insights'>{t.statusIcon}</span> {t.status}</span></td>
              
                <td><FaEye className='Eye_TD_ROW_ZELLEinsights' /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>

      <div className="DashboardInsightsRight_Last">
        <PurchasedApplications />
        <RecentActivityDashboardInsights />
      </div>
    </motion.div>
  )
}

export default DashboardMainInsghts