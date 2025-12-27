// // // export default function PostJob() {
// // //   return (
// // //     <div>
// // //       <h2>Post a New Job</h2>
// // //     </div>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import { Box, TextField, Button, Paper, Typography } from "@mui/material";
// // import axios from "../../api/api";

// // export default function PostJob() {
// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     location: "",
// //     jobType: "",
// //     companyName: ""
// //   });

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   const submit = async () => {
// //     try {
// //       const token = localStorage.getItem("token");

// //       await axios.post("/jobs", form, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });

// //       alert("Job Posted Successfully");
// //       window.location.href = "/employer/dashboard";

// //     } catch (e) {
// //       alert("Failed to post job");
// //     }
// //   };

// //   return (
// //     <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
// //       <Paper sx={{ width: 500, p: 4 }}>
// //         <Typography variant="h5">Post a New Job</Typography>

// //         {[
// //           "title",
// //           "description",
// //           "location",
// //           "jobType",
// //           "companyName"
// //         ].map((field) => (
// //           <TextField
// //             key={field}
// //             fullWidth
// //             name={field}
// //             label={field.toUpperCase()}
// //             sx={{ mt: 2 }}
// //             value={form[field]}
// //             onChange={handleChange}
// //           />
// //         ))}

// //         <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={submit}>
// //           Post Job
// //         </Button>
// //       </Paper>
// //     </Box>
// //   );
// // }




// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   MenuItem,
// //   Button,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Divider,
// //   Alert,
// // } from "@mui/material";
// // import API from "../../api/api";

// // export default function PostJob() {
// //   const [employer, setEmployer] = useState(null);

// //   const [formData, setFormData] = useState({
// //     title: "",
// //     company: "",
// //     location: "",
// //     type: "",
// //     salary: "",
// //     description: "",
// //     skills: "",
// //   });

// //   const [previewOpen, setPreviewOpen] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   // Auto-fill employer/company details
// //   useEffect(() => {
// //     const fetchEmployer = async () => {
// //       try {
// //         const res = await API.get("/auth/me");
// //         setEmployer(res.data);

// //         setFormData((prev) => ({
// //           ...prev,
// //           company: res.data.name || "",
// //         }));
// //       } catch (err) {
// //         console.log("Failed to fetch employer:", err);
// //       }
// //     };
// //     fetchEmployer();
// //   }, []);

// //   // Handle form change
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Submit job to backend
// //   const handleSubmitJob = async () => {
// //     setError("");
// //     setSuccess("");

// //     try {
// //       const payload = {
// //         ...formData,
// //         skills: formData.skills.split(",").map((s) => s.trim()),
// //       };

// //       await API.post("/jobs", payload);
// //       setSuccess("Job posted successfully!");
// //       setPreviewOpen(false);

// //       setTimeout(() => {
// //         window.location.href = "/employer/dashboard";
// //       }, 1200);
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Failed to post job");
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         p: 4,
// //         background: "#f4f6fa",
// //         display: "flex",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <Paper sx={{ p: 4, width: "100%", maxWidth: 700, borderRadius: 4 }}>
// //         <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
// //           Post a New Job
// //         </Typography>

// //         <Typography sx={{ mb: 3, color: "gray" }}>
// //           Fill out the details below to create your job posting.
// //         </Typography>

// //         {error && (
// //           <Alert severity="error" sx={{ mb: 2 }}>
// //             {error}
// //           </Alert>
// //         )}

// //         {success && (
// //           <Alert severity="success" sx={{ mb: 2 }}>
// //             {success}
// //           </Alert>
// //         )}

// //         {/* Job Form */}
// //         <TextField
// //           label="Job Title"
// //           name="title"
// //           value={formData.title}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         />

// //         <TextField
// //           label="Company Name"
// //           name="company"
// //           value={formData.company}
// //           disabled
// //           helperText="Auto-filled from employer profile"
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         />

// //         <TextField
// //           label="Location"
// //           name="location"
// //           value={formData.location}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         />

// //         <TextField
// //           label="Job Type"
// //           name="type"
// //           value={formData.type}
// //           onChange={handleChange}
// //           select
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         >
// //           <MenuItem value="Full-Time">Full-Time</MenuItem>
// //           <MenuItem value="Part-Time">Part-Time</MenuItem>
// //           <MenuItem value="Internship">Internship</MenuItem>
// //           <MenuItem value="Remote">Remote</MenuItem>
// //         </TextField>

// //         <TextField
// //           label="Salary (optional)"
// //           name="salary"
// //           value={formData.salary}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         />

// //         <TextField
// //           label="Required Skills (comma separated)"
// //           name="skills"
// //           value={formData.skills}
// //           onChange={handleChange}
// //           placeholder="React, Node.js, MongoDB"
// //           sx={{ mb: 2 }}
// //           fullWidth
// //         />

// //         <TextField
// //           label="Job Description"
// //           multiline
// //           rows={4}
// //           name="description"
// //           value={formData.description}
// //           onChange={handleChange}
// //           sx={{ mb: 3 }}
// //           fullWidth
// //         />

// //         <Button
// //           variant="contained"
// //           sx={{
// //             py: 1.3,
// //             width: "100%",
// //             backgroundColor: "#0d47a1",
// //             borderRadius: 2,
// //             ":hover": { backgroundColor: "#093170" },
// //           }}
// //           onClick={() => setPreviewOpen(true)}
// //         >
// //           Preview Job
// //         </Button>

// //         {/* Preview Modal */}
// //         <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} fullWidth maxWidth="md">
// //           <DialogTitle>
// //             <Typography variant="h5" fontWeight="bold">
// //               Preview Job Posting
// //             </Typography>
// //           </DialogTitle>

// //           <DialogContent dividers>
// //             <Typography variant="h6">{formData.title}</Typography>
// //             <Typography color="gray">{formData.company}</Typography>

// //             <Divider sx={{ my: 2 }} />

// //             <Typography>
// //               <strong>Location:</strong> {formData.location}
// //             </Typography>

// //             <Typography>
// //               <strong>Job Type:</strong> {formData.type}
// //             </Typography>

// //             <Typography sx={{ mt: 1 }}>
// //               <strong>Salary:</strong> {formData.salary || "Not provided"}
// //             </Typography>

// //             <Typography sx={{ mt: 2 }}>
// //               <strong>Skills:</strong> {formData.skills}
// //             </Typography>

// //             <Typography sx={{ mt: 3, whiteSpace: "pre-line" }}>
// //               <strong>Description:</strong>  
// //               <br />{formData.description}
// //             </Typography>
// //           </DialogContent>

// //           <DialogActions sx={{ p: 2 }}>
// //             <Button onClick={() => setPreviewOpen(false)} color="error">
// //               Cancel
// //             </Button>
// //             <Button onClick={handleSubmitJob} variant="contained" color="primary">
// //               Post Job
// //             </Button>
// //           </DialogActions>
// //         </Dialog>
// //       </Paper>
// //     </Box>
// //   );
// // }







// // Normal job posting page


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Divider,
//   Alert,
// } from "@mui/material";
// import API from "../../api/api";

// export default function PostJob() {
//   const [employer, setEmployer] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     company: "",
//     location: "",
//     jobType: "",   // UPDATED
//     salary: "",
//     description: "",
//     skills: "",
//   });

//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Fetch Employer
//   useEffect(() => {
//     const fetchEmployer = async () => {
//       try {
//         const res = await API.get("/auth/me");
//         setEmployer(res.data);

//         setFormData((prev) => ({
//           ...prev,
//           company: res.data.name || "",
//         }));
//       } catch (err) {
//         console.log("Employer fetch failed:", err);
//       }
//     };
//     fetchEmployer();
//   }, []);

//   // Input Handler
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit Job
//   const handleSubmitJob = async () => {
//     setError("");
//     setSuccess("");

//     try {
//       const payload = {
//         ...formData,
//         skills: formData.skills.split(",").map((s) => s.trim()),
//       };

//       await API.post("/jobs", payload);

//       setSuccess("Job posted successfully!");
//       setPreviewOpen(false);

//       setTimeout(() => {
//         window.location.href = "/employer/dashboard";
//       }, 1000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to post job");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         p: 4,
//         background: "#f4f6fa",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Paper sx={{ p: 4, width: "100%", maxWidth: 700, borderRadius: 4 }}>
//         <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
//           Post a New Job
//         </Typography>

//         <Typography sx={{ mb: 3, color: "gray" }}>
//           Fill out the details below to create your job posting.
//         </Typography>

//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

//         {/* Form Fields */}
//         <TextField
//           label="Job Title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         <TextField
//           label="Company Name"
//           name="company"
//           value={formData.company}
//           disabled
//           helperText="Auto-filled from employer profile"
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         <TextField
//           label="Location"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         {/* MANUAL JOB TYPE INPUT */}
//         <TextField
//           label="Job Type (example: Full-time, Part-time, Remote)"
//           name="jobType"
//           value={formData.jobType}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         <TextField
//           label="Salary (optional)"
//           name="salary"
//           value={formData.salary}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         <TextField
//           label="Required Skills (comma separated)"
//           name="skills"
//           value={formData.skills}
//           onChange={handleChange}
//           placeholder="React, Node.js, MongoDB"
//           sx={{ mb: 2 }}
//           fullWidth
//         />

//         <TextField
//           label="Job Description"
//           multiline
//           rows={4}
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           sx={{ mb: 3 }}
//           fullWidth
//         />

//         <Button
//           variant="contained"
//           sx={{
//             py: 1.3,
//             width: "100%",
//             backgroundColor: "#0d47a1",
//             borderRadius: 2,
//             ":hover": { backgroundColor: "#093170" },
//           }}
//           onClick={() => setPreviewOpen(true)}
//         >
//           Preview Job
//         </Button>

//         {/* PREVIEW MODAL */}
//         <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} fullWidth maxWidth="md">
//           <DialogTitle>
//             <Typography variant="h5" fontWeight="bold">Preview Job Posting</Typography>
//           </DialogTitle>

//           <DialogContent dividers>
//             <Typography variant="h6">{formData.title}</Typography>
//             <Typography color="gray">{formData.company}</Typography>

//             <Divider sx={{ my: 2 }} />

//             <Typography><strong>Location:</strong> {formData.location}</Typography>
//             <Typography><strong>Job Type:</strong> {formData.jobType}</Typography>
//             <Typography sx={{ mt: 1 }}><strong>Salary:</strong> {formData.salary || "Not provided"}</Typography>

//             <Typography sx={{ mt: 2 }}>
//               <strong>Skills:</strong> {formData.skills}
//             </Typography>

//             <Typography sx={{ mt: 3, whiteSpace: "pre-line" }}>
//               <strong>Description:</strong>
//               <br /> {formData.description}
//             </Typography>
//           </DialogContent>

//           <DialogActions sx={{ p: 2 }}>
//             <Button onClick={() => setPreviewOpen(false)} color="error">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmitJob} variant="contained" color="primary">
//               Post Job
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Paper>
//     </Box>
//   );
// }





// // updated theme
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Alert,
//   Switch,
// } from "@mui/material";
// import API from "../../api/api";

// export default function PostJob() {
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("empDarkMode") === "true"
//   );

//   const colors = darkMode
//     ? {
//         bg: "#0B1220",
//         card: "#111827",
//         text: "#E5E7EB",
//         textSoft: "#9CA3AF",
//         input: "#1F2937",
//         border: "#374151",
//       }
//     : {
//         bg: "#F3F4F6",
//         card: "#FFFFFF",
//         text: "#111827",
//         textSoft: "#6B7280",
//         input: "#ffffff",
//         border: "#E5E7EB",
//       };

//   const [formData, setFormData] = useState({
//     title: "",
//     company: "",
//     location: "",
//     type: "", // 🔥 Now manual input
//     salary: "",
//     description: "",
//     skills: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmitJob = async () => {
//     setError("");
//     setSuccess("");

//     try {
//       const payload = {
//         ...formData,
//         skills: formData.skills.split(",").map((s) => s.trim()),
//       };

//       await API.post("/jobs", payload);
//       setSuccess("Job posted successfully!");

//       setTimeout(() => {
//         window.location.href = "/employer/dashboard";
//       }, 1000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to post job");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor: colors.bg,
//         p: 4,
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Paper
//         sx={{
//           width: "100%",
//           maxWidth: 700,
//           p: 4,
//           borderRadius: 3,
//           bgcolor: colors.card,
//           color: colors.text,
//           border: `1px solid ${colors.border}`,
//         }}
//       >
//         {/* HEADER */}
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h5" fontWeight="bold">
//             Post a New Job
//           </Typography>

//           {/* Dark Mode Switch */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <Typography variant="body2" color={colors.textSoft}>
//               Theme
//             </Typography>
//             <Switch
//               checked={darkMode}
//               onChange={() => {
//                 const next = !darkMode;
//                 setDarkMode(next);
//                 localStorage.setItem("empDarkMode", String(next));
//               }}
//             />
//           </Box>
//         </Box>

//         <Typography sx={{ mt: 1, mb: 3, color: colors.textSoft }}>
//           Fill out the details below to create your job posting.
//         </Typography>

//         {/* ERRORS */}
//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}
//         {success && (
//           <Alert severity="success" sx={{ mb: 2 }}>
//             {success}
//           </Alert>
//         )}

//         {/* INPUT FIELDS */}
//         {[
//           { label: "Job Title", name: "title" },
//           { label: "Company Name", name: "company" },
//           { label: "Location", name: "location" },
//           { label: "Job Type (example: Full-time, Remote, On-site)", name: "type" }, // 🔥 Manual now
//           { label: "Salary (optional)", name: "salary" },
//           { label: "Required Skills (comma separated)", name: "skills" },
//         ].map((field) => (
//           <TextField
//             key={field.name}
//             label={field.label}
//             name={field.name}
//             value={formData[field.name]}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//             InputLabelProps={{
//               sx: { color: colors.textSoft },
//             }}
//             InputProps={{
//               sx: {
//                 bgcolor: colors.input,
//                 borderRadius: 2,
//                 color: colors.text,
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: colors.border,
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: colors.textSoft,
//                 },
//               },
//             }}
//           />
//         ))}

//         {/* DESCRIPTION */}
//         <TextField
//           label="Job Description"
//           name="description"
//           multiline
//           rows={4}
//           value={formData.description}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 3 }}
//           InputLabelProps={{
//             sx: { color: colors.textSoft },
//           }}
//           InputProps={{
//             sx: {
//               bgcolor: colors.input,
//               borderRadius: 2,
//               color: colors.text,
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderColor: colors.border,
//               },
//             },
//           }}
//         />

//         {/* BUTTON */}
//         <Button
//           fullWidth
//           variant="contained"
//           onClick={handleSubmitJob}
//           sx={{
//             py: 1.3,
//             bgcolor: "#6C63FF",
//             textTransform: "none",
//             borderRadius: 2,
//             ":hover": { bgcolor: "#5a54e3" },
//           }}
//         >
//           Post Job
//         </Button>
//       </Paper>
//     </Box>
//   );
// }







import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Switch,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/api";

export default function PostJob() {
  const navigate = useNavigate();
  const { jobId } = useParams(); // ✅ used for EDIT

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("empDarkMode") === "true"
  );

  const colors = darkMode
    ? {
        bg: "#0B1220",
        card: "#111827",
        text: "#E5E7EB",
        textSoft: "#9CA3AF",
        input: "#1F2937",
        border: "#374151",
      }
    : {
        bg: "#F3F4F6",
        card: "#FFFFFF",
        text: "#111827",
        textSoft: "#6B7280",
        input: "#ffffff",
        border: "#E5E7EB",
      };

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    skills: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔥 FETCH JOB DETAILS WHEN EDITING
  useEffect(() => {
    if (!jobId) return;

    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${jobId}`);
        const job = res.data;

        setFormData({
          title: job.title || "",
          company: job.companyName || "",
          location: job.location || "",
          type: job.jobType || "",
          salary: job.salary || "",
          description: job.description || "",
          skills: job.skills ? job.skills.join(", ") : "",
        });
      } catch (err) {
        setError("Failed to load job details");
      }
    };

    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ CREATE OR UPDATE JOB
  const handleSubmitJob = async () => {
    setError("");
    setSuccess("");

    try {
      const payload = {
        ...formData,
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
      };

      if (jobId) {
        // 🔁 EDIT JOB
        await API.put(`/jobs/${jobId}`, payload);
        setSuccess("Job updated successfully!");
      } else {
        // 🆕 CREATE JOB
        await API.post("/jobs", payload);
        setSuccess("Job posted successfully!");
      }

      // 🔥 INSTANT DASHBOARD REFRESH
      navigate("/employer/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save job");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: colors.bg,
        p: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 700,
          p: 4,
          borderRadius: 3,
          bgcolor: colors.card,
          color: colors.text,
          border: `1px solid ${colors.border}`,
        }}
      >
        {/* HEADER */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="bold">
            {jobId ? "Edit Job" : "Post a New Job"}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color={colors.textSoft}>
              Theme
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => {
                const next = !darkMode;
                setDarkMode(next);
                localStorage.setItem("empDarkMode", String(next));
              }}
            />
          </Box>
        </Box>

        <Typography sx={{ mt: 1, mb: 3, color: colors.textSoft }}>
          {jobId
            ? "Update your job details below."
            : "Fill out the details below to create your job posting."}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* INPUTS */}
        {[
          { label: "Job Title", name: "title" },
          { label: "Company Name", name: "company" },
          { label: "Location", name: "location" },
          { label: "Job Type (Full-time, Remote, etc.)", name: "type" },
          { label: "Salary (optional)", name: "salary" },
          { label: "Required Skills (comma separated)", name: "skills" },
        ].map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ sx: { color: colors.textSoft } }}
            InputProps={{
              sx: {
                bgcolor: colors.input,
                color: colors.text,
                borderRadius: 2,
              },
            }}
          />
        ))}

        <TextField
          label="Job Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 3 }}
          InputLabelProps={{ sx: { color: colors.textSoft } }}
          InputProps={{
            sx: {
              bgcolor: colors.input,
              color: colors.text,
              borderRadius: 2,
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmitJob}
          sx={{
            py: 1.3,
            bgcolor: "#6C63FF",
            textTransform: "none",
            borderRadius: 2,
            ":hover": { bgcolor: "#5a54e3" },
          }}
        >
          {jobId ? "Update Job" : "Post Job"}
        </Button>
      </Paper>
    </Box>
  );
}
