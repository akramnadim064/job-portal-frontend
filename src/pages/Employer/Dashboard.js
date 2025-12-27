// // // import React, { useEffect, useMemo, useState } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   Button,
// // //   Card,
// // //   CardContent,
// // //   Chip,
// // //   IconButton,
// // //   Switch,
// // //   Divider,
// // //   List,
// // //   ListItemButton,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Avatar,
// // //   Tooltip,
// // //   LinearProgress,
// // // } from "@mui/material";
// // // import {
// // //   Dashboard as DashboardIcon,
// // //   AddCircleOutline,
// // //   WorkOutline,
// // //   PeopleOutline,
// // //   Logout,
// // //   DarkMode,
// // //   LightMode,
// // // } from "@mui/icons-material";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "../../api/api";

// // // // Helper to create a tiny "chart" without extra libraries
// // // function ApplicantsBarChart({ data }) {
// // //   if (!data || data.length === 0) {
// // //     return (
// // //       <Typography variant="body2" color="text.secondary">
// // //         No applicants yet.
// // //       </Typography>
// // //     );
// // //   }

// // //   const max = Math.max(...data.map((d) => d.count || 0)) || 1;

// // //   return (
// // //     <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end", height: 160 }}>
// // //       {data.map((d) => (
// // //         <Box key={d.jobId} sx={{ textAlign: "center", flex: 1 }}>
// // //           <Box
// // //             sx={{
// // //               height: `${(d.count / max) * 100}%`,
// // //               minHeight: d.count > 0 ? 16 : 0,
// // //               borderRadius: 1,
// // //               bgcolor: "primary.main",
// // //               mb: 1,
// // //               transition: "height 0.3s",
// // //             }}
// // //           />
// // //           <Typography
// // //             variant="caption"
// // //             noWrap
// // //             sx={{ display: "block", maxWidth: "100%" }}
// // //           >
// // //             {d.title}
// // //           </Typography>
// // //           <Typography variant="caption" color="text.secondary">
// // //             {d.count} appl.
// // //           </Typography>
// // //         </Box>
// // //       ))}
// // //     </Box>
// // //   );
// // // }

// // // export default function EmployerDashboard() {
// // //   const navigate = useNavigate();

// // //   const [jobs, setJobs] = useState([]);
// // //   const [applicantStats, setApplicantStats] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [darkMode, setDarkMode] = useState(
// // //     () => localStorage.getItem("empDarkMode") === "true"
// // //   );

// // //   // Simple “theme” based on darkMode flag
// // //   const colors = useMemo(
// // //     () =>
// // //       darkMode
// // //         ? {
// // //             bg: "#0B1220",
// // //             bgSoft: "#111827",
// // //             card: "#020617",
// // //             text: "#E5E7EB",
// // //             textSoft: "#9CA3AF",
// // //             border: "#1F2937",
// // //           }
// // //         : {
// // //             bg: "#F3F4F6",
// // //             bgSoft: "#E5E7EB",
// // //             card: "#FFFFFF",
// // //             text: "#111827",
// // //             textSoft: "#6B7280",
// // //             border: "#E5E7EB",
// // //           },
// // //     [darkMode]
// // //   );

// // //   // Load jobs for this employer
// // //   useEffect(() => {
// // //     const fetchJobsAndApplicants = async () => {
// // //       try {
// // //         setLoading(true);

// // //         // 1️⃣ Get all jobs created by this employer
// // //         const jobsRes = await axios.get("/jobs/employer/my-jobs");
// // //         const employerJobs = jobsRes.data || [];
// // //         setJobs(employerJobs);

// // //         // 2️⃣ For each job, get number of applicants
// // //         const stats = await Promise.all(
// // //           employerJobs.map(async (job) => {
// // //             try {
// // //               const res = await axios.get(`/applications/job/${job._id}`);
// // //               const applicants = res.data || [];
// // //               return {
// // //                 jobId: job._id,
// // //                 title: job.title,
// // //                 count: applicants.length,
// // //               };
// // //             } catch {
// // //               return { jobId: job._id, title: job.title, count: 0 };
// // //             }
// // //           })
// // //         );

// // //         setApplicantStats(stats);
// // //       } catch (err) {
// // //         console.error("Dashboard ERROR:", err.response?.data || err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchJobsAndApplicants();
// // //   }, []);

// // //   const totalJobs = jobs.length;
// // //   const totalApplicants = applicantStats.reduce(
// // //     (sum, s) => sum + (s.count || 0),
// // //     0
// // //   );

