import React from 'react';
import { CiFolderOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { HiArrowsUpDown } from "react-icons/hi2";
import { VscInbox } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import './PurchasedApplications.css'; 
import DreamsTourImg from '../../../../assets/app_dreamstour.png';
import DreamSportsImg from '../../../../assets/app_dreamstour.png';
import DreamsTourImg2 from '../../../../assets/app_dreamstour.png';
import DreamGigsImg from '../../../../assets/app_dreamstour.png';
import CrescentCareImg from '../../../../assets/app_dreamstour.png'; // Example import
import PropertyPortalImg from '../../../../assets/app_dreamstour.png'; // Example import
import FinanceAdminImg from '../../../../assets/app_dreamstour.png'; // Example import

const purchaseData = [
  {
    image: DreamsTourImg,
    date: "Feb 16, 2026",
    price: "$50",
    status: "Completed",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />,
    title: "DreamsTour - Tour & Travels Booking",
    support: {
      type: "Item Support",
      duration: "5 Months Remaining"
    },
    action: "Install Theme",
    actionType: "InstallThemeBtn"
  },
  {
    image: DreamSportsImg,
    date: "Feb 16, 2026",
    price: "$50",
    status: "Completed",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />,
    title: "Dream Sports - Sports Venue and Turf Booking",
    action: "Installed",
    actionType: "InstalledBtn"
  },
  {
    image: DreamsTourImg2,
    date: "Feb 16, 2026",
    price: "$49",
    status: "Pending",
    statusClass: "StatusBadge_Inprogress",
    statusIcon: <GoClock />,
    title: "DreamsTour - Tour & Travels Booking",
    action: "Install Theme",
    actionType: "InstallThemeBtn"
  },
  {
    image: DreamGigsImg,
    date: "Feb 16, 2026",
    price: "$36",
    status: "Completed",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />,
    title: "Dream Gigs - Freelance and Gig Service Market",
    action: "Install Theme",
    actionType: "InstallThemeBtn"
  },
  {
    image: CrescentCareImg,
    date: "Feb 17, 2026",
    price: "$85",
    status: "Completed",
    statusClass: "StatusBadge_Resolved",
    statusIcon: <CiFolderOn />,
    title: "Crescent Care - TPA Management Portal",
    support: {
      type: "Item Support",
      duration: "12 Months Remaining"
    },
    action: "Installed",
    actionType: "InstalledBtn"
  },
  {
    image: PropertyPortalImg,
    date: "Feb 18, 2026",
    price: "$60",
    status: "Pending",
    statusClass: "StatusBadge_Inprogress",
    statusIcon: <GoClock />,
    title: "Elite Estates - Real Estate Listing System",
    action: "Install Theme",
    actionType: "InstallThemeBtn"
  },
  {
    image: FinanceAdminImg,
    date: "Feb 19, 2026",
    price: "$75",
    status: "Open",
    statusClass: "StatusBadge_Open",
    statusIcon: <GoClock />,
    title: "FinTrack - Accounting & Invoice Admin",
    action: "Install Theme",
    actionType: "InstallThemeBtn"
  }
];

function PurchasedApplications() {
  return (
    <div className="Main_PurchasedApplications_DashboardInsightsRight">
      <div className="Header_PurchasedApplications_DashboardInsightsRight">
        <h3>Purchased Applications</h3>
        <button className="SortBtn_PurchasedApplications">
          <HiArrowsUpDown /> Oldest First <FiExternalLink />
        </button>
      </div>

      <div className="AppList_PurchasedApplications_DashboardInsightsRight">
        {purchaseData.map((app, index) => (
          <div key={index} className="AppItemRow_PurchasedApplications">
            <div className="AppItemLeft_PurchasedApplications">
              <img src={app.image} alt={app.title} className="AppLogo_PurchasedApplications" />
              <div className="AppInfo_PurchasedApplications">
                <div className="AppMeta_PurchasedApplications">
                  <span>{app.date}</span> - 
                  <span>{app.price}</span> - 
                  <span className={app.statusClass} style={{display:'inline-flex', alignItems:'center', gap:'4px', marginLeft:'5px'}}>
                    <span style={{fontSize:'12px', display:'flex', alignItems:'center'}}>{app.statusIcon}</span> {app.status}
                  </span>
                </div>
                <strong>{app.title}</strong>
                {app.support && (
                  <div className="AppSupportInfo_PurchasedApplications">
                    <span className="ItemSupportLabel">{app.support.type}</span> - {app.support.duration}
                  </div>
                )}
              </div>
            </div>
            
            <div className="AppItemRight_PurchasedApplications">
              <button className={`${app.actionType}_DashboardInsightsRight`}>
                {app.action} <VscInbox style={{marginLeft:'5px', fontSize:'15px'}} />
              </button>
              <a href="#" className="SupportLink_DashboardInsightsRight">Support</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="Footer_RecentActivity_Dashboard">
                      <a href="#" className="ViewAll_RecentActivity_Dashboard">
                          <span className="ViewAllText_RecentActivity">View All</span>
                          <span className='Viewmore_DashbaordInsights'><FaArrowRight /></span>
                      </a>
                  </div>
    </div>
  );
}

export default PurchasedApplications;