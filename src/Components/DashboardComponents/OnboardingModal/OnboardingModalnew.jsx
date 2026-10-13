import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaHospital, FaGraduationCap, FaCouch, FaCarSide,
    FaPlane, FaUtensils, FaExchangeAlt, FaChartLine,
    FaLightbulb, FaMosque, FaChevronDown, FaGlobeAmericas, FaPhoneAlt, FaTimes,
    FaRocket, FaCheckCircle
} from 'react-icons/fa';
import './OnboardingModal.css';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", duration: 0.5, bounce: 0.15 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } }
};

// Form Container Fade Out
const formFadeVariants = {
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    hidden: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(4px)",
        transition: { duration: 0.4, ease: "easeInOut" }
    }
};

const circleVariants = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 360,
        transition: { duration: 0.7, ease: "easeOut" }
    },
    reverse: {
        scale: 0,
        opacity: 0,
        rotate: -180,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

const rocketVariants = {
    hidden: {
        x: -250,
        opacity: 0
    },

    arrive: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            mass: 0.8
        }
    },

    leave: {
        x: 250,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12
        }
    }
};
const successVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 110, damping: 15 }
    }
};

function OnboardingModal({ isOpen, onClose, onComplete }) {
    const [industryOpen, setIndustryOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);

    // Animation Sequencer States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [circleState, setCircleState] = useState("hidden"); 
    const [rocketState, setRocketState] = useState("hidden");
    const [showSuccess, setShowSuccess] = useState(false);

    const [businessEmail, setBusinessEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

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

    useEffect(() => {
        const valid =
            businessName.trim() !== "" &&
            businessEmail.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            selectedIndustry !== null &&
            selectedCountry !== null;

        setIsFormValid(valid);
    }, [businessName, businessEmail, phoneNumber, selectedIndustry, selectedCountry]);
    const handleSaveSubmit = () => {
        if (!isFormValid) return;

        setIsSubmitting(true);

        // Circle open
        setCircleState("visible");

        // Rocket right se center tak aaye
        setTimeout(() => {
            setRocketState("arrive");
        }, 800);

        // Center me 2 sec rukay phir left ki taraf jaye
        setTimeout(() => {
            setRocketState("leave");
        }, 3000);

        // Rocket nikal jaye phir circle band ho
        setTimeout(() => {
            setCircleState("reverse");
        }, 4200);

        // Success
        setTimeout(() => {
            onComplete?.({
                businessName,
                businessEmail,
                phoneNumber,
                industry: selectedIndustry.name,
                country: selectedCountry
            });

            setShowSuccess(true);
        }, 4800);
    };

    const handleFinalResetClose = () => {
        setShowSuccess(false);
        setIsSubmitting(false);
        setCircleState("hidden");
        setRocketState("hidden");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='ModalBackdrop_RequestServicesZelle_Client_Dashboard'
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className='ModalContainer_RequestServicesZelle_Client_Dashboard'
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Global Dynamic Engine Core Overlay Layer */}
                        <AnimatePresence>
                            {isSubmitting && !showSuccess && circleState !== "hidden" && (
                                <motion.div className="RocketOverlay_RequestServicesZelle_Client_Dashboard">
                                    <motion.div
                                        className="RocketCircle_RequestServicesZelle_Client_Dashboard"
                                        variants={circleVariants}
                                        initial="hidden"
                                        animate={circleState}
                                    >
                                        <motion.div
                                            variants={rocketVariants}
                                            initial="hidden"
                                            animate={rocketState}
                                            className="RocketWrapperInner_ZelleOne"
                                        >
                                            <FaRocket className="RocketIcon_RequestServicesZelle_Client_Dashboard" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Top corner standard close element */}
                        <button
                            className='CloseBtn_RequestServicesZelle_Client_Dashboard'
                            onClick={handleFinalResetClose}
                            aria-label="Close Modal"
                            disabled={isSubmitting && !showSuccess}
                        >
                            <FaTimes />
                        </button>

                        <div className='FormWrapper_RequestServicesZelle_Client_Dashboard'>
                            <AnimatePresence mode="wait">
                                {!isSubmitting ? (
                                    <motion.div
                                        key="onboarding-form-state"
                                        variants={formFadeVariants}
                                        initial="visible"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <div className='QuestionHeader_ZELLEONE'>
                                            <div className='QuestionHeader_RequestServicesZelle_Client_Dashboard'>
                                                <h2>Company Setup</h2>
                                                <p>Complete your business profile to get started</p>
                                            </div>
                                        </div>

                                        <div className='FormFields_RequestServicesZelle_Client_Dashboard'>
                                            <div className='InputRow_RequestServicesZelle_Client_Dashboard'>
                                                <div className='InputGroup_RequestServicesZelle_Client_Dashboard'>
                                                    <label>Business Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. ZelleOne Solutions"
                                                        className='TextInput_RequestServicesZelle_Client_Dashboard'
                                                        value={businessName}
                                                        onChange={(e) => setBusinessName(e.target.value)}
                                                    />
                                                </div>
                                                <div className='InputGroup_RequestServicesZelle_Client_Dashboard'>
                                                    <label>Business Email</label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. info@zelleone.com"
                                                        className='TextInput_RequestServicesZelle_Client_Dashboard'
                                                        value={businessEmail}
                                                        onChange={(e) => setBusinessEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className='InputRow_RequestServicesZelle_Client_Dashboard'>
                                                <div className='InputGroup_RequestServicesZelle_Client_Dashboard'>
                                                    <label>Select Industry</label>
                                                    <div className={`CustomSelect_RequestServicesZelle_Client_Dashboard ${industryOpen ? 'DropdownOpen' : ''}`}>
                                                        <div className='SelectHeader_RequestServicesZelle_Client_Dashboard' onClick={() => { setIndustryOpen(!industryOpen); setCountryOpen(false); }}>
                                                            <div className='SelectedValue_RequestServicesZelle_Client_Dashboard'>
                                                                {selectedIndustry ? (
                                                                    <><span className='Icon_RequestServicesZelle_Client_Dashboard'>{selectedIndustry.icon}</span>{selectedIndustry.name}</>
                                                                ) : "Select Industry"}
                                                            </div>
                                                            <FaChevronDown className={`ArrowIcon_RequestServicesZelle_Client_Dashboard ${industryOpen ? 'Rotate' : ''}`} />
                                                        </div>

                                                        {industryOpen && (
                                                            <div className='SelectList_RequestServicesZelle_Client_Dashboard'>
                                                                {industries.map((item, index) => (
                                                                    <div key={index} className='SelectItem_RequestServicesZelle_Client_Dashboard' onClick={() => { setSelectedIndustry(item); setIndustryOpen(false); }}>
                                                                        <span className='Icon_RequestServicesZelle_Client_Dashboard'>{item.icon}</span>{item.name}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className='InputGroup_RequestServicesZelle_Client_Dashboard'>
                                                    <label>Phone Number</label>
                                                    <div className='InputWithIcon_RequestServicesZelle_Client_Dashboard'>
                                                        <FaPhoneAlt className='FieldIcon_RequestServicesZelle_Client_Dashboard' />
                                                        <input
                                                            type="tel"
                                                            placeholder="+971 50 XXX XXXX"
                                                            className='TextInput_RequestServicesZelle_Client_Dashboard IconPadding'
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='InputGroup_RequestServicesZelle_Client_Dashboard'>
                                                <label>Company Country</label>
                                                <div className={`CustomSelect_RequestServicesZelle_Client_Dashboard ${countryOpen ? 'DropdownOpen' : ''}`}>
                                                    <div className='SelectHeader_RequestServicesZelle_Client_Dashboard' onClick={() => { setCountryOpen(!countryOpen); setIndustryOpen(false); }}>
                                                        <div className='SelectedValue_RequestServicesZelle_Client_Dashboard'>
                                                            <span className='Icon_RequestServicesZelle_Client_Dashboard'><FaGlobeAmericas /></span>
                                                            {selectedCountry || "Select Country"}
                                                        </div>
                                                        <FaChevronDown className={`ArrowIcon_RequestServicesZelle_Client_Dashboard ${countryOpen ? 'Rotate' : ''}`} />
                                                    </div>

                                                    {countryOpen && (
                                                        <div className='SelectList_RequestServicesZelle_Client_Dashboard'>
                                                            {countries.map((country, index) => (
                                                                <div key={index} className='SelectItem_RequestServicesZelle_Client_Dashboard' onClick={() => { setSelectedCountry(country); setCountryOpen(false); }}>
                                                                    {country}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='ActionFooterRow_RequestServicesZelle_Client_Dashboard'>
                                                <button
                                                    type="button"
                                                    className={`SaveBtn_RequestServicesZelle_Client_Dashboard ${isFormValid ? 'ActiveState' : ''}`}
                                                    disabled={!isFormValid}
                                                    onClick={handleSaveSubmit}
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* Success Content rendered perfectly inline in place of form container */
showSuccess && (
    <motion.div
        key="success-message-state"
        className="SuccessContainer_ZelleOnboarding"
        variants={successVariants}
        initial="hidden"
        animate="visible"
    >
        {/* Animated SVG Icon */}
        <svg
            className="SuccessCheckIcon_Zelle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            style={{ width: '60px', height: '60px' }} // Aap size CSS se bhi control kar sakte hain
        >
            {/* 1. Circle Path */}
            <motion.circle
                cx="26"
                cy="26"
                r="23"
                fill="none"
                stroke="currentColor" // Yeh aapki CSS se color pick karega (jaise green)
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            {/* 2. Checkmark (Tick) Path */}
            <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 27l7 7 13-13"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} // delay: 0.5 taake circle ke baad shuru ho
            />
        </svg>

        <h2>Onboarding Complete!</h2>
        <p>Thank you for sharing your details. We are incredibly excited to kickstart this digital journey with you and bring your vision to life. Stay tuned for the next steps!</p>
        <button
            type="button"
            className="SuccessCloseBtn_Zelle"
            onClick={handleFinalResetClose}
        >
            Close
        </button>
    </motion.div>
)
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default OnboardingModal;