// // //   const toggleDarkMode = () => {
// // //     setDarkMode((prev) => {
// // //       const next = !prev;
// // //       localStorage.setItem("empDarkMode", String(next));
// // //       return next;
// // //     });
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("role");
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         display: "flex",
// // //         minHeight: "100vh",
// // //         bgcolor: colors.bg,
// // //         color: colors.text,
// // //       }}
// // //     >
// // //       {/* SIDEBAR */}
// // //       <Box
// // //         sx={{
// // //           width: 260,
// // //           bgcolor: colors.bgSoft,
// // //           borderRight: `1px solid ${colors.border}`,
// // //           display: "flex",
// // //           flexDirection: "column",
// // //           p: 2,
// // //         }}
// // //       >
// // //         <Box
// // //           sx={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             gap: 1.5,
// // //             mb: 3,
// // //             mt: 1,
// // //           }}
// // //         >
// // //           <Avatar sx={{ bgcolor: "primary.main" }}>E</Avatar>
// // //           <Box>
// // //             <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
// // //               Employer Panel
// // //             </Typography>
// // //             <Typography variant="caption" color={colors.textSoft}>
// // //               Manage jobs & applicants
// // //             </Typography>
// // //           </Box>
// // //         </Box>

// // //         <List dense sx={{ flex: 1 }}>
// // //           <ListItemButton selected>
// // //             <ListItemIcon>
// // //               <DashboardIcon sx={{ color: "primary.main" }} />
// // //             </ListItemIcon>
// // //             <ListItemText primary="Dashboard" />
// // //           </ListItemButton>

// // //           <ListItemButton onClick={() => navigate("/employer/post-job")}>
// // //             <ListItemIcon>
// // //               <AddCircleOutline sx={{ color: colors.textSoft }} />
// // //             </ListItemIcon>
// // //             <ListItemText primary="Post New Job" />
// // //           </ListItemButton>

// // //           <ListItemButton onClick={() => navigate("/jobs")}>
// // //             <ListItemIcon>
// // //               <WorkOutline sx={{ color: colors.textSoft }} />
// // //             </ListItemIcon>
// // //             <ListItemText primary="Browse Jobs (Public)" />
// // //           </ListItemButton>

// // //           <ListItemButton
// // //             onClick={() => {
// // //               // You can later create `/employer/applicants` page
// // //               navigate("/employer/dashboard"); // placeholder
// // //             }}
// // //           >
// // //             <ListItemIcon>
// // //               <PeopleOutline sx={{ color: colors.textSoft }} />
// // //             </ListItemIcon>
// // //             <ListItemText primary="Applicants" />
// // //           </ListItemButton>
// // //         </List>

// // //         <Divider sx={{ my: 1, borderColor: colors.border }} />

// // //         <List dense>
// // //           <ListItemButton onClick={handleLogout}>
// // //             <ListItemIcon>
// // //               <Logout sx={{ color: colors.textSoft }} />
// // //             </ListItemIcon>
// // //             <ListItemText primary="Logout" />
// // //           </ListItemButton>
// // //         </List>
// // //       </Box>

// // //       {/* MAIN CONTENT */}
// // //       <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column", gap: 3 }}>
// // //         {/* Top Bar */}
// // //         <Box
// // //           sx={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "space-between",
// // //             mb: 1,
// // //           }}
// // //         >
// // //           <Box>
// // //             <Typography variant="h5" sx={{ fontWeight: 600 }}>
// // //               Employer Dashboard
// // //             </Typography>
// // //             <Typography variant="body2" color={colors.textSoft}>
// // //               Overview of your job postings and applicants.
// // //             </Typography>
// // //           </Box>

// // //           <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
// // //             <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
// // //               <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
// // //                 {darkMode ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
// // //                 <Switch checked={darkMode} onChange={toggleDarkMode} />
// // //               </Box>
// // //             </Tooltip>

// // //             <Button
// // //               variant="contained"
// // //               startIcon={<AddCircleOutline />}
// // //               onClick={() => navigate("/employer/post-job")}
// // //             >
// // //               Post Job
// // //             </Button>
// // //           </Box>
// // //         </Box>

// // //         {loading && <LinearProgress />}

// // //         {/* Analytics Cards */}
// // //         <Box
// // //           sx={{
// // //             display: "grid",
// // //             gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
// // //             gap: 2.5,
// // //           }}
// // //         >
// // //           <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //             <CardContent>
// // //               <Typography variant="overline" color={colors.textSoft}>
// // //                 TOTAL JOBS
// // //               </Typography>
// // //               <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                 {totalJobs}
// // //               </Typography>
// // //               <Typography variant="body2" color={colors.textSoft}>
// // //                 Jobs you have posted.
// // //               </Typography>
// // //             </CardContent>
// // //           </Card>

