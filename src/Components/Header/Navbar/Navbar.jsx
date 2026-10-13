import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, Mail, Bell } from 'lucide-react';
import './Navbar.css';
import Zelle_One_Logo_With_Tag_V2 from '../../../assets/Zelle_One_Logo_With_Tag_V2.png';
import TOP_NAV_PROFILE_IMG from '../../../assets/TOP_NAV_PROFILE_IMG.png';

function Navbar() {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const location = useLocation();

  const moveIndicator = (el) => {
    if (!el || !indicatorRef.current) return;
    indicatorRef.current.style.width = `${el.offsetWidth}px`;
    indicatorRef.current.style.left = `${el.offsetLeft}px`;
    indicatorRef.current.style.opacity = '1';
  };

  const resetIndicator = () => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector('.active');
    if (activeLink) {
      moveIndicator(activeLink);
    } else {
      if (indicatorRef.current) indicatorRef.current.style.opacity = '0';
    }
  };

  useEffect(() => {
    resetIndicator();
  }, [location]);

  return (
    <div className='NAVBAR_HEADER_MAIN_CONTAINER'>
      <div className='Navbar_Main_Content_Container'>
        <div className='Logo_Section_NAVBAR_COMP'>
          <img src={Zelle_One_Logo_With_Tag_V2} alt="" />
        </div>

        <nav className='Nav_Links_Container_NAVBAR_COMP' ref={navRef} onMouseLeave={resetIndicator}>
          <div className='Nav_Indicator_NAVBAR_COMP' ref={indicatorRef}></div>
          <NavLink to="/dashboard" className='Link_Item_NAVBAR_COMP' onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Dashboard</NavLink>
          <NavLink to="/projects" className='Link_Item_NAVBAR_COMP' onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Projects</NavLink>
          <NavLink to="/support" className='Link_Item_NAVBAR_COMP' onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Support</NavLink>
          <NavLink to="/dashboard-insights" className='Link_Item_NAVBAR_COMP' onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Dashboard Insight</NavLink>
        </nav>

        <div className='Right_Actions_NAVBAR_COMP'>
          <div className='icons_Wrapper_NAVBAR_COMP'>
            <Search className='Action_Icon_NAVBAR_COMP' />
            <Mail className='Action_Icon_NAVBAR_COMP' />
            <Bell className='Action_Icon_NAVBAR_COMP' />
          </div>

          <div className='Avatar_Wrapper_NAVBAR_COMP'>
            <img src={TOP_NAV_PROFILE_IMG} className='Avatar_Wrapper_NAVBAR_COMP' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;