import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

const solutions = [
  {
    title: "PERFORMANCE MARKETING SOFTWARE",
    description: "An intuitive tool that streamlines your marketing campaigns and ensures progress with convenience.",
    image: "https://trackier.com/wp-content/uploads/2022/10/pmi_2.gif",
    backgroundColor: "#E1E7FF",
  
  },
  {
    title: "MOBILE MARKETING PLATFORM",
    description: "Improve your App engagement rate with a new-age AdTech that helps you to acquire high LTV users.",
    image: "https://trackier.com/wp-content/uploads/2022/11/mmp-icon-2-2.gif",
    backgroundColor: "#3C51A7",
  },
  {
    title: "iGAMING PLATFORM",
    description: "An all-inclusive platform designed uniquely for iGaming, forex, & lottery industries for multi-channel tracking.",
    image: "https://trackier.com/wp-content/uploads/2022/10/igaming.gif",
    backgroundColor: "#E1E7FF",
  },
];

const Solutions = () => {
  return (
    <Box sx={{ backgroundColor: "#f6f8fc", padding: { xs: "20px", md: "40px" } }}>
      {/* Banner Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E1E7FF",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <CardMedia
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3ITqrnzdr4NsK29rsriiTK0isk66UmjxYRVGHg-Jeeoli8NP" 
          alt="Banner Image"
          sx={{ width: { xs: "100px", md: "122px" }, height: { xs: "100px", md: "122px" }, marginRight: "20px" }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1, padding: '6px', fontFamily: 'sans-serif' }}>
            Same trusted team, bolder vision, limitless dreams.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'sans' }}>
            Big news—Trackier MMP is now Apptrove, and we’re thrilled to continue this journey with you—better, bolder, and more empowered than ever! We&apos;re not just rebranding, we&apos;re revolutionizing how brands track, analyze, and grow. At Apptrove, we are not just tracking numbers; we&apos;re storytelling your brand&apos;s journey, one metric at a time.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" sx={{ backgroundColor: "#28a745", color: "white", textTransform: "none" }}>
              Explore Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Solutions Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}>
        Solutions We Provide
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: { xs: "0 20px", md: "0 50px" } }}>
        {solutions.map((solution, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: { xs: "100%", md: "450px" }, 
              margin: "20px",
              padding: "16px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: '20px',
              justifyContent: "space-between",
              textAlign: "center",
              backgroundColor: solution.backgroundColor,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              component="img"
              src={solution.image}
              alt={solution.title}
              sx={{
                width: { xs: "50px", md: "100px" },
                height: { xs: "50px", md: "100px" },
                animation: "bounce 2s infinite",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2, color: index === 1 ? "white" : "black", fontFamily: 'sans' }}>
                {solution.title}
              </Typography>
              <Typography sx={{ color: index === 1 ? "white" : "black" }}>{solution.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Solutions;