// // //           <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //             <CardContent>
// // //               <Typography variant="overline" color={colors.textSoft}>
// // //                 TOTAL APPLICANTS
// // //               </Typography>
// // //               <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                 {totalApplicants}
// // //               </Typography>
// // //               <Typography variant="body2" color={colors.textSoft}>
// // //                 Across all your jobs.
// // //               </Typography>
// // //             </CardContent>
// // //           </Card>

// // //           <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //             <CardContent>
// // //               <Typography variant="overline" color={colors.textSoft}>
// // //                 ACTIVE JOBS
// // //               </Typography>
// // //               <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                 {jobs.length} {/* You can later filter by status */}
// // //               </Typography>
// // //               <Typography variant="body2" color={colors.textSoft}>
// // //                 All jobs are considered active for now.
// // //               </Typography>
// // //             </CardContent>
// // //           </Card>
// // //         </Box>

// // //         {/* Middle Row: Chart + Quick Stats */}
// // //         <Box
// // //           sx={{
// // //             display: "grid",
// // //             gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
// // //             gap: 2.5,
// // //           }}
// // //         >
// // //           <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //             <CardContent>
// // //               <Box
// // //                 sx={{
// // //                   display: "flex",
// // //                   justifyContent: "space-between",
// // //                   alignItems: "center",
// // //                   mb: 1,
// // //                 }}
// // //               >
// // //                 <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
// // //                   Applicants per Job
// // //                 </Typography>
// // //                 <Typography variant="caption" color={colors.textSoft}>
// // //                   Simple bar chart (no extra libs)
// // //                 </Typography>
// // //               </Box>

// // //               <ApplicantsBarChart data={applicantStats} />
// // //             </CardContent>
// // //           </Card>

// // //           <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //             <CardContent>
// // //               <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
// // //                 Highlights
// // //               </Typography>

// // //               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
// // //                 <Box>
// // //                   <Typography variant="caption" color={colors.textSoft}>
// // //                     Most applied job
// // //                   </Typography>
// // //                   <Typography variant="body1">
// // //                     {applicantStats.length
// // //                       ? applicantStats.reduce((a, b) =>
// // //                           (a.count || 0) > (b.count || 0) ? a : b
// // //                         ).title
// // //                       : "No data yet"}
// // //                   </Typography>
// // //                 </Box>

// // //                 <Box>
// // //                   <Typography variant="caption" color={colors.textSoft}>
// // //                     Average applicants / job
// // //                   </Typography>
// // //                   <Typography variant="body1">
// // //                     {totalJobs
// // //                       ? (totalApplicants / totalJobs).toFixed(1)
// // //                       : "0.0"}
// // //                   </Typography>
// // //                 </Box>

// // //                 <Box>
// // //                   <Typography variant="caption" color={colors.textSoft}>
// // //                     Quick actions
// // //                   </Typography>
// // //                   <Box sx={{ mt: 0.5, display: "flex", flexWrap: "wrap", gap: 1 }}>
// // //                     <Chip
// // //                       label="Post New Job"
// // //                       icon={<AddCircleOutline />}
// // //                       onClick={() => navigate("/employer/post-job")}
// // //                       size="small"
// // //                       color="primary"
// // //                     />
// // //                     <Chip
// // //                       label="View Public Jobs"
// // //                       icon={<WorkOutline />}
// // //                       onClick={() => navigate("/jobs")}
// // //                       size="small"
// // //                       variant="outlined"
// // //                     />
// // //                   </Box>
// // //                 </Box>
// // //               </Box>
// // //             </CardContent>
// // //           </Card>
// // //         </Box>

// // //         {/* Job List */}
// // //         <Card sx={{ bgcolor: colors.card, borderRadius: 2 }}>
// // //           <CardContent>
// // //             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
// // //               Your Job Postings
// // //             </Typography>

