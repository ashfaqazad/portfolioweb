import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import styles from "../StyleSheet/Contact.module.css"; // Import the CSS module

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formFieldsRef = useRef([]);
  const formRef = useRef();
  const [formSent, setFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );

    contactItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, rotate: -10, y: 50 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    formFieldsRef.current.forEach((field, index) => {
      gsap.fromTo(
        field,
        { opacity: 0, rotate: -10, x: 100 },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: field,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_1ml7ra8", // Service ID
        "template_ha9q7tg", // Template ID
        formRef.current, // Form reference
        "Jx-9b_rSq7FKWAIVH" // Public API key
      )
      .then(
        () => {
          setFormSent(true);
          setIsLoading(false);
          console.log("Email sent successfully!");
          formFieldsRef.current.forEach((field) => (field.value = "")); // Clear the form
        },
        (error) => {
          setIsLoading(false);
          setFormSent(false);
          console.error("FAILED...", error.text);
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contactSection}>
      <div className={styles.container}>
        <h1 ref={headingRef} className={styles.contactHeading}>
          Contact Me
        </h1>
        <p className={styles.contactText}>
          Ready to elevate your digital presence? Contact me to discuss your
          project, inquire about services, or simply say hello.
        </p>

        <div className={styles.contactGrid}>
          {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
            <div
              key={title}
              className={styles.contactItem}
              ref={(el) => (contactItemsRef.current[index] = el)}
            >
              <h2>{title}</h2>
              <p>
                {title === "Email"
                  ? "ashfaqahmedazad@gmail.com"
                  : title === "LinkedIn"
                  ? "ashfaqazad"
                  : "+92 3332758958"}
              </p>
              <button>
                {title === "Email" ? "Send an Email" : "Send a Message"}
              </button>
            </div>
          ))}
        </div>

        <form ref={formRef} className={styles.contactForm} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full Name"
            ref={(el) => (formFieldsRef.current[0] = el)}
            className={styles.inputField}
            name="from_name" // Matches template variable
          />
          <input
            type="email"
            placeholder="Your Email"
            ref={(el) => (formFieldsRef.current[1] = el)}
            className={styles.inputField}
            name="from_email" // Matches template variable
          />
          <textarea
            placeholder="Your Message"
            ref={(el) => (formFieldsRef.current[2] = el)}
            className={styles.inputField}
            name="message" // Matches template variable
          ></textarea>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
