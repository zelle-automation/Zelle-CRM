import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FilterContext } from '../../../context/FilterContext';
import CalendarPopup from '../../CalendarComponent/CalendarComponent';
import './BillingDashboard.css';

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
    const statuses = ['Complete', 'Pending', 'InProcess'];
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            id: `#PROJ-${1023 + i}`,
            client: i % 2 === 0 ? "Zelle Solutions" : "Crescent Care",
            projectName: i % 2 === 0 ? "Enterprise Dashboard" : "API Integration",
            amount: `$${(Math.random() * 5000 + 1000).toFixed(2)}`,
            status: statuses[i % 3]
        });
    }
    return data;
};

function BillingDashboard({ textClass = "text-base", isDashboard = false }) {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const allBills = generateData();
    const { activeFilter } = useContext(FilterContext);

    const bills = activeFilter === 'All'
        ? allBills
        : allBills.filter(item => item.status === activeFilter);

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
                    <h2>Project Billing</h2>
                    <p>Financial overview of active projects</p>
                </div>
            </motion.div>

            <div className='ReservationTable_ReserveComp' style={{ overflow: 'hidden' }}>
                <table className={`ReservationTable_Data_Table ${textClass}`}>
                    <thead className={`ReservationTable_Table_Head ${textClass}`}>
                        <tr className='ReservationTable_Table_Header_TOP'>
                            {/* <th className={`ReservationTable_Table_Header ${textClass}`}>Project ID</th> */}
                            <th className='ReservationTable_Table_Header'>Client</th>
                            <th className='ReservationTable_Table_Header'>Project Name</th>
                            <th className='ReservationTable_Table_Header'>Amount</th>
                            <th className='ReservationTable_Table_Header'>Task Status</th>
                        </tr>
                    </thead>
                    <motion.tbody
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {bills.map((item, index) => (
                            <motion.tr
                                key={index}
                                className='ReservationTable_Table_Row'
                                variants={rowVariants}
                            >
                                {/* <td className={`ReservationTable_Table_Cell ${textClass}`}>{item.id}</td> */}
                                <td className={`ReservationTable_Table_Cell ${textClass}`}>{item.client}</td>
                                <td className={`ReservationTable_Table_Cell ${textClass}`}>{item.projectName}</td>
                                <td className={`ReservationTable_Table_Cell ${textClass}`} style={{color:'var(--theme-color-secondary)', fontWeight:'600'}}>{item.amount}</td>
                                <td className={`ReservationTable_Table_Cell ${textClass}`}>
                                    <span className={`ReservationTable_Status_Pill Status_${item.status.replace(' ', '')}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </table>
            </div>
        </div>
    );
}

export default BillingDashboard;