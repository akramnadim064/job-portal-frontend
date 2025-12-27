
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import axios from "../../api/api";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job) return null;

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">{job.title}</Typography>
        <Typography variant="h6">{job.companyName}</Typography>
        <Typography>{job.location}</Typography>

        <Typography sx={{ mt: 2 }}>{job.description}</Typography>

        <Button variant="contained" sx={{ mt: 3 }} component={Link} to={`/apply/${job._id}`}>
          Apply Now
        </Button>
      </Paper>
    </Box>
  );
}
