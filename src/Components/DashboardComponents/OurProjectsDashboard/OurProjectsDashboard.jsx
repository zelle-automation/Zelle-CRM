import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CgArrowBottomRight } from "react-icons/cg";
import { FilterContext } from '../../../context/FilterContext';
import Avatar_OLDLADY from '../../../assets/Avatar_OLDLADY.png'
import Avatar_OLDMAN from '../../../assets/Avatar_OLDMAN.png'
import Avatar_FEMALE from '../../../assets/Avatar_FEMALE.png'
import Avatar_MALE from '../../../assets/Avatar_MALE.png'
import CalendarPopup from '../../CalendarComponent/CalendarComponent';
import { style } from 'framer-motion/client';

const guestAvatars = [Avatar_OLDLADY, Avatar_OLDMAN, Avatar_FEMALE, Avatar_MALE];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const generateData = () => {
    const statuses = ['Initiated', 'In Development', 'QA Testing', 'Deployed', 'Maintenance'];

    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            id: `#PROJ-${1023 + i}`,
            name: i % 2 === 0 ? "Zelle Solutions" : "Crescent Care",
            tech: i % 2 === 0 ? "Next.js / Framer" : "API Integration",
            status: statuses[i % 5]
        });
    }
    return data;
};

function OurProjectsDashboard({ textClass = "text-base", isDashboard = false }) {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const allReservations = generateData();
    const { activeFilter } = useContext(FilterContext);

    const reservations = activeFilter === 'All'
        ? allReservations
        : allReservations.filter(item => item.status === activeFilter);

    return (
        <div className={`ReservationTable_Main_Container ${textClass} ${isDashboard ? 'Dashboard_Mode' : ''}`}>
            <CalendarPopup
                isOpen={isCalendarOpen}
                onClose={() => {
                    setIsCalendarOpen(false)
                }}
            />

            <motion.div
                className='ReservationTable_Header_Section'
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className='ReservationTable_Title_Group'>
                    <h2>Our Projects</h2>
                    <p>Showcasing our development expertise</p>
                </div>
                <div className='ReservationTable_Date_Navigator'
                    onClick={() => {
                        setIsCalendarOpen(true)
                    }}>
                    <span className='ARROWICON_ReservationTable'><ChevronLeft /></span> April 2026 <span className='ARROWICON_ReservationTable'><ChevronRight /></span>
                </div>
            </motion.div>

            <div className='ReservationTable_ReserveComp' style={{ overflow: 'hidden' }}>
                <table className={`ReservationTable_Data_Table ${textClass}`}>

                    <thead className={`ReservationTable_Table_Head ${textClass}`}>
                        <tr className='ReservationTable_Table_Header_TOP'>
                            {/* <th className={`ReservationTable_Table_Header ${textClass}`} >Project ID</th> */}
                            <th className='ReservationTable_Table_Header'>Client Name</th>
                            <th className='ReservationTable_Table_Header'>Tech Stack</th>
                            <th className='ReservationTable_Table_Header'>Status</th>
                            <th className='ReservationTable_Table_Header'></th>
                        </tr>
                    </thead>
                    <motion.tbody
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {reservations.map((item, index) => (
                            <motion.tr
                                key={index}
                                className='ReservationTable_Table_Row'
                                variants={rowVariants}
                            >
                                {/* <td className={`ReservationTable_Table_Cell ${textClass}`} >{item.id}</td> */}
                                <td className={`ReservationTable_Table_Cell ${textClass}`}>
                                    <div className="ReservationTable_Avatar_Wrapper">
                                        <img
                                            src={guestAvatars[index % guestAvatars.length]}
                                            className='ReservationTable_Avatar'
                                            alt="Client Logo"
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className={`ReservationTable_Table_Cell ${textClass}`}>{item.tech}</td>
                                <td className={`ReservationTable_Table_Cell ${textClass}`} >
                                    <span className={`ReservationTable_Status_Pill Status_${item.status.replace(' ', '')}`} >
                                        {item.status}
                                    </span>
                                </td>
                                <td className='ReservationTable_Table_Cell'>
                                    <div className='ReservationTable_Table_Cell_BORDER'>
                                        <button className='ReservationTable_Action_Btn'><CgArrowBottomRight /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </table>
            </div>
        </div>
    );
}

export default OurProjectsDashboard;