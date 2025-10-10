import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../StyleSheet/Contact.module.css"; // Import the CSS module

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formFieldsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // FormSubmit.co endpoint
      const response = await fetch("https://formsubmit.co/ajax/ashfaqahmedazad@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form successfully submitted!");
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form.");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
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



        {/* <div className={styles.contactGrid}>
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
        </div> */}



        <div className={styles.contactGrid}>
          {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
            <div
              className={styles.contactItem}
              key={title}
              ref={(el) => (contactItemsRef.current[index] = el)}
            >
              <h2>{title}</h2>
              <p>
                {title === "Email"
                  ? "ashfaqahmedazad@gmail.com"
                  : title === "LinkedIn"
                  ? "LinkedIn"
                  : "+923332758958"}
              </p>

              <a
                href={
                  title === "Email"
                    ? "mailto:ashfaqahmedazad@gmail.com"
                    : title === "LinkedIn"
                    ? "https://www.linkedin.com/in/ashfaque-ahmed-bhutto-a0a44827b"
                    : "tel:+923332758958"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  {title === "Email" ? "Send an Email" : "Send a Message"}
                </button>
              </a>
            </div>
          ))}
        </div>



        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Full Name"
            ref={(el) => (formFieldsRef.current[0] = el)}
            className={styles.inputField}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            ref={(el) => (formFieldsRef.current[1] = el)}
            className={styles.inputField}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            placeholder="Your Message"
            ref={(el) => (formFieldsRef.current[2] = el)}
            className={styles.inputField}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;






// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "../StyleSheet/Contact.module.css"; // Import the CSS module

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const contactItemsRef = useRef([]);
//   const formFieldsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );

//     gsap.fromTo(
//       headingRef.current,
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 1, delay: 0.3 }
//     );

//     contactItemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, rotate: -10, y: 50 },
//         {
//           opacity: 1,
//           rotate: 0,
//           y: 0,
//           duration: 1,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: item,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     formFieldsRef.current.forEach((field, index) => {
//       gsap.fromTo(
//         field,
//         { opacity: 0, rotate: -10, x: 100 },
//         {
//           opacity: 1,
//           rotate: 0,
//           x: 0,
//           duration: 1,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: field,
//             start: "top 90%",
//             end: "top 60%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section id="contact" ref={sectionRef} className={styles.contactSection}>
//       <div className={styles.container}>
//         <h1 ref={headingRef} className={styles.contactHeading}>
//           Contact Me
//         </h1>
//         <p className={styles.contactText}>
//           Ready to elevate your digital presence? Contact me to discuss your
//           project, inquire about services, or simply say hello.
//         </p>

//         <div className={styles.contactGrid}>
//           {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
//             <div
//               key={title}
//               className={styles.contactItem}
//               ref={(el) => (contactItemsRef.current[index] = el)}
//             >
//               <h2>{title}</h2>
//               <p>
//                 {title === "Email"
//                   ? "ashfaqahmedazad@gmail.com"
//                   : title === "LinkedIn"
//                   ? "ashfaqazad"
//                   : "+92 3332758958"}
//               </p>
//               <button>
//                 {title === "Email" ? "Send an Email" : "Send a Message"}
//               </button>
//             </div>
//           ))}
//         </div>

//         <form
//           action="https://formsubmit.co/ashfaqahmedazad@gmail.com"
//           method="POST"
//           className={styles.contactForm}
//         >
//           <input
//             type="text"
//             placeholder="Your Full Name"
//             ref={(el) => (formFieldsRef.current[0] = el)}
//             className={styles.inputField}
//             name="name"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             ref={(el) => (formFieldsRef.current[1] = el)}
//             className={styles.inputField}
//             name="email"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             ref={(el) => (formFieldsRef.current[2] = el)}
//             className={styles.inputField}
//             name="message"
//             required
//           ></textarea>
//           <input
//             type="hidden"
//             name="_captcha"
//             value="false"
//           />
//           <input
//             type="hidden"
//             name="_next"
//             value="https://azad-dev.bedarimillat.com"
//           />
//           <button type="submit" className={styles.submitButton}>
//             Send Message
//           </button>
//         </form>



        
//       </div>
//     </section>
//   );
// };

// export default Contact;
