import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css';
import { X } from 'lucide-react';
const CalendarPopup = ({ isOpen, onClose }) => {
    const [date, setDate] = useState(new Date());
    if (!isOpen) return null;



    return (

        <div className={`calendar-overlay ${isOpen ? 'show' : ''}`}>
            <div className={`calendar-popup ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className='ClenderCloseBTN'>
                    <h2>Select Date</h2>
                    <button className='CALENDER_POPUPCLOSE_VUTTON' onClick={onClose} ><X strokeWidth={3} /></button>
                </div>
                <Calendar
                    onChange={(date) => {
                        console.log(date);
                        onClose();
                    }}
                    value={date}
                    className="custom-calendar"
                />

            </div>
        </div>
    );
};

export default CalendarPopup;