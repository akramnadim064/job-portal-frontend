import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  Chip,
  Grid,
} from "@mui/material";
import { WorkOutline, PersonOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function JobSeekerDashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profileRes = await API.get("/profile/me");
      const appRes = await API.get("/applications/my");
      setProfile(profileRes.data);
      setApplications(appRes.data);
    };
    fetchData();
  }, []);

  if (!profile) return null;

  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Welcome, {profile.name}
      </Typography>

      {/* TOP CARDS */}
      <Grid container spacing={3}>
        {/* PROFILE CARD */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PersonOutline sx={{ mr: 1 }} />
                <Typography variant="h6">My Profile</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography><strong>Name:</strong> {profile.name}</Typography>
              <Typography><strong>Email:</strong> {profile.email}</Typography>
              <Typography><strong>Role:</strong> Job Seeker</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* SUMMARY CARD */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <WorkOutline sx={{ mr: 1 }} />
                <Typography variant="h6">Applications</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              <Typography color="text.secondary">
                Total Applied Jobs
              </Typography>

              <Typography variant="h3" fontWeight="bold" sx={{ my: 1 }}>
                {applications.length}
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate("/jobseeker/applications")}
              >
                View Applied Jobs
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* RECENT APPLICATIONS */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Recent Applications
      </Typography>

      {applications.slice(0, 3).map((app) => (
        <Card key={app._id} sx={{ mb: 2 }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {app.job?.title}
              </Typography>
              <Typography color="text.secondary">
                {app.job?.companyName}
              </Typography>
            </Box>

            <Chip
              label={app.status}
              color={
                app.status === "Accepted"
                  ? "success"
                  : app.status === "Rejected"
                  ? "error"
                  : "default"
              }
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
