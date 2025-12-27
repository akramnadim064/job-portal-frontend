

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  CardContent,
  Chip,
} from "@mui/material";
import axios from "../../api/api";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [keyword, setKeyword] = useState("");
  const [jobs, setJobs] = useState([]);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const loadJobs = async () => {
    const res = await axios.get(`/jobs?keyword=${keyword}`);
    setJobs(res.data);
  };

  // 🔥 FETCH APPLIED JOBS
  const loadAppliedJobs = async () => {
    try {
      const res = await axios.get("/applications/my");
      const ids = res.data.map((app) => app.job?._id);
      setAppliedJobIds(ids);
    } catch (err) {
      console.log("Applied jobs fetch error", err);
    }
  };

  useEffect(() => {
    loadJobs();
    loadAppliedJobs();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>
        Find Jobs
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Search jobs..."
          fullWidth
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={loadJobs}>
          Search
        </Button>
      </Box>

      <Grid container spacing={2}>
        {jobs.map((job) => {
          const isApplied = appliedJobIds.includes(job._id); // ✅ PERFECT

          return (
            <Grid item xs={12} md={6} key={job._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography>{job.companyName}</Typography>
                  <Typography color="text.secondary">
                    {job.location}
                  </Typography>

                  {isApplied ? (
                    <Chip label="Applied" color="success" sx={{ mt: 1 }} />
                  ) : (
                    <Button
                      sx={{ mt: 1 }}
                      variant="outlined"
                      component={Link}
                      to={`/apply/${job._id}`}
                    >
                      Apply
                    </Button>
                  )}

                  <Button
                    sx={{ mt: 1, ml: 1 }}
                    variant="text"
                    component={Link}
                    to={`/jobs/${job._id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
