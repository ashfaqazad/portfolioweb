import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "../StyleSheet/Home.module.css"; // Import CSS module

const Home = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const stats = [
    { label: "Years Of Experience", endValue: 3 },
    { label: "Completed Projects", endValue: 9 },
    { label: "Technologies Mastered", endValue: 7 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Animate image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, rotate: -180 },
      { opacity: 1, rotate: 45 }
    );

    // Animate text
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "-=0.5"
    );

    // Animate number counters after short delay
    stats.forEach((stat, index) => {
      let countObj = { val: 0 };

      gsap.to(countObj, {
        val: stat.endValue,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          setCounts(prev => {
            const updated = [...prev];
            updated[index] = Math.floor(countObj.val);
            return updated;
          });
        },
      });
    });
  }, []); // ✅ No dependency warning now

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div ref={textRef} className={styles.homeText}>
          <h3>
            Hello There! I'm{" "}
            <span className={styles.highlight}>Ashfaque Ahmed</span>
          </h3>
          <h1>I'M A WEB DEVELOPER</h1>
          <p>
            I create user-friendly web applications, simplifying complex
            requirements into smooth and interactive experiences that are both
            functional and visually appealing.
          </p>

          <div className={styles.homeStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <h1>{counts[index]}+</h1>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.homeButtons}>
            <a
<<<<<<< HEAD
              // href="https://bedarimillat.com/Images/Imag/Ashfaque_Ahmed_Bhutto_CV_2025.pdf"
              href="/pdfs/Ashfaque_Ahmed_Bhutto_CV_2025.pdf"

=======
              href="https://bedarimillat.com/Images/Imag/Ashfaque_Ahmed_Bhutto_CV_2025.pdf"
>>>>>>> cd62a9c9dbd6d63f4908e594b31fc9fabd2a6ed7
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              CV & Credentials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;







// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import styles from "../StyleSheet/Home.module.css"; // Import CSS module

// const Home = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const stats = [
//     { label: "Years Of Experience", endValue: 3 },
//     { label: "Completed Projects", endValue: 9 },
//     { label: "Technologies Mastered", endValue: 7 },
//   ];

//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { duration: 1, ease: "power2.out" },
//     });

//     // Animate image
//     tl.fromTo(
//       imageRef.current,
//       { opacity: 0, rotate: -180 },
//       { opacity: 1, rotate: 45 }
//     );

//     // Animate text
//     tl.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0 },
//       "-=0.5"
//     );

//     // Numbers animation
//     stats.forEach((stat, index) => {
//       gsap.to({}, {
//         duration: 2,
//         ease: "power2.out",
//         onUpdate: function () {
//           setCounts((prevCounts) => {
//             const newCounts = [...prevCounts];
//             newCounts[index] = Math.min(
//               Math.ceil(this.progress() * stat.endValue),
//               stat.endValue
//             );
//             return newCounts;
//           });
//         },
//       });
//     });
//   }, []);

//   return (
//     <section id="home" className={styles.homeSection}>
//       <div className={styles.homeContainer}>
//         <div ref={textRef} className={styles.homeText}>
//           <h3>
//             Hello There! I'm <span className={styles.highlight}>Ashfaque Ahmed</span>
//           </h3>
//           <h1>I'M A WEB DEVELOPER</h1>
//           <p>
//             I create user-friendly web applications, simplifying complex requirements into smooth and interactive experiences that are both functional and visually appealing.
//           </p>
//           <div className={styles.homeStats}>
//             {stats.map((stat, index) => (
//               <div key={index} className={styles.statItem}>
//                 <h1>{counts[index]}+</h1>
//                 <p>{stat.label}</p>
//               </div>
//             ))}
//           </div>
//           {/* <div className={styles.homeButtons}>
//             <button className={styles.btnPrimary}>CV & Credentials</button>
//           </div> */}
//           <div className={styles.homeButtons}>
//             <a
//               href="https://bedarimillat.com/Images/Imag/Ashfaque_Ahmed_Bhutto_CV.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.btnPrimary}
//             >
//               CV & Credentials
//             </a>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

