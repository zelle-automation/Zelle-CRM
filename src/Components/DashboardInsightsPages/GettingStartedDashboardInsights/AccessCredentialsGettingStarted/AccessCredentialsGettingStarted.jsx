import React, { useState } from 'react';
import './AccessCredentialsGettingStarted.css';
import { 
  FaGlobe, FaFacebook, FaLinkedin, FaInstagram, 
  FaGoogle, FaLock, FaCheckCircle, FaTimes 
} from 'react-icons/fa';

function AccessCredentialsGettingStarted() {
  const [activePlatform, setActivePlatform] = useState(null);
  const [savedData, setSavedData] = useState({});
  const [formData, setFormData] = useState({ url: '', username: '', password: '' });

  const platforms = [
    { id: 'website', name: 'Website', icon: <FaGlobe />, color: '#adacac' },
    { id: 'facebook', name: 'Facebook', icon: <FaFacebook />, color: '#1877F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: <FaLinkedin />, color: '#0A66C2' },
    { id: 'instagram', name: 'Instagram', icon: <FaInstagram />, color: '#E4405F' },
    { id: 'google', name: 'Google Ads', icon: <FaGoogle />, color: '#EA4335' },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.url && formData.username && formData.password) {
      setSavedData({ ...savedData, [activePlatform.id]: true });
      setActivePlatform(null);
      setFormData({ url: '', username: '', password: '' });
    }
  };

  return (
    <div className='AccessCredentials_Main'>
      <div className='AccessCredentials_Container'>
        <div className='QuestionHeader_ZELLEONE'>
          <h2>Access Credentials</h2>
          <p>Securely connect your platforms. Once saved, credentials will be locked for security.</p>
        </div>

        <div className='AccessCredentials_Grid'>
          {platforms.map((p) => {
            const isLocked = savedData[p.id];
            return (
              <div 
                key={p.id} 
                className={`AccessCredentials_PlatformCard ${isLocked ? 'AccessCredentials_Locked' : ''}`}
                onClick={() => !isLocked && setActivePlatform(p)}
              >
                <div className='AccessCredentials_PlatformIcon' style={{ color: isLocked ? '#A0A0A0' : p.color }}>
                  {isLocked ? <FaLock /> : p.icon}
                </div>
                <div className='AccessCredentials_PlatformInfo'>
                  <h3>{p.name}</h3>
                  <span>{isLocked ? 'Access Granted' : 'Pending Access'}</span>
                </div>
                {isLocked && <FaCheckCircle className='AccessCredentials_StatusIcon' />}
              </div>
            );
          })}
        </div>

        {/* Popup Modal */}
        {activePlatform && (
          <div className='AccessCredentials_ModalOverlay'>
            <div className='AccessCredentials_ModalContent'>
              <div className='AccessCredentials_ModalHeader'>
                <div className='AccessCredentials_TitleGroup'>
                  <span style={{ color: activePlatform.color, fontSize:'30px' }}>{activePlatform.icon}</span>
                  <h3> {activePlatform.name} Credentials</h3>
                </div>
                <button className='AccessCredentials_CloseBtn' onClick={() => setActivePlatform(null)}>
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSave} className='AccessCredentials_ModalForm'>
                <div className='AccessCredentials_FieldGroup'>
                  <label>URL / Domain</label>
                  <input 
                    type="text" 
                    placeholder="https://example.com" 
                    required 
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                  />
                </div>
                <div className='AccessCredentials_FieldGroup'>
                  <label>Username / Email</label>
                  <input 
                    type="text" 
                    placeholder="admin@example.com" 
                    required 
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
                <div className='AccessCredentials_FieldGroup'>
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                <p className='AccessCredentials_WarningText'>
                  <FaLock /> Note: Once saved, you cannot edit these credentials from here.
                </p>
                <button type="submit" className='AccessCredentials_SaveBtn'>Confirm & Lock Access</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccessCredentialsGettingStarted;