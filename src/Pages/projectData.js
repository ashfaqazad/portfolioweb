const projectsData = [
  {
    title: "Portfolio",
    description: "Explore my portfolio, a showcase of my web development expertise. Built with React.js, it features dynamic animations powered by GSAP, seamless scrolling with Lenis, and interactive carousels using SwiperJS",
    image: "/Images/portfolio1.PNG",
    stack: ["React", "CSS Modules"],
    category: "Front-End", // Category added
    liveLink: "https://ashfaqdev.bedarimillat.com/",
    // sourceLink: "https://github.com/username/portfolio",
  },

  {
    title: "A Seamless WordPress Experience",
    description:
      <p>
        I am excited to share my WordPress project,
        accessible at {""}

        <a href="https://www.bedarimillat.com" target="_blank" rel="noopener noreferrer">
          www.bedarimillat.com</a>
        WordPress, a popular CMS, allowed me to customize a template for a responsive,
        SEO-optimized, and user-friendly website. The site features intuitive navigation,
        a blog section, interactive forms, and scalability for future enhancements. I ensured
        security, fast loading, and professional design, showcasing my expertise in WordPress
        tools like theme customization, plugin integration, and performance optimization. This
        project reflects my ability to create engaging platforms that meet specific needs. Explore
        the site and share your feedback!
      </p>
    ,
    stack: ["WordPress", "Theme Customization", "Plugin Integration"],
    category: "Front-End", // Category added
    liveLink: "https://www.bedarimillat.com",
    // sourceLink: "#", // Add source link if applicable
    image: "/Images/bedari1.PNG", // Replace with actual image URL
  },


  {
    title: "Client Portfolio Website (React.js)",
    description: "A real-world client project developed using React.js, built for a Google Business Expert to showcase their professional profile and services. This fully responsive frontend website was designed, developed, deployed on a custom domain, and successfully indexed by Google. The project includes SEO optimization, smooth user experience, and a clean, professional design — demonstrating end-to-end frontend project delivery in a real business context.",
    image: "/Images/RameezPort.png",
    stack: ["React", "CSS Modules"],
    category: "Front-End", // Category added
    liveLink: "https://rameezbabar.com/",
    // sourceLink: "https://github.com/username/portfolio",
  },

  // {
  //   title: "Little Lemon - Table Booking & Online Ordering Application",
  //   description:
  //     "Experience seamless dining with Little Lemon, our comprehensive table booking and online ordering application. Designed with React.js to enhance customer convenience.",
  //   stack: ["React.js"],
  //   category: "Front-End", // Category added
  //   liveLink: "https://www.little-lemon.bedarimillat.com",
  //   // sourceLink: "#",
  //   image: "/Images/little-lemon.png", // Replace with actual image URL
  // },



  // Explore the FastFood project — a modern full-stack web application built with Next.js to deliver a fast, dynamic, and SEO-friendly user experience. The frontend leverages Server Components, App Router, and optimized image handling for performance, while MongoDB ensures reliable data storage and scalability. The UI is styled using Material-UI (MUI) with smooth interactions and responsive design. Key features include a dynamic shopping cart with Context API and JWT-based authentication, creating a seamless and secure user journey.


  {
    title: "SnackStation",
    description:
      "Explore the FastFood project — a modern full-stack web application built with Next.js to deliver a fast, dynamic, and SEO-friendly user experience. The frontend leverages Server Components, App Router, and optimized image handling for performance, while MongoDB ensures reliable data storage and scalability. The UI is styled using Material-UI (MUI) with smooth interactions and responsive design. Key features include a dynamic shopping cart with Context API and JWT-based authentication, creating a seamless and secure user journey.",
    stack: ["Next.js", "MongoDB", "MUI", "Context API", "JWT"],
    category: "Full-Stack",
    liveLink: "https://foodhub-next-eight.vercel.app/",
    // sourceLink: "",
    image: "/Images/FastFoodHub2.png",
  },

  {
    title: "Ecommerce",
    description:
"Discover the Ecommerce project — a full-stack web application built entirely with Next.js, delivering a fast, scalable, and seamless online shopping experience. Both the frontend and backend are powered by Next.js, leveraging the App Router, API routes, and server-side rendering for optimal performance and maintainability. The UI is crafted using Material-UI (MUI), offering a clean and user-friendly design. MongoDB ensures efficient and scalable data storage for products and users. Dynamic product showcases and interactive carousels enhance the user experience, making the platform engaging and intuitive across all devices.",
    stack: ["Next.js", "MongoDB", "MUI", "Context API", "JWT"],
    category: "Full-Stack",
    liveLink: "https://ecommercehub-tau.vercel.app/",
    sourceLink: "",
    image: "/Images/EcomHub.png",
  },
  
  {
    title: "FastFood",
    description:
      "FastFood is a full-stack web application made to give users a smooth and enjoyable food ordering experience. The frontend is built using React.js, with smooth scrolling effects added using Lenis. The backend is developed with Node.js and Express.js, which handles all server work reliably. MongoDB is used to store and manage the data. The app is fast, easy to use, and can handle many users. It also includes a product carousel using SwiperJS to make browsing items more fun and interactive.",
    stack: ["React.js", "Express.js", "MongoDB", "MUI", "Context API", "JWT"],
    category: "Full-Stack",
    liveLink: "",
    sourceLink: "",
    image: "/Images/fastfood.png",
  },

  // {
  //   title: "Ecommerce",
  //   description:
  //     "Ecommerce This is a full-stack web application made to give users a smooth and easy online shopping experience. The frontend is built with React.js, using Lenis for smooth scrolling and a clean, user-friendly design. The backend uses Node.js and Express.js to safely and quickly handle user requests. All product and user data is managed in MongoDB, which makes the app reliable and scalable. SwiperJS is used for interactive carousels and product displays, making browsing more engaging and fun.",
  //   stack: ["React.js", "Express.js", "MongoDB", "MUI", "Context API", "JWT"],
  //   category: "Full-Stack",
  //   // liveLink: "https://final-online-ecom-hub.vercel.app/",
  //   liveLink: "https://ecommercehub-tau.vercel.app/",

  //   sourceLink: "",
  //   image: "/Images/Ecommerce.png",
  // },

  {
  title: "Freelance Services Website",
  description:
    "This is a modern and responsive freelance services portfolio website built with Next.js. It showcases the developer’s expertise, offered services (like website development, portfolio creation, admin panels), and contact options in a clean, animated interface. Smooth scroll effects and engaging transitions are implemented using GSAP, giving the site a professional and interactive feel. It's designed to attract potential clients and display the developer's skills effectively.",
  stack: ["Next.js", "GSAP", "Tailwind CSS"],
  category: "Front-End",
  liveLink: "https://azad-dev-x9xh.vercel.app/",
  sourceLink: "", // (add GitHub repo link here if available)
  image: "/Images/AzadDevImg.png" // (update image path if needed)
},

{
  title: "Full-Stack Admin Dashboard with User, Product & Order Management",
  description:
    "This is a full-stack, responsive Admin Dashboard built with Next.js. It provides complete backend and frontend functionality for managing freelance service data, including users, orders, products, and analytics. The dashboard is protected via authentication and offers a modern UI with a clean layout and intuitive navigation. MongoDB is used for data management, and role-based access ensures secure usage.\n\nThe project demonstrates advanced skills in dashboard architecture, data integration, secure routes, and modern UI design—making it ideal for client work and business use-cases.",
  stack: ["Next.js", "MongoDB", "JWT Auth", "MUI"],
  category: "Full-Stack",
  liveLink: "https://admin-panel-jade-seven.vercel.app/", // 🔁 Replace with your actual Admin Panel live URL
  sourceLink: "", // 🔁 Add GitHub repo if public
  image: "/Images/Dashpage.png" // ✅ Update path if needed
},

  {
  title: "Huda Trading Japan – Car Export Website",
  description:
    "A full-stack car trading platform built with React and Strapi, enabling users to browse and purchase vehicles directly from Japan. The site features dynamic car listings, image previews, and real-time content management powered by Strapi CMS and PostgreSQL. It also includes WhatsApp integration for direct communication and a responsive UI optimized for both desktop and mobile.\n\nThis project highlights strong skills in frontend development, backend integration, and database management—ideal for international trade or e-commerce solutions.",
  stack: ["React", "Strapi", "PostgreSQL", "Tailwind CSS"],
  category: "Full-Stack",
  liveLink: "https://huda-trading.vercel.app/en",
  sourceLink: "", // 🔁 Add your GitHub repo if public
  image: "/Images/hudatrade.png" // ✅ Update the image path
}





];

export default projectsData;