// // //             {jobs.length === 0 ? (
// // //               <Box sx={{ py: 4, textAlign: "center" }}>
// // //                 <Typography variant="body2" color={colors.textSoft}>
// // //                   You haven’t posted any jobs yet.
// // //                 </Typography>
// // //                 <Button
// // //                   sx={{ mt: 2 }}
// // //                   variant="contained"
// // //                   startIcon={<AddCircleOutline />}
// // //                   onClick={() => navigate("/employer/post-job")}
// // //                 >
// // //                   Post your first job
// // //                 </Button>
// // //               </Box>
// // //             ) : (
// // //               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
// // //                 {jobs.map((job) => {
// // //                   const stat =
// // //                     applicantStats.find((s) => s.jobId === job._id) || {};
// // //                   return (
// // //                     <Box
// // //                       key={job._id}
// // //                       sx={{
// // //                         display: "flex",
// // //                         alignItems: "center",
// // //                         justifyContent: "space-between",
// // //                         py: 1.5,
// // //                         borderBottom: `1px solid ${colors.border}`,
// // //                       }}
// // //                     >
// // //                       <Box>
// // //                         <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
// // //                           {job.title}
// // //                         </Typography>
// // //                         <Typography variant="body2" color={colors.textSoft}>
// // //                           {job.companyName} • {job.location} • {job.jobType}
// // //                         </Typography>
// // //                       </Box>

// // //                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// // //                         <Chip
// // //                           label={`${stat.count || 0} applicants`}
// // //                           size="small"
// // //                           color={(stat.count || 0) > 0 ? "primary" : "default"}
// // //                         />
// // //                         <Button
// // //                           size="small"
// // //                           variant="outlined"
// // //                           onClick={() =>
// // //                             navigate(`/employer/applicants/${job._id}`)
// // //                           }
// // //                         >
// // //                           View Applicants
// // //                         </Button>
// // //                       </Box>
// // //                     </Box>
// // //                   );
// // //                 })}
// // //               </Box>
// // //             )}
// // //           </CardContent>
// // //         </Card>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }







// // import React, { useMemo, useState } from "react";
// // import {
// //     Box,
// //     Typography,
// //     Button,
// //     Card,
// //     CardContent,
// //     Chip,
// //     Divider,
// //     List,
// //     ListItemButton,
// //     ListItemIcon,
// //     ListItemText,
// //     Avatar,
// //     Switch,
// // } from "@mui/material";
// // import {
// //     Dashboard as DashboardIcon,
// //     AddCircleOutline,
// //     WorkOutline,
// //     Logout,
// //     DarkMode,
// //     LightMode,
// // } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";

// // export default function EmployerDashboard() {
// //     const navigate = useNavigate();

// //     // Dummy Job Data
// //     const [jobs] = useState([
// //         {
// //             _id: "1",
// //             title: "Sample Job",
// //             companyName: "Your Company",
// //             location: "India",
// //             jobType: "Full-time",
// //         },
// //     ]);

// //     const [applicantStats] = useState([
// //         { jobId: "1", title: "Sample Job", count: 0 },
// //     ]);

// //     const [darkMode, setDarkMode] = useState(
// //         () => localStorage.getItem("empDarkMode") === "true"
// //     );

// //     const colors = useMemo(
// //         () =>
// //             darkMode
// //                 ? {
// //                     bg: "#0B1220",
// //                     bgSoft: "#111827",
// //                     card: "#020617",
// //                     text: "#E5E7EB",
// //                     textSoft: "#9CA3AF",
// //                     border: "#1F2937",
// //                 }
// //                 : {
// //                     bg: "#F3F4F6",
// //                     bgSoft: "#E5E7EB",
// //                     card: "#FFFFFF",
// //                     text: "#111827",
// //                     textSoft: "#6B7280",
// //                     border: "#E5E7EB",
// //                 },
// //         [darkMode]
// //     );

// //     const totalJobs = jobs.length;
// //     const totalApplicants = applicantStats.reduce(
// //         (sum, s) => sum + (s.count || 0),
// //         0
// //     );

// //     const toggleDarkMode = () => {
// //         setDarkMode((prev) => {
// //             const next = !prev;
// //             localStorage.setItem("empDarkMode", String(next));
// //             return next;
// //         });
// //     };

// //     const handleLogout = () => {
// //         localStorage.clear();
// //         navigate("/login");
// //     };

// //     return (
// //         <Box
// //             sx={{
// //                 display: "flex",
// //                 minHeight: "100vh",
// //                 bgcolor: colors.bg,
// //                 color: colors.text,
// //             }}
// //         >
// //             {/* SIDEBAR */}
// //             <Box
// //                 sx={{
// //                     width: 260,
// //                     bgcolor: colors.bgSoft,
// //                     borderRight: `1px solid ${colors.border}`,
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     p: 2,
// //                 }}
// //             >
// //                 <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
// //                     <Avatar sx={{ bgcolor: "primary.main" }}>E</Avatar>
// //                     <Box>
// //                         <Typography variant="subtitle1" sx={{ fontWeight: 600 }} color={colors.text}>
// //                             Employer Panel
// //                         </Typography>
// //                         <Typography variant="caption" color={colors.textSoft}>
// //                             Manage jobs & applicants
// //                         </Typography>
// //                     </Box>
// //                 </Box>

