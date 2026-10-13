import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import './App.css';
import MainContent from './Components/MainContent/MainContent'
import Reservation from './Pages/Reservation/Reservation';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardInsights from './Pages/DashboardInsights/DashboardInsights';
import Support from './Pages/Support/Support';

function App() {
  return (
    <div className='OverAllAPP_Container'>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route index element={<Navigate to="/dashboard" replace/>}/>
            <Route path="projects" element={<Reservation />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="support" element={<Support/>} />
            <Route path="dashboard-insights/*" element={<DashboardInsights/>} />
          </Route>
        </Routes>
      </FilterProvider>
    </div>
  );
}

export default App;