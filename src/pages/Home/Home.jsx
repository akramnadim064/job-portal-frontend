import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#f6f7ff", minHeight: "120vh" }}>
      
      {/* ======================= HERO SECTION ======================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 12,
          py: 10,
          background: "linear-gradient(135deg, #eef0ff, #ffffff)",
        }}
      >
        {/* LEFT TEXT */}
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{ lineHeight: 1.2, color: "#0A1A4A" }}
          >
            Find a job that aligns with your
            <br />
            interests and skills
          </Typography>

          <Typography sx={{ mt: 2, color: "#5f5f7b", fontSize: "18px" }}>
            Thousands of jobs in the leading sectors are waiting for you.
          </Typography>

          {/* ⭐ LOGIN BUTTON ADDED */}
          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#6C63FF",
              px: 5,
              py: 1.5,
              fontSize: "16px",
              textTransform: "none",
              borderRadius: 3,
              fontWeight: "bold",
              boxShadow: "0 5px 18px rgba(108,99,255,0.4)",
              ":hover": { bgcolor: "#5a54e8" },
            }}
            onClick={() => navigate("/login")}
          >
            Login to Get Started
          </Button>

          <Typography sx={{ mt: 2, fontSize: "14px", color: "#6d6d80" }}>
            Suggested: UI/UX Designer, Programmer, Digital Marketing, Writer
          </Typography>
        </Box>

        {/* RIGHT HERO IMAGE */}
        <Box>
          <img
            src="/image.png"
            alt="Hero Illustration"
            style={{
              width: "480px",
              maxWidth: "100%",
              filter: "drop-shadow(0px 10px 35px rgba(0,0,0,0.1))",
            }}
          />
        </Box>
      </Box>

      {/* ======================= FEATURED JOBS ======================= */}
      <Box sx={{ textAlign: "center", pt: 8 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#0A1A4A" }}>
          Featured Jobs
        </Typography>

        <Typography sx={{ mt: 1, color: "gray", fontSize: "15px" }}>
          Choose jobs from the top employers and apply for the same.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: 4 }}>
          {["Senior UI/UX Designer", "Marketing Officer", "Software Engineer"].map(
            (job, index) => (
              <Grid item key={index}>
                <Card
                  sx={{
                    width: 280,
                    borderRadius: 4,
                    p: 1,
                    background: "#fff",
                    border: "1px solid #f0f0ff",
                    transition: "0.3s",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    ":hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="bold" sx={{ fontSize: "18px" }}>
                      {job}
                    </Typography>

                    <Typography
                      fontSize={13}
                      sx={{ color: "gray", mb: 2, mt: 1 }}
                    >
                      Company: Google • New York
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#6C63FF",
                        textTransform: "none",
                        borderRadius: 3,
                        py: 1,
                        fontWeight: 600,
                        ":hover": { bgcolor: "#5a54e8" },
                      }}
                    >
                      APPLY NOW
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>

        <Typography
          sx={{
            mt: 4,
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: "bold",
            color: "#6C63FF",
            fontSize: "16px",
          }}
        >
          View all
        </Typography>
      </Box>

      {/* ======================= COMPANIES ======================= */}
      <Box sx={{ textAlign: "center", mt: 10, mb: 8 }}>
        <Typography sx={{ color: "gray", fontSize: "16px" }}>
          Top companies hiring now
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" height="30" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" height="30" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" height="30" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" height="30" />
        </Box>
      </Box>

      {/* ======================= FOOTER ======================= */}
      <Box
        sx={{
          background: "#0A1A4A",
          color: "#fff",
          py: 4,
          textAlign: "center",
          fontSize: "15px",
        }}
      >
        © 2025 JobPortal — All Rights Reserved
      </Box>
    </Box>
  );
}