// //                 <List dense sx={{ flex: 1 }}>
// //                     <ListItemButton selected>
// //                         <ListItemIcon>
// //                             <DashboardIcon sx={{ color: "primary.main" }} />
// //                         </ListItemIcon>
// //                         <ListItemText primary="Dashboard" sx={{ color: colors.text }} />
// //                     </ListItemButton>

// //                     <ListItemButton onClick={() => navigate("/employer/post-job")}>
// //                         <ListItemIcon>
// //                             <AddCircleOutline sx={{ color: colors.textSoft }} />
// //                         </ListItemIcon>
// //                         <ListItemText primary="Post New Job" sx={{ color: colors.text }} />
// //                     </ListItemButton>

// //                     <ListItemButton onClick={() => navigate("/jobs")}>
// //                         <ListItemIcon>
// //                             <WorkOutline sx={{ color: colors.textSoft }} />
// //                         </ListItemIcon>
// //                         <ListItemText primary="Browse Jobs" sx={{ color: colors.text }} />
// //                     </ListItemButton>
// //                 </List>

// //                 <Divider sx={{ my: 1, borderColor: colors.border }} />

// //                 <List dense>
// //                     <ListItemButton onClick={handleLogout}>
// //                         <ListItemIcon>
// //                             <Logout sx={{ color: colors.textSoft }} />
// //                         </ListItemIcon>
// //                         <ListItemText primary="Logout" sx={{ color: colors.text }} />
// //                     </ListItemButton>
// //                 </List>
// //             </Box>

// //             {/* MAIN CONTENT */}
// //             <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column", gap: 3 }}>
// //                 {/* Top Bar */}
// //                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                     <Box>
// //                         <Typography variant="h5" sx={{ fontWeight: 600 }} color={colors.text}>
// //                             Employer Dashboard
// //                         </Typography>
// //                         <Typography variant="body2" color={colors.textSoft}>
// //                             Overview of your job postings and applicants.
// //                         </Typography>
// //                     </Box>

// //                     <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
// //                         {darkMode ? <DarkMode /> : <LightMode />}
// //                         <Switch checked={darkMode} onChange={toggleDarkMode} />
// //                         <Button
// //                             variant="contained"
// //                             startIcon={<AddCircleOutline />}
// //                             onClick={() => navigate("/employer/post-job")}
// //                         >
// //                             Post Job
// //                         </Button>
// //                     </Box>
// //                 </Box>

// //                 {/* Stats Section */}
// //                 <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
// //                     <Card sx={{ bgcolor: colors.card }}>
// //                         <CardContent>
// //                             <Typography variant="overline" color={colors.textSoft}>
// //                                 TOTAL JOBS
// //                             </Typography>
// //                             <Typography variant="h4" color={colors.text}>
// //                                 {totalJobs}
// //                             </Typography>
// //                         </CardContent>
// //                     </Card>

// //                     <Card sx={{ bgcolor: colors.card }}>
// //                         <CardContent>
// //                             <Typography variant="overline" color={colors.textSoft}>
// //                                 TOTAL APPLICANTS
// //                             </Typography>
// //                             <Typography variant="h4" color={colors.text}>
// //                                 {totalApplicants}
// //                             </Typography>
// //                         </CardContent>
// //                     </Card>

// //                     <Card sx={{ bgcolor: colors.card }}>
// //                         <CardContent>
// //                             <Typography variant="overline" color={colors.textSoft}>
// //                                 ACTIVE JOBS
// //                             </Typography>
// //                             <Typography variant="h4" color={colors.text}>
// //                                 {totalJobs}
// //                             </Typography>
// //                         </CardContent>
// //                     </Card>
// //                 </Box>

// //                 {/* Job List */}
// //                 <Card sx={{ bgcolor: colors.card }}>
// //                     <CardContent>
// //                         <Typography variant="h6" sx={{ mb: 2 }} color={colors.text}>
// //                             Your Job Postings
// //                         </Typography>

