import React from 'react';
import './BookingChart.css';

const BookingChart = () => {
  return (
    <div className="chart-card_ZELLECLIENT__DASHBOARD">
      <div className="chart-header_ZELLECLIENT">
        <div>
          <h4 className="title_ZELLECLIENT">Tickets</h4>
          <p className="subtitle_ZELLECLIENT">Monthly Tickets and Services</p>
        </div>
      </div>

      <div className="bar-container_ZELLECLIENT">
        <div className="bar-item_ZELLECLIENT">
          <div className='bar-item_ZELLECLIENT_BORDERssss'>
            <span className="bar-val_ZELLECLIENT">455</span>
            <div className="bar-fill_ZELLECLIENT dark" style={{ height: '100px', width: '105px' }}></div>
          </div>
          <span className="bar-label_ZELLECLIENT">January</span>
        </div>


        <div className="bar-item_ZELLECLIENT">
          <div className='bar-item_ZELLECLIENT_BORDERssss'>
            <span className="bar-val_ZELLECLIENT">409</span>
            <div className="bar-fill_ZELLECLIENT pink" style={{ height: '70px', width: '105px' }}>
              <span className="badge_ZELLECLIENT" style={{ transform: 'translate(-20px , 20px)' }}>-10%</span>
            </div>
          </div>
          <span className="bar-label_ZELLECLIENT">February</span>
        </div>


        <div className="bar-item_ZELLECLIENT">
          <div className='bar-item_ZELLECLIENT_BORDERssss'>
            <span className="bar-val_ZELLECLIENT" style={{color:'#888787'}}>222</span>
            <div className="bar-fill_ZELLECLIENT light" style={{ height: '40px' , width: '105px'  }}></div>
          </div>
          <span className="bar-label_ZELLECLIENT">March</span>
        </div>
      </div>
    </div>
  );
};

export default BookingChart;