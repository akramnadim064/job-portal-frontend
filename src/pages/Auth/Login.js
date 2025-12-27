//login page with ui best

// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Alert,
//   IconButton,
//   InputAdornment,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import API from "../../api/api";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await API.post("/auth/login", { email, password });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       if (res.data.role === "employer") {
//         navigate("/employer/dashboard");
//       } else if (res.data.role === "jobseeker") {
//         navigate("/jobseeker/dashboard");
//       }

//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
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
//         {/* LEFT SIDE — FORM */}
//         <Box sx={{ width: "50%", pr: 4 }}>
//           <Typography variant="h4" fontWeight="bold">
//             Login to your Account
//           </Typography>
//           <Typography sx={{ mb: 3, color: "gray" }}>
//             Welcome back!
//           </Typography>

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           <form onSubmit={handleLogin}>
//             <TextField
//               label="Email ID / Username"
//               fullWidth
//               sx={{ mb: 3 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <TextField
//               label="Password"
//               fullWidth
//               type={showPass ? "text" : "password"}
//               sx={{ mb: 1 }}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPass(!showPass)}>
//                       {showPass ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 mb: 2,
//                 mt: 1,
//               }}
//             >
//               <FormControlLabel
//                 control={<Checkbox size="small" />}
//                 label="Remember me"
//               />

//               <Typography
//                 sx={{
//                   color: "#6C63FF",
//                   fontSize: 14,
//                   cursor: "pointer",
//                 }}
//               >
//                 Forgot Password?
//               </Typography>
//             </Box>

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
//               Login
//             </Button>
//           </form>

//           {/* Social Login */}
//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             <Typography sx={{ mb: 1, color: "gray" }}>or login with</Typography>

//             <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
//                 width={35}
//                 style={{ cursor: "pointer" }}
//               />
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
//                 width={35}
//                 style={{ cursor: "pointer" }}
//               />
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
//                 width={35}
//                 style={{ cursor: "pointer" }}
//               />
//             </Box>
//           </Box>

//           {/* Register Link */}
//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             <Typography sx={{ fontSize: 14 }}>
//               Don’t have an account?{" "}
//               <span
//                 style={{
//                   color: "#6C63FF",
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                 }}
//                 onClick={() => navigate("/register")}
//               >
//                 Register
//               </span>
//             </Typography>
//           </Box>
//         </Box>

//         {/* RIGHT SIDE — IMAGE */}
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
//             alt="login illustration"
//             style={{ width: "90%", maxWidth: 380 }}
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
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 🔒 REQUIRED FIELDS
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // 🔒 EMAIL VALIDATION
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // 🔒 PASSWORD LENGTH CHECK
    if (password.length < 8) {
      setError("Invalid email or password");
      return;
    }

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "employer") {
        navigate("/employer/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
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
        {/* LEFT SIDE — FORM */}
        <Box sx={{ width: "50%", pr: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Login to your Account
          </Typography>

          <Typography sx={{ mb: 3, color: "gray" }}>
            Welcome back!
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email Address"
              fullWidth
              sx={{ mb: 3 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              fullWidth
              type={showPass ? "text" : "password"}
              sx={{ mb: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                mt: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me"
              />

              <Typography
                sx={{
                  color: "#6C63FF",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

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
              Login
            </Button>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography sx={{ fontSize: 14 }}>
              Don’t have an account?{" "}
              <span
                style={{
                  color: "#6C63FF",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE — IMAGE */}
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
            alt="login illustration"
            style={{ width: "90%", maxWidth: 380 }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
