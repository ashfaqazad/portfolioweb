import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../StyleSheet/Modal.module.css";

const Modal = ({ title, description, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;