// //                         {jobs.map((job) => (
// //                             <Box
// //                                 key={job._id}
// //                                 sx={{
// //                                     borderBottom: `1px solid ${colors.border}`,
// //                                     py: 1.5,
// //                                     display: "flex",
// //                                     justifyContent: "space-between",
// //                                 }}
// //                             >
// //                                 <Box>
// //                                     <Typography color={colors.text}>{job.title}</Typography>
// //                                     <Typography color={colors.textSoft}>
// //                                         {job.companyName} • {job.location} • {job.jobType}
// //                                     </Typography>
// //                                 </Box>

// //                                 <Chip
// //                                     label="0 applicants"
// //                                     size="small"
// //                                     sx={{
// //                                         bgcolor: darkMode ? "#1E293B" : "#E5E7EB",
// //                                         color: darkMode ? "#E5E7EB" : "#111827",
// //                                         border: darkMode ? "1px solid #334155" : "1px solid #CBD5E1",
// //                                     }}
// //                                 />

// //                             </Box>
// //                         ))}
// //                     </CardContent>
// //                 </Card>
// //             </Box>
// //         </Box>
// //     );
// // }







































































// // import React, { useEffect, useMemo, useState } from "react";
// // import {
// //     Box,
// //     Typography,
// //     Card,
// //     CardContent,
// //     Chip,
// //     Button,
// //     Switch,
// // } from "@mui/material";
// // import {
// //     AddCircleOutline,
// //     DarkMode,
// //     LightMode,
// // } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";
// // import API from "../../api/api"; // ✅ CORRECT PATH

// // export default function EmployerDashboard() {
// //     const navigate = useNavigate();

// //     // Backend dashboard data
// //     const [dashboard, setDashboard] = useState(null);

// //     // Dark mode
// //     const [darkMode, setDarkMode] = useState(
// //         () => localStorage.getItem("empDarkMode") === "true"
// //     );

// //     // Theme colors
// //     const colors = useMemo(
// //         () =>
// //             darkMode
// //                 ? {
// //                     bg: "#0B1220",
// //                     card: "#020617",
// //                     text: "#E5E7EB",
// //                     textSoft: "#9CA3AF",
// //                 }
// //                 : {
// //                     bg: "#F3F4F6",
// //                     card: "#FFFFFF",
// //                     text: "#111827",
// //                     textSoft: "#6B7280",
// //                 },
// //         [darkMode]
// //     );

// //     // 🔥 FETCH DASHBOARD DATA FROM BACKEND
// //     useEffect(() => {
// //         const fetchDashboard = async () => {
// //             try {
// //                 const res = await API.get("/employer/dashboard");
// //                 console.log("DASHBOARD DATA:", res.data); // debug
// //                 setDashboard(res.data);
// //             } catch (error) {
// //                 console.error(
// //                     "Dashboard fetch error:",
// //                     error.response?.data || error
// //                 );
// //             }
// //         };

// //         fetchDashboard();
// //     }, []);

// //     // Prevent render before data loads
// //     if (!dashboard) return null;

// //     return (
// //         <Box sx={{ minHeight: "100vh", bgcolor: colors.bg, p: 3 }}>
// //             {/* HEADER */}
// //             <Box
// //                 sx={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                     mb: 3,
// //                 }}
// //             >
// //                 <Typography variant="h5" color={colors.text}>
// //                     Welcom, {dashboard.employerName}!
// //                 </Typography>

// //                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
// //                     {darkMode ? <DarkMode /> : <LightMode />}
// //                     <Switch
// //                         checked={darkMode}
// //                         onChange={() => {
// //                             const next = !darkMode;
// //                             setDarkMode(next);
// //                             localStorage.setItem("empDarkMode", String(next));
// //                         }}
// //                     />
// //                     <Button
// //                         variant="contained"
// //                         startIcon={<AddCircleOutline />}
// //                         onClick={() => navigate("/employer/post-job")}
// //                     >
// //                         Post Job
// //                     </Button>
// //                 </Box>
// //             </Box>

// //             {/* STATS */}
// //             <Box
// //                 sx={{
// //                     display: "grid",
// //                     gridTemplateColumns: "repeat(3, 1fr)",
// //                     gap: 2,
// //                 }}
// //             >
// //                 <Card sx={{ bgcolor: colors.card }}>
// //                     <CardContent>
// //                         <Typography color={colors.textSoft}>TOTAL JOBS</Typography>
// //                         <Typography variant="h4" color={colors.text}>
// //                             {dashboard.totalJobs}
// //                         </Typography>
// //                     </CardContent>
// //                 </Card>

