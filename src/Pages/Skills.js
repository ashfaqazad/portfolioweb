import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../StyleSheet/Skills.module.css"; // Import the CSS module

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate heading to slide in from the left
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
        },
      }
    );

    // Animate cards with rotation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotate: -90, x: -200, opacity: 0 },
        {
          rotate: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            delay: index * 0.2,
          },
        }
      );
    });
  }, []);

  const svgIcon = (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={styles.svgIcon}
    >
      <path
        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"
        fill="#0d6efd"
      ></path>
    </svg>
  );

  const skillsData = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind", "GSAP"],
      level: ["Experienced", "Experienced", "Experienced", "Experienced", "Experienced", "Intermediate", "Intermediate"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js",  "Next.js", "MongoDB"],
      level: ["Intermediate", "Intermediate", "Experienced", "Intermediate"],
    },
    {
      category: "Tools",
      skills: ["VS Code", "Postman", "Figma", "Git/GitHub"],
      level: ["Experienced", "Intermediate", "Intermediate", "Intermediate", "Intermediate", "Intermediate"],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h1 ref={headingRef} className={styles.skillsHeading}>
          My Skills
        </h1>
        <div className={styles.skillsCardsGrid}>
          {skillsData.map((section, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.skillsCard}
            >
              <h5 className={styles.cardTitle}>{section.category}</h5>
              <ul className={styles.skillsList}>
                {section.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillsItem}>
                    <span className={styles.skillName}>
                      {svgIcon}
                      {skill}
                    </span>
                    <span className={styles.skillLevel}>{section.level[skillIndex]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
