import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import Modal from "./Modal"; // Assuming Modal is a separate component
import styles from "../StyleSheet/Services.module.css";

const Services = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]); // Array to store card refs






  const cardData = [
    {
      title: "UI/UX Design",
      shortDescription: "I design clean and user-friendly interfaces that are easy to use and visually appealing. My goal is to create layouts that feel simple and smooth.",
      fullDescription: "I enjoy designing web interfaces that are easy to understand and pleasant to use. I focus on clean layouts, readable fonts, and well-placed elements to make everything feel natural. I also make sure the design looks great on phones, tablets, and desktops. Accessibility and ease of use are always part of my process. My goal is to create experiences that are both beautiful and practical for real users.",
      icon: "🎨",
    },


    // {
    //   title: "Web Development",
    //   description:
    //     "I specialize in building custom websites tailored to your unique needs, from small business sites to large-scale web applications.",
    //   icon: "💻",
    // },
    // {
    //   title: "API Integration",
    //   description:
    //     "Integrating your website with third-party services and APIs can greatly enhance its functionality and user experience.",
    //   icon: "🔗",
    // },

    {
      title: "Web Development",
      shortDescription: "I create custom websites using modern technologies. My goal is to build fast, responsive, and user-friendly web applications.",
      fullDescription: "I specialize in building full-stack web applications using the MERN stack and Next.js. From designing the frontend with React to building secure APIs with Node and Express, I ensure the entire system works smoothly. I use MongoDB to manage data efficiently. My focus is on creating scalable and maintainable code. Whether it’s a business site or a complex platform, I deliver quality results.",
      icon: "💻",
    },

    {
      title: "API Integration",
      shortDescription: "I connect websites with external services to add features like payments, logins, and real-time data. This makes your site more powerful and interactive.",
      fullDescription: "I specialize in integrating APIs that bring more features to your website. This includes connecting with payment systems, user authentication (like Google or Facebook login), and fetching live data from external sources. These integrations help your site do more than just display content. I ensure that all APIs are connected securely and work smoothly with your frontend and backend. With proper integration, your web app becomes smarter and more helpful for users.",
      icon: "🔗",
    }

  ];

  const handleReadMore = (index) => {
    setSelectedCard(index);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // ✅ Rotate Cards on Every Page Refresh
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotationY: -180, opacity: 0, scale: 0.8 }, // Start from hidden & rotated
        {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: index * 0.3, // Stagger effect
          ease: "power2.out",
        }
      );
    });
  }, []); // Runs only on page load

  return (
    <section
      id="services"
      style={{ height: "auto", backgroundColor: "#121212", color: "#fff" }}
      className={styles.servicesSection}
    >
      <div className="container">
        <h1 ref={headingRef} className={styles.servicesHeading}>
          Services
        </h1>
        <p className={styles.servicesSubheading}>
          I transform your innovative ideas into distinctive, high-quality web
          projects that inspire you and captivate your customers.
        </p>

        {/* <div className={styles.servicesCardsGrid}>
          {cardData.map((card, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}> */}
        {/* <Card
                title={card.title}
                description={card.description}
                buttonLabel="Read More"
                icon={card.icon}
                onClick={() => handleReadMore(index)}
              /> */}
        {/* <Card
                title={card.title}
                description={card.shortDescription} // ✅ sirf short
                buttonLabel="Read More"
                icon={card.icon}
                onClick={() => handleReadMore(index)}
              />

            </div>
          ))}
        </div> */}


        <div className={styles.servicesCardsGrid}>
          {cardData.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                description={card.shortDescription}
                buttonLabel="Read More"
                icon={card.icon}
                onClick={() => handleReadMore(index)}
                buttonStyle={card.title === "Web Development" ? { marginTop: "28px" } : {}}
              />
            </div>
          ))}
        </div>


        {selectedCard !== null && (
          // <Modal
          //   title={cardData[selectedCard].title}
          //   description={cardData[selectedCard].description}
          //   onClose={closeModal}
          // />
          <Modal
            title={cardData[selectedCard].title}
            description={cardData[selectedCard].fullDescription} // ✅ full yahan aayega
            onClose={closeModal}
          />

        )}
      </div>
    </section>


  );

};

export default Services;


