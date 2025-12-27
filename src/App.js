

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home/Home";

// Auth Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Employer Pages
import EmployerDashboard from "./pages/Employer/Dashboard";
import PostJob from "./pages/Employer/PostJob";
import Applicants from "./pages/Employer/Applicants";

// Jobseeker Pages
import Jobs from "./pages/Jobseeker/Jobs";
import JobDetails from "./pages/Jobseeker/JobDetails";
import Apply from "./pages/Jobseeker/Apply";
import JobSeekerDashboard from "./pages/Jobseeker/Dashboard";
import MyApplications from "./pages/Jobseeker/MyApplications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= JOBSEEKER (PROTECTED) ================= */}

        <Route
          path="/jobseeker/dashboard"
          element={
            <ProtectedRoute>
              <JobSeekerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobseeker/applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply/:id"
          element={
            <ProtectedRoute>
              <Apply />
            </ProtectedRoute>
          }
        />

        {/* ================= EMPLOYER (PROTECTED) ================= */}

        <Route
          path="/employer/dashboard"
          element={
            <ProtectedRoute>
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer/post-job"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer/edit-job/:jobId"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer/applicants"
          element={
            <ProtectedRoute>
              <Applicants />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer/applicants/:jobId"
          element={
            <ProtectedRoute>
              <Applicants />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
