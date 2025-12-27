

import React, { useState } from "react";
import { Box, TextField, Button, Paper, Typography, Alert } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/api";

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resumeUrl, setResumeUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`/applications/${id}`, { resumeUrl });

      alert("Application submitted successfully!");
      navigate("/jobs"); // ✅ only on success
    } catch (err) {
      // ✅ SHOW BACKEND MESSAGE
      const msg =
        err.response?.data?.message || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h4" mb={2}>
          Submit Your Application
        </Typography>

        {/* ✅ DUPLICATE MESSAGE SHOWN HERE */}
        {error && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Resume URL"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button type="submit" variant="contained" fullWidth>
            Apply
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
