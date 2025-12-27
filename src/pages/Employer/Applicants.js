
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import { useSearchParams } from "react-router-dom";
import API from "../../api/api";

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [jobTitle, setJobTitle] = useState("");

  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  // 🔹 Fetch applicants for employer
  // useEffect(() => {
  //   const fetchApplicants = async () => {
  //     try {
  //       const res = await API.get("/applications/employer");
  //       setApplicants(res.data);
  //     } catch (error) {
  //       console.error("Employer applicants error:", error);
  //     }
  //   };

  //   fetchApplicants();
  // }, []);


  // useEffect(() => {
  //   const fetchApplicants = async () => {
  //     try {
  //       const res = await API.get(
  //         jobId
  //           ? `/applications/employer?jobId=${jobId}`
  //           : "/applications/employer"
  //       );
  //       setApplicants(res.data);
  //     } catch (error) {
  //       console.error("Employer applicants error:", error);
  //     }
  //   };

  //   fetchApplicants();
  // }, [jobId]); //  THIS LINE IS IMPORTANT



  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await API.get(
          jobId
            ? `/applications/employer?jobId=${jobId}`
            : "/applications/employer"
        );

        setApplicants(res.data);

        // ✅ set job title if filtered
        if (jobId && res.data.length > 0) {
          setJobTitle(res.data[0].job?.title || "");
        } else {
          setJobTitle("");
        }
      } catch (error) {
        console.error("Employer applicants error:", error);
      }
    };

    fetchApplicants();
  }, [jobId]);




  // 🔹 Update application status (Accept / Reject)
  const updateStatus = async (applicationId, status) => {
    try {
      await API.patch(`/applications/${applicationId}/status`, { status });

      // update UI instantly
      setApplicants((prev) =>
        prev.map((app) =>
          app._id === applicationId ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        {jobTitle ? `Applicants for: ${jobTitle}` : "Applicants"}
      </Typography>

      {jobTitle && (
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Showing applicants for the selected job
        </Typography>
      )}


      {applicants.length === 0 ? (
        <Typography>No applicants yet.</Typography>
      ) : (
        applicants.map((app) => (
          <Card key={app._id} sx={{ mb: 2 }}>
            <CardContent>
              {/* Applicant info */}
              <Typography variant="h6">
                {app.user?.name}
              </Typography>

              <Typography color="text.secondary">
                {app.user?.email}
              </Typography>

              {/* Job info */}
              <Typography sx={{ mt: 1 }}>
                Applied for: <strong>{app.job?.title}</strong>
              </Typography>

              {/* Status + Actions */}
              <Box sx={{ display: "flex", gap: 1, mt: 2, alignItems: "center" }}>
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

                {app.status === "Applied" && (
                  <>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() =>
                        updateStatus(app._id, "Accepted")
                      }
                    >
                      Accept
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() =>
                        updateStatus(app._id, "Rejected")
                      }
                    >
                      Reject
                    </Button>
                  </>
                )}
              </Box>

              {/* Resume */}
              {app.resumeUrl && (
                <Button
                  href={app.resumeUrl}
                  target="_blank"
                  sx={{ mt: 2 }}
                  variant="outlined"
                >
                  View Resume
                </Button>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}
