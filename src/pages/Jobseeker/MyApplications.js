import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  CircularProgress,
} from "@mui/material";
import API from "../../api/api";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH REAL DATA FROM BACKEND
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await API.get("/applications/my");
        setApplications(res.data);
      } catch (error) {
        console.error("Fetch applications error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // ⏳ Loading state
  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Applied Jobs
      </Typography>

      {/* ❌ No applications */}
      {applications.length === 0 ? (
        <Typography color="text.secondary">
          You have not applied to any jobs yet.
        </Typography>
      ) : (
        applications.map((app) => (
          <Card key={app._id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {app.job?.title}
              </Typography>

              <Typography color="text.secondary">
                {app.job?.companyName} • {app.job?.location} • {app.job?.jobType}
              </Typography>

              <Chip
                label={app.status}
                sx={{ mt: 1 }}
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
        ))
      )}
    </Box>
  );
}