// //                 <Card sx={{ bgcolor: colors.card }}>
// //                     <CardContent>
// //                         <Typography color={colors.textSoft}>TOTAL APPLICANTS</Typography>
// //                         <Typography variant="h4" color={colors.text}>
// //                             {dashboard.totalApplicants}
// //                         </Typography>
// //                     </CardContent>
// //                 </Card>

// //                 <Card sx={{ bgcolor: colors.card }}>
// //                     <CardContent>
// //                         <Typography color={colors.textSoft}>ACTIVE JOBS</Typography>
// //                         <Typography variant="h4" color={colors.text}>
// //                             {dashboard.jobs.length}
// //                         </Typography>
// //                     </CardContent>
// //                 </Card>
// //             </Box>

// //             {/* JOB LIST */}
// //             <Card sx={{ mt: 3, bgcolor: colors.card }}>
// //                 <CardContent>
// //                     <Typography variant="h6" sx={{ mb: 2 }} color={colors.text}>
// //                         Your Job Postings
// //                     </Typography>

// //                     {dashboard.jobs.length === 0 ? (
// //                         <Typography color={colors.textSoft}>
// //                             You haven’t posted any jobs yet.
// //                         </Typography>
// //                     ) : (
// //                         dashboard.jobs.map((job) => (
// //                             <Box
// //                                 key={job._id}
// //                                 sx={{
// //                                     display: "flex",
// //                                     justifyContent: "space-between",
// //                                     alignItems: "center",
// //                                     py: 1.5,
// //                                     borderBottom: "1px solid #e5e7eb",
// //                                 }}
// //                             >
// //                                 <Box>
// //                                     <Typography color={colors.text}>
// //                                         {job.title}
// //                                     </Typography>
// //                                     <Typography color={colors.textSoft}>
// //                                         {job.companyName} • {job.location} • {job.jobType}
// //                                     </Typography>
// //                                 </Box>

// //                                 <Chip
// //                                     label={`${job.applicantsCount || 0} applicants`}
// //                                     sx={{
// //                                         bgcolor: darkMode ? "#1E293B" : "#E5E7EB",
// //                                         color: darkMode ? "#E5E7EB" : "#111827",
// //                                         border: darkMode ? "1px solid #334155" : "1px solid #CBD5E1",
// //                                         fontWeight: 500,
// //                                     }}
// //                                 />

// //                             </Box>
// //                         ))
// //                     )}
// //                 </CardContent>
// //             </Card>
// //         </Box>
// //     );
// // }




// import React, { useEffect, useMemo, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
//   Button,
//   Switch,
// } from "@mui/material";
// import { AddCircleOutline, DarkMode, LightMode } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import API from "../../api/api";

// const socket = io("http://localhost:5000");

// export default function EmployerDashboard() {
//   const navigate = useNavigate();
//   const [dashboard, setDashboard] = useState(null);
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("empDarkMode") === "true"
//   );

//   const colors = useMemo(
//     () =>
//       darkMode
//         ? {
//             bg: "#0B1220",
//             card: "#020617",
//             text: "#E5E7EB",
//             textSoft: "#9CA3AF",
//           }
//         : {
//             bg: "#F3F4F6",
//             card: "#FFFFFF",
//             text: "#111827",
//             textSoft: "#6B7280",
//           },
//     [darkMode]
//   );

//   const fetchDashboard = async () => {
//     const res = await API.get("/employer/dashboard");
//     setDashboard(res.data);
//   };

//   useEffect(() => {
//     fetchDashboard();

//     socket.on("dashboardUpdated", fetchDashboard);
//     return () => socket.off("dashboardUpdated");
//   }, []);

//   if (!dashboard) return null;

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: colors.bg, p: 3 }}>
//       <Typography variant="h5" sx={{ mb: 3 }}>
//         Welcome, {dashboard.employerName}
//       </Typography>

//       <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
//         <Card><CardContent>{dashboard.totalJobs} Jobs</CardContent></Card>
//         <Card><CardContent>{dashboard.totalApplicants} Applicants</CardContent></Card>
//         <Card><CardContent>{dashboard.jobs.length} Active</CardContent></Card>
//       </Box>

//       <Card sx={{ mt: 3 }}>
//         <CardContent>
//           {dashboard.jobs.map(job => (
//             <Box key={job._id} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
//               <Box>
//                 <Typography>{job.title}</Typography>
//                 <Typography color="text.secondary">{job.location}</Typography>
//               </Box>

//               <Box sx={{ display: "flex", gap: 1 }}>
//                 <Chip
//                   label={`${job.applicantsCount} applicants`}
//                   sx={{
//                     bgcolor: darkMode ? "#1E293B" : "#E5E7EB",
//                     color: darkMode ? "#E5E7EB" : "#111827",
//                   }}
//                 />

