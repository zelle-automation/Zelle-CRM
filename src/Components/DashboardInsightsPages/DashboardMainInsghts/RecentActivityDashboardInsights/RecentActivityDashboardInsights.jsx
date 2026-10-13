import React from 'react';
import './RecentActivityDashboardInsights.css';
import { FiChevronDown } from "react-icons/fi";
import { HiArrowsUpDown } from "react-icons/hi2";
import MaleAvatar from '../../../../assets/Avatar_MALE.png';
import FemaleAvatar from '../../../../assets/Avatar_FEMALE.png';
import { FaArrowRight } from "react-icons/fa6";

const activityData = [
    {
        id: 1,
        name: "William Thomas",
        time: "Feb 16, 2026, 11:03 AM",
        message: "We are looking for patient management and appointment scheduling features.",
        avatar: MaleAvatar
    },
    {
        id: 2,
        name: "Sneha Reddy",
        time: "Feb 16, 2026, 11:03 AM",
        message: "Thank you for contacting us regarding your healthcare software requirement.",
        avatar: FemaleAvatar
    },
    {
        id: 3,
        name: "William Thomas",
        time: "Feb 16, 2026, 11:03 AM",
        message: "We also require SMS notification integration. I Attached Requirement Document.",
        avatar: MaleAvatar
    },
    {
        id: 4,
        name: "David Markram",
        time: "Feb 17, 2026, 09:15 AM",
        message: "UI components update pushed to staging. Please review the latest PR.",
        avatar: MaleAvatar
    },
    {
        id: 5,
        name: "Rahul Verma",
        time: "Feb 17, 2026, 10:30 AM",
        message: "Bug fix deployed for the login redirect issue. Verification needed.",
        avatar: MaleAvatar
    },
    {
        id: 6,
        name: "Sneha Reddy",
        time: "Feb 17, 2026, 02:45 PM",
        message: "Requirement document received. Team will start work on the SMS integration.",
        avatar: FemaleAvatar
    }
];

function RecentActivityDashboardInsights() {
    return (
        <div className="Main_RecentActivity_DashboardInsights">
            <div className="Header_RecentActivity_Dashboard">
                <h3 className="Title_RecentActivity_Dashboard">All Recent Activity</h3>
                <button className="SortBtn_RecentActivity_Dashboard">
                    <HiArrowsUpDown /> Oldest First <FiChevronDown />
                </button>
            </div>

            <div className="ActivityList_RecentActivity_Dashboard">
                {activityData.map((item) => (
                    <div key={item.id} className="ActivityItem_RecentActivity_Dashboard">
                        <img src={item.avatar} alt={item.name} className="UserAvatar_RecentActivity_Dashboard" />
                        <div className="Content_RecentActivity_Dashboard">
                            <div className="HeaderInfo_RecentActivity_Dashboard">
                                <strong className="Name_RecentActivity_Dashboard">{item.name}</strong>
                                <span className="Time_RecentActivity_Dashboard">{item.time}</span>
                            </div>
                            <p className="Message_RecentActivity_Dashboard">{item.message}</p>
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

export default RecentActivityDashboardInsights;