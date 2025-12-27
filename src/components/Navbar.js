
















//changed on 25th dec


// //above is Original without logo
// //Below is with logo
// import React from "react";
// import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role")?.toLowerCase();





//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: "#0A1A4A" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

//         {/* LOGO + BRAND NAME */}
//         <Box
//           component={Link}
//           to="/"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1.2,
//             textDecoration: "none",
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="HIRENZE Logo"
//             style={{
//               height: "36px",
//               objectFit: "contain",
//             }}
//           />
//           <Typography
//             sx={{
//               fontSize: "20px",
//               fontWeight: 700,
//               color: "#fff",
//               letterSpacing: "1px",
//             }}
//           >
//             HIRENZE
//           </Typography>
//         </Box>

//         {/* RIGHT MENU */}
//         <Box sx={{ display: "flex", gap: 2 }}>

//           {!token && (
//             <>
//               <Button color="inherit" component={Link} to="/jobs">
//                 Jobs
//               </Button>
//               <Button color="inherit" component={Link} to="/login">
//                 Login
//               </Button>
//               <Button color="inherit" component={Link} to="/register">
//                 Register
//               </Button>
//             </>
//           )}

//           {token && role === "employer" && (
//             <>
//               <Button color="inherit" component={Link} to="/employer/dashboard">
//                 Dashboard
//               </Button>
//               <Button color="inherit" component={Link} to="/employer/post-job">
//                 Post Job
//               </Button>
//               <Button color="inherit" component={Link} to="/employer/applicants">
//                 Applicants
//               </Button>
//               <Button color="inherit" onClick={logout}>
//                 Logout
//               </Button>
//             </>
//           )}

//           {token && (role === "jobseeker" || role === "job seeker") && (
//             <>


//               <Button color="inherit" component={Link} to="/jobseeker/dashboard">
//                 Dashboard
//               </Button>
//               <Button color="inherit" component={Link} to="/jobs">
//                 Jobs
//               </Button>
//               <Button color="inherit" onClick={logout}>
//                 Logout
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
















import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")?.toLowerCase();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#0A1A4A" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            textDecoration: "none",
          }}
        >
          <img src="/logo.png" alt="logo" height={36} />
          <Typography sx={{ color: "#fff", fontWeight: 700 }}>
            HIRENZE
          </Typography>
        </Box>

        {/* RIGHT MENU */}
        <Box sx={{ display: "flex", gap: 2 }}>

          {/* ❌ NOT LOGGED IN */}
          {!token && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}

          {/* 👤 JOBSEEKER */}
          {token && role === "jobseeker" && (
            <>
              <Button color="inherit" component={Link} to="/jobseeker/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/jobs">
                Jobs
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}

          {/* 🏢 EMPLOYER */}
          {token && role === "employer" && (
            <>
              <Button color="inherit" component={Link} to="/employer/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/employer/post-job">
                Post Job
              </Button>
              <Button color="inherit" component={Link} to="/employer/applicants">
                Applicants
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