//                 <Button
//                   size="small"
//                   variant="outlined"
//                   onClick={() =>
//                     navigate(`/employer/applicants/${job._id}`)
//                   }
//                 >
//                   View Applicants
//                 </Button>

//                 <Button
//                   size="small"
//                   variant="contained"
//                   onClick={() =>
//                     navigate(`/employer/edit-job/${job._id}`)
//                   }
//                 >
//                   Edit
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }








import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Chip,
    Button,
    Switch,
} from "@mui/material";
import {
    AddCircleOutline,
    DarkMode,
    LightMode,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import API from "../../api/api"; // ✅ CORRECT PATH

export default function EmployerDashboard() {
    const navigate = useNavigate();

    // Backend dashboard data
    const [dashboard, setDashboard] = useState(null);

    // Dark mode
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("empDarkMode") === "true"
    );

    // Theme colors
    const colors = useMemo(
        () =>
            darkMode
                ? {
                    bg: "#0B1220",
                    card: "#020617",
                    text: "#E5E7EB",
                    textSoft: "#9CA3AF",
                }
                : {
                    bg: "#F3F4F6",
                    card: "#FFFFFF",
                    text: "#111827",
                    textSoft: "#6B7280",
                },
        [darkMode]
    );

    // 🔥 FETCH DASHBOARD DATA FROM BACKEND
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await API.get("/employer/dashboard");
                console.log("DASHBOARD DATA:", res.data); // debug
                setDashboard(res.data);
            } catch (error) {
                console.error(
                    "Dashboard fetch error:",
                    error.response?.data || error
                );
            }
        };

        fetchDashboard();
    }, []);

    // Prevent render before data loads
    if (!dashboard) return null;

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: colors.bg, p: 3 }}>
            {/* HEADER */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h5" color={colors.text}>
                    Welcomme, {dashboard.employerName}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {darkMode ? <DarkMode /> : <LightMode />}
                    <Switch
                        checked={darkMode}
                        onChange={() => {
                            const next = !darkMode;
                            setDarkMode(next);
                            localStorage.setItem("empDarkMode", String(next));
                        }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<AddCircleOutline />}
                        onClick={() => navigate("/employer/post-job")}
                    >
                        Post Job
                    </Button>
                </Box>
            </Box>

            {/* STATS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 2,
                }}
            >
                <Card sx={{ bgcolor: colors.card }}>
                    <CardContent>
                        <Typography color={colors.textSoft}>TOTAL JOBS</Typography>
                        <Typography variant="h4" color={colors.text}>
                            {dashboard.totalJobs}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ bgcolor: colors.card }}>
                    <CardContent>
                        <Typography color={colors.textSoft}>TOTAL APPLICANTS</Typography>
                        <Typography variant="h4" color={colors.text}>
                            {dashboard.totalApplicants}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ bgcolor: colors.card }}>
                    <CardContent>
                        <Typography color={colors.textSoft}>ACTIVE JOBS</Typography>
                        <Typography variant="h4" color={colors.text}>
                            {dashboard.jobs.length}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* JOB LIST */}
            <Card sx={{ mt: 3, bgcolor: colors.card }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }} color={colors.text}>
                        Your Job Postings
                    </Typography>

                    {dashboard.jobs.length === 0 ? (
                        <Typography color={colors.textSoft}>
                            You haven’t posted any jobs yet.
                        </Typography>
                    ) : (
                        dashboard.jobs.map((job) => (
                            <Box
                                key={job._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    py: 1.5,
                                    borderBottom: "1px solid #e5e7eb",
                                }}
                            >
                                <Box>
                                    <Typography color={colors.text}>
                                        {job.title}
                                    </Typography>
                                    <Typography color={colors.textSoft}>
                                        {job.companyName} • {job.location} • {job.jobType}
                                    </Typography>
                                </Box>

                                <Chip
                                    clickable
                                    label={`${job.applicantsCount || 0} applicants`}
                                    onClick={() =>
                                        navigate(`/employer/applicants?jobId=${job._id}`)
                                    }
                                    sx={{
                                        cursor: "pointer",
                                        bgcolor: darkMode ? "#1E293B" : "#E5E7EB",
                                        color: darkMode ? "#E5E7EB" : "#111827",
                                        border: darkMode ? "1px solid #334155" : "1px solid #CBD5E1",
                                        fontWeight: 500,
                                    }}
                                />


                            </Box>
                        ))
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
