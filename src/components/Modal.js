import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  const handleScroll = useCallback((event) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isOpen, handleScroll]);

  const closeModal = () => {
    onClose();
    // Remove the event listener when the modal is closed
    window.removeEventListener('scroll', handleScroll);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div ref={modalRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
