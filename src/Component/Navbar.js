import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const sections = [
    "home",
    "about",
    "services",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#23272b" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "center" }, // 👈 Mobile: space-between | Desktop: center
            alignItems: "center",
            paddingLeft: "0px",
            height: "50px",
          }}
        >
          {/* Navbar Brand (Logo) */}
          <Typography
            variant="h6"
            component={ScrollLink}
            to="home"
            smooth={true}
            duration={500}
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <img
              src="/Images/logo2.svg"
              alt="Logo"
              style={{ height: "80px", verticalAlign: "middle" }}
            />
          </Typography>

          {/* Links for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                component={ScrollLink}
                to={section}
                smooth={true}
                duration={500}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#8750F7",
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu for smaller screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" }, // 👈 sirf mobile par visible
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 200,
            backgroundColor: "#121212",
            height: "100%",
            color: "white",
          }}
        >
          <Box
            sx={{
              padding: "20px 16px",
              textAlign: "left",
            }}
          >
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                component={ScrollLink}
                to={section}
                smooth={true}
                duration={500}
                sx={{
                  width: "100%",
                  padding: "12px 0",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  cursor: "pointer",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
                onClick={toggleDrawer(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;



















// import React, { useState } from "react";
// import { AppBar, Toolbar, IconButton, Button, Drawer, Box, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setIsDrawerOpen(open);
//   };

//   const sections = ["home", "about", "services", "skills", "projects", "contact"];

//   return (
//     <>
//       {/* AppBar */}
//       <AppBar position="fixed" sx={{ backgroundColor: "#23272b" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "50px", paddingLeft: "0px", height: "50px" }}>


//           {/* Navbar Brand (Logo) */}
//           <Typography
//             variant="h6"
//             component={ScrollLink}
//             to="home"
//             smooth={true}
//             duration={500}
//             sx={{
//               cursor: "pointer",
//               fontWeight: "bold",
//               // paddingRight: 15
//               // display: "flex",
//               // alignItems: "center",
//             }}
//           >
//             <img
//               src="/Images/logo2.svg"
//               alt="Logo"
//               style={{ height: "80px", verticalAlign: "middle" }}
//             />
//           </Typography>

//           {/* Links for larger screens */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, paddingRight: "300px" }}>
//             {sections.map((section) => (
//               <Button
//                 key={section}
//                 color="inherit"
//                 component={ScrollLink}
//                 to={section}
//                 smooth={true}
//                 duration={500}
//                 sx={{
//                   textTransform: "capitalize",
//                   fontSize: "1.25rem",
//                   cursor: "pointer",
//                   "&:hover": {
//                     // backgroundColor: "#555555", // Jab hover karein, background color change
//                     color: "#8750F7",          // Aur text ka color bhi
//                   },
//                 }}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </Button>
//             ))}
//           </Box>



//           {/* Hamburger Menu for smaller screens */}
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//             sx={{
//               // paddingLeft: 23
//               display: { xs: "block", md: "none" }, // Hamburger sirf small screens ke liye visible hoga
//               // position: "static", // Layout fix ke liye
//               // zIndex: 1400, // Upar layne ke liye
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>


//       {/* Drawer for Mobile */}
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//       >
//         <Box
//           sx={{
//             width: 200,
//             backgroundColor: "#121212",
//             height: "100%",
//             color: "white",
//           }}
//         >
//           <Box
//             sx={{
//               padding: "20px 16px", // Uniform padding
//               textAlign: "left",
//             }}
//           >
//             {sections.map((section) => (
//               <Button
//                 key={section}
//                 color="inherit"
//                 component={ScrollLink}
//                 to={section}
//                 smooth={true}
//                 duration={500}
//                 sx={{
//                   width: "100%",
//                   padding: "12px 0",
//                   textTransform: "capitalize",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   justifyContent: "flex-start", // Align text to left within button
//                   textAlign: "left",
//                 }}
//                 onClick={toggleDrawer(false)}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </Button>
//             ))}
//           </Box>
//         </Box>
//       </Drawer>




//     </>
//   );
// };

// export default Navbar;

