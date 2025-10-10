import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "../StyleSheet/About.module.css"; // Import CSS module

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const expandedContentRef = useRef(null);

  const [expanded, setExpanded] = useState(false);




  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,

        { x: -400, opacity: 0, delay: 1 },
        { x: 0, opacity: 1, duration: 2 }


      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { x: 400, opacity: 0, delay: 1 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 2 }

      );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);



  const handleReadMore = () => {
    gsap.to([imageRef.current, textRef.current], {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => setExpanded(true),
    });
  };

  const handleShowLess = () => {
    if (expandedContentRef.current) {
      gsap.to(expandedContentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          setExpanded(false);

          // ✅ Reset Animation for Image and Text
          gsap.set(imageRef.current, { opacity: 1, scale: 1 });
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
            );
          }

          // ✅ Scroll wapas About Section par le aayega
          setTimeout(() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }, 100); // Small delay to allow re-rendering
        },
      });
    }
  };




  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      gsap.fromTo(
        expandedContentRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [expanded]);

  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        {!expanded ? (
          <>
            <div ref={imageRef} className={styles.aboutImage}>
              <img src="/Images/image.jpg" alt="Profile" />
            </div>
            <div ref={textRef} className={styles.aboutText}>
              <h2>About Me</h2>
              <p>
                <span className={styles.highlight}>I am Ashfaque Ahmed,</span> <br /> a self-taught full-stack developer who loves building websites and learning new technologies. I’ve worked on many projects using React, Node.js, MongoDB, and WordPress, and now I also have solid experience with Next.js. It helps me create fast, modern, and SEO-friendly web apps with both frontend and backend features in one place.
              </p>
              <button onClick={handleReadMore}>Read More</button>
            </div>
          </>
        ) : (
          <div
            ref={expandedContentRef}
            className={`${styles.aboutExpandedText} d-flex justify-content-center align-items-center flex-column text-center`}
          >
            <h2>About Me</h2>
            <p >
              I’m Ashfaque Ahmed, a self-taught full-stack developer who loves building websites and learning new technologies. I’ve worked on many projects using React, Node.js, MongoDB, and WordPress, and now I also have solid experience with Next.js. It helps me create fast, modern, and SEO-friendly web apps with both frontend and backend features in one place.

              I enjoy designing clean and user-friendly interfaces, building smooth and responsive websites, and solving real-world problems with simple, effective code. With WordPress, I can create custom websites that look great and meet client needs, and with modern tools like React and Next.js, I build dynamic and interactive web apps.

              I focus on both frontend and backend development to make sure everything works well from start to finish. I believe in writing clean code, paying attention to detail, and always improving my skills. I stay updated with the latest tech so I can keep growing and building better solutions that help people and businesses succeed.


            </p>
            <button onClick={handleShowLess}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
