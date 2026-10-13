import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaComments, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Support.css';

function Support() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="support-main-container_ZELLEONE__SUPPORT"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="support-header-section_ZELLEONE__SUPPORT" variants={itemVariants}>
        <h1 className="support-title_ZELLEONE__SUPPORT">Need Help?</h1>
        <p className="support-subtitle_ZELLEONE__SUPPORT">Choose a way to contact us or browse our help center.</p>
      </motion.div>

      <motion.div className="support-grid_ZELLEONE__SUPPORT" variants={containerVariants}>
        <motion.div className="support-card_ZELLEONE__SUPPORT" variants={itemVariants} whileHover={{ y: -5 }}>
          <div className="icon-wrapper_ZELLEONE__SUPPORT"><FaEnvelope /></div>
          <h3 className="card-title_ZELLEONE__SUPPORT">Email Us</h3>
          <p className="card-text_ZELLEONE__SUPPORT">Send us an email and we will get back to you within 24 hours.</p>
          <button className="support-btn_ZELLEONE__SUPPORT">support@zelleone.com</button>
        </motion.div>

        <motion.div className="support-card_ZELLEONE__SUPPORT" variants={itemVariants} whileHover={{ y: -5 }}>
          <div className="icon-wrapper_ZELLEONE__SUPPORT"><FaPhoneAlt /></div>
          <h3 className="card-title_ZELLEONE__SUPPORT">Call Support</h3>
          <p className="card-text_ZELLEONE__SUPPORT">Available Mon-Fri, 9am to 5pm for urgent inquiries.</p>
          <button className="support-btn_ZELLEONE__SUPPORT">+1 (555) 000-1234</button>
        </motion.div>

        <motion.div className="support-card_ZELLEONE__SUPPORT" variants={itemVariants} whileHover={{ y: -5 }}>
          <div className="icon-wrapper_ZELLEONE__SUPPORT"><FaComments /></div>
          <h3 className="card-title_ZELLEONE__SUPPORT">Live Chat</h3>
          <p className="card-text_ZELLEONE__SUPPORT">Chat with our support team in real-time for quick assistance.</p>
          <button className="support-btn_ZELLEONE__SUPPORT">Start Chat</button>
        </motion.div>
      </motion.div>

      <motion.div className="faq-section_ZELLEONE__SUPPORT" variants={itemVariants}>
        <h2 className="faq-title_ZELLEONE__SUPPORT">Frequently Asked Questions</h2>
        <motion.div className="faq-item_ZELLEONE__SUPPORT" whileHover={{ scale: 1.01 }}>
          <span>How to reset my password?</span>
          <FaChevronRight />
        </motion.div>
        <motion.div className="faq-item_ZELLEONE__SUPPORT" whileHover={{ scale: 1.01 }}>
          <span>How to upgrade my subscription?</span>
          <FaChevronRight />
        </motion.div>
        <motion.div className="faq-item_ZELLEONE__SUPPORT" whileHover={{ scale: 1.01 }}>
          <span>Where can I find my billing history?</span>
          <FaChevronRight />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Support;