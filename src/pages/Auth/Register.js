
// // code with modern UI design
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Alert,
//   MenuItem,
// } from "@mui/material";
// import API from "../../api/api";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [role, setRole] = useState("jobseeker");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess(false);

//     try {
//       await API.post("/auth/register", {
//         name,
//         email,
//         password,
//         role,
//       });

//       setSuccess(true);

//       setTimeout(() => {
//         navigate("/login");
//       }, 1200);
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f2f4ff",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         p: 2,
//       }}
//     >
//       <Paper
//         sx={{
//           p: 4,
//           borderRadius: 4,
//           width: "100%",
//           maxWidth: 900,
//           display: "flex",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//         }}
//       >
//         {/* LEFT — FORM SECTION */}
//         <Box sx={{ width: "50%", pr: 4 }}>
//           <Typography variant="h4" fontWeight="bold">
//             Create your Account
//           </Typography>

//           <Typography sx={{ mb: 3, color: "gray" }}>
//             Join thousands of employers and job seekers today.
//           </Typography>

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           {success && (
//             <Alert severity="success" sx={{ mb: 2 }}>
//               Registration successful! Redirecting…
//             </Alert>
//           )}

//           <form onSubmit={handleRegister}>
//             <TextField
//               label="Full Name"
//               fullWidth
//               sx={{ mb: 2 }}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <TextField
//               label="Email Address"
//               type="email"
//               fullWidth
//               sx={{ mb: 2 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               sx={{ mb: 2 }}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <TextField
//               label="Select Role"
//               select
//               fullWidth
//               value={role}
//               sx={{ mb: 3 }}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <MenuItem value="jobseeker">Job Seeker</MenuItem>
//               <MenuItem value="employer">Employer</MenuItem>
//             </TextField>

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 py: 1.2,
//                 borderRadius: 2,
//                 background: "#6C63FF",
//                 fontWeight: "bold",
//                 textTransform: "none",
//                 ":hover": { background: "#5a52e1" },
//               }}
//             >
//               Register
//             </Button>
//           </form>

//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             <Typography sx={{ fontSize: 14 }}>
//               Already have an account?{" "}
//               <span
//                 style={{
//                   color: "#6C63FF",
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                 }}
//                 onClick={() => navigate("/login")}
//               >
//                 Login
//               </span>
//             </Typography>
//           </Box>
//         </Box>

//         {/* RIGHT — IMAGE SECTION */}
//         <Box
//           sx={{
//             width: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src="/image.png"
//             alt="register illustration"
//             style={{
//               width: "90%",
//               maxWidth: 380,
//             }}
//           />
//         </Box>
//       </Paper>
//     </Box>
//   );
// }





















import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  MenuItem,
} from "@mui/material";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // 🔒 REQUIRED FIELDS
    if (!name || !email || !password || !role) {
      setError("All fields are required");
      return;
    }

    // 🔒 EMAIL VALIDATION
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // 🔒 PASSWORD VALIDATION
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and contain one special character"
      );
      return;
    }

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f2f4ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 900,
          display: "flex",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        {/* LEFT — FORM */}
        <Box sx={{ width: "50%", pr: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Create your Account
          </Typography>

          <Typography sx={{ mb: 3, color: "gray" }}>
            Join thousands of employers and job seekers today.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Registration successful! Redirecting…
            </Alert>
          )}

          <form onSubmit={handleRegister}>
            <TextField
              label="Full Name"
              fullWidth
              sx={{ mb: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Email Address"
              fullWidth
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Min 8 characters & 1 special character"
            />

            <TextField
              label="Select Role"
              select
              fullWidth
              value={role}
              sx={{ mb: 3 }}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="jobseeker">Job Seeker</MenuItem>
              <MenuItem value="employer">Employer</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.2,
                borderRadius: 2,
                background: "#6C63FF",
                fontWeight: "bold",
                textTransform: "none",
                ":hover": { background: "#5a52e1" },
              }}
            >
              Register
            </Button>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography sx={{ fontSize: 14 }}>
              Already have an account?{" "}
              <span
                style={{
                  color: "#6C63FF",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </Typography>
          </Box>
        </Box>

        {/* RIGHT — IMAGE */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/image.png"
            alt="register illustration"
            style={{ width: "90%", maxWidth: 380 }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
