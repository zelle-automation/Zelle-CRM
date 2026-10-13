import React, { useState, useEffect } from 'react';
import './CompanyFormGettingStarted.css';
import { 
  FaHospital, FaGraduationCap, FaCouch, FaCarSide, 
  FaPlane, FaUtensils, FaExchangeAlt, FaChartLine, 
  FaLightbulb, FaMosque, FaChevronDown, FaGlobeAmericas, FaPhoneAlt
} from 'react-icons/fa';

function CompanyFormGettingStarted({ onComplete }) {
  const [industryOpen, setIndustryOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  
  // Form States
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const industries = [
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Furniture", icon: <FaCouch /> },
    { name: "Rental", icon: <FaCarSide /> },
    { name: "Tour and Travels", icon: <FaPlane /> },
    { name: "Restaurants", icon: <FaUtensils /> },
    { name: "Trading", icon: <FaExchangeAlt /> },
    { name: "Finance", icon: <FaChartLine /> },
    { name: "Opinion Making", icon: <FaLightbulb /> },
    { name: "Religious", icon: <FaMosque /> }
  ];

  const countries = ["United Arab Emirates", "Saudi Arabia", "Pakistan", "United Kingdom", "United States", "Qatar", "Oman"];

  // Logic: Har change par check karega ke saari fields fill hain ya nahi
  useEffect(() => {
    const isFormValid = 
      businessName.trim() !== "" && 
      phoneNumber.trim() !== "" && 
      selectedIndustry !== null && 
      selectedCountry !== null;

    if (isFormValid) {
      onComplete(); // Parent ko notify karega progress badhane ke liye
    }
  }, [businessName, phoneNumber, selectedIndustry, selectedCountry, onComplete]);

  return (
    <div className='CompanyFormGettingStarted_Main'>
      <div className='FormWrapper_ZELLEONE'>
        <div className='QuestionHeader_ZELLEONE'>
          <h2>Company Setup</h2>
          <p>Complete your business profile to get started</p>
        </div>

        <div className='FormFields_ZELLEONE'>
          <div className='InputGroup_ZELLEONE'>
            <label>Business Name</label>
            <input 
              type="text" 
              placeholder="e.g. ZelleOne Solutions" 
              className='TextInput_ZELLEONE' 
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div className='InputRow_ZELLEONE'>
            <div className='InputGroup_ZELLEONE'>
              <label>Select Industry</label>
              <div className={`CustomSelect_ZELLEONE ${industryOpen ? 'DropdownOpen' : ''}`}>
                <div className='SelectHeader_ZELLEONE' onClick={() => { setIndustryOpen(!industryOpen); setCountryOpen(false); }}>
                  <div className='SelectedValue_ZELLEONE'>
                    {selectedIndustry ? (
                      <><span className='Icon_ZELLEONE'>{selectedIndustry.icon}</span>{selectedIndustry.name}</>
                    ) : "Select Industry"}
                  </div>
                  <FaChevronDown className={`ArrowIcon_ZELLEONE ${industryOpen ? 'Rotate' : ''}`} />
                </div>
                {industryOpen && (
                  <div className='SelectList_ZELLEONE'>
                    {industries.map((item, index) => (
                      <div key={index} className='SelectItem_ZELLEONE' onClick={() => { setSelectedIndustry(item); setIndustryOpen(false); }}>
                        <span className='Icon_ZELLEONE'>{item.icon}</span>{item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className='InputGroup_ZELLEONE'>
              <label>Phone Number</label>
              <div className='InputWithIcon_ZELLEONE'>
                <FaPhoneAlt className='FieldIcon_ZELLEONE' />
                <input 
                  type="tel" 
                  placeholder="+971 50 XXX XXXX" 
                  className='TextInput_ZELLEONE IconPadding' 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='InputGroup_ZELLEONE'>
            <label>Company Country</label>
            <div className={`CustomSelect_ZELLEONE ${countryOpen ? 'DropdownOpen' : ''}`}>
              <div className='SelectHeader_ZELLEONE' onClick={() => { setCountryOpen(!countryOpen); setIndustryOpen(false); }}>
                <div className='SelectedValue_ZELLEONE'>
                  <span className='Icon_ZELLEONE'><FaGlobeAmericas /></span>
                  {selectedCountry || "Select Country"}
                </div>
                <FaChevronDown className={`ArrowIcon_ZELLEONE ${countryOpen ? 'Rotate' : ''}`} />
              </div>
              {countryOpen && (
                <div className='SelectList_ZELLEONE'>
                  {countries.map((country, index) => (
                    <div key={index} className='SelectItem_ZELLEONE' onClick={() => { setSelectedCountry(country); setCountryOpen(false); }}>
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Submit button removed as per request - progress is automatic */}
        </div>
      </div>
    </div>
  );
}

export default CompanyFormGettingStarted;