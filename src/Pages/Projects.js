import React, { useState } from "react";
import { gsap } from "gsap";
import projectsData from "./projectData"; // Updated data
import styles from "../StyleSheet/Projects.module.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  React.useEffect(() => {
    gsap.fromTo(
      `.${styles.projectsHeading}`,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, scrollTrigger: `.${styles.projectsHeading}` }
    );
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}>Projects</h2>

      {/* Buttons for filtering */}
      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Front-End")}
          className={filter === "Front-End" ? styles.active : ""}
        >
          Front-End
        </button>
        <button
          onClick={() => setFilter("Full-Stack")}
          className={filter === "Full-Stack" ? styles.active : ""}
        >
          Full-Stack
        </button>
      </div>

      {/* Projects rendering */}
      <div className={styles.projectsContainer}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className={styles.projectImage}
            />
            <h4 className={styles.subTitle}>{project.title}</h4>
            <p className={styles.paragraph}>{project.description}</p>
            <div className={styles.projectStack}>
              {project.stack.map((tech, idx) => (
                <span key={idx} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              {/* Check if liveLink is available */}
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveLink}
                >
                  Live
                </a>
              ) : (
                <span className={styles.noLink}></span>
              )}
              {/* Check if sourceLink is available */}
              {project.sourceLink ? (
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceLink}
                >
                  Source
                </a>
              ) : (
                <span className={styles.noLink}></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;









// import React, { useState } from "react";
// import { gsap } from "gsap";
// import projectsData from "./projectData"; // Updated data
// import styles from "../StyleSheet/Projects.module.css";

// const Projects = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredProjects = projectsData.filter((project) => {
//     if (filter === "All") return true;
//     return project.category === filter;
//   });

//   React.useEffect(() => {
//     gsap.fromTo(
//       `.${styles.projectsHeading}`,
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.5, scrollTrigger: `.${styles.projectsHeading}` }
//     );
//   }, []);

//   return (
//     <section id="projects" className={styles.projectsSection}>
//       <h2 className={styles.projectsHeading}>Projects</h2>

//       {/* Buttons for filtering */}
//       <div className={styles.filterButtons}>
//         <button
//           onClick={() => setFilter("All")}
//           className={filter === "All" ? styles.active : ""}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilter("Front-End")}
//           className={filter === "Front-End" ? styles.active : ""}
//         >
//           Front-End
//         </button>
//         <button
//           onClick={() => setFilter("Full-Stack")}
//           className={filter === "Full-Stack" ? styles.active : ""}
//         >
//           Full-Stack
//         </button>
//       </div>

//       {/* Projects rendering */}
//       <div className={styles.projectsContainer}>
//         {filteredProjects.map((project, index) => (
//           <div key={index} className={styles.projectCard}>
//             <img
//               src={project.image}
//               alt={`${project.title} thumbnail`}
//               className={styles.projectImage}
//             />
//             <h6 className={styles.subTitle}>{project.title}</h6>
//             <p className={styles.paragraph}>{project.description}</p>
//             <div className={styles.projectStack}>
//               {project.stack.map((tech, idx) => (
//                 <span key={idx} className={styles.techBadge}>
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className={styles.projectLinks}>
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.liveLink}
//               >
//                 Live
//               </a>
//               <a
//                 href={project.sourceLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.sourceLink}
//               >
//                 Source
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
