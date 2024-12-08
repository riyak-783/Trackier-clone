import React from "react";
import { Box, Typography, Grid, Link, CardMedia } from "@mui/material";

// Reusable Section Component
const Section = ({ title, description, links, imageSrc, reverse }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: 6,
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: { xs: "start", md: "center" },
        justifyContent: { xs: "center", md: "space-between" },
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ fontWeight: "800", marginBottom: 2, fontFamily: 'sans-serif' }}>
          {title}
        </Typography>
        <Typography sx={{ marginBottom: 2, fontFamily: 'sans', fontWeight: "600", fontSize: '18px' }}>{description}</Typography>
        {links.map((link, index) => (
          <div key={index}>
            <Link href={link.href} underline="hover">
              {link.text}
            </Link>
            <br />
          </div>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            maxHeight: "300px",
            maxWidth: "100%",
            objectFit: "contain",
            margin: "0 auto",
            display: { xs: "block", md: "block" }, // Changed from "none" to "block" for mobile view
          }}
        />
      </Grid>
    </Grid>
  );
};

const Attribution = () => {
  const sections = [
    {
      title: "Are you able to make the most of Partner Attribution?",
      description:
        "When your business dreams are big, there is no end to the number of partners you might want to rope in for the marketing campaigns. And partner attribution is the key to bind your great affiliate network into one organic system. But is that all it can do? If you’re equally concerned about efficient communication and performance management, it’s time to find a better alternative!",
      links: [
        { href: "#", text: "For Ad Agencies & Brands →" },
        { href: "#", text: "For iGaming Industry →" },
        { href: "#", text: "For Mobile Marketing Industry →" },
      ],
      imageSrc: "https://trackier.com/wp-content/uploads/2023/10/Group-33772.svg",
      reverse: false,
    },
    {
      title: "Is your Advertising Strategy making you lose money?",
      description:
        "Even the best of affiliate marketing strategies stumble at one point i.e. budgeting. Keeping an account of the investments made across channels to different agencies or publishers can give jitters to your profits. So, maximizing your return on expenditure yet staying sustainable is the technique to succeed. Are you ready to take the leap into smart monetization?",
      links: [
        { href: "#", text: "For Ad Agencies & Brands →" },
        { href: "#", text: "For iGaming Industry →" },
        { href: "#", text: "For Mobile Marketing Industry →" },
      ],
      imageSrc: "https://trackier.com/wp-content/uploads/2023/10/Group-33771.svg",
      reverse: true,
    },
    {
      title: "Friend or Fraud - Can’t tell the difference?",
      description:
        "The digital world is ever evolving. Where new markets and consumers are on the bright side, the underbelly of digispace is also filled with bots and fraudsters. Sadly, partner marketing campaigns often run into the risk of being hijacked by malicious agents. The result – high investment costs and botched-up performance. Before bad turns to worse, level up your fraud shields with the latest tech in the field!",
      links: [
        { href: "#", text: "For Ad Agencies & Brands →" },
        { href: "#", text: "For iGaming Industry →" },
      ],
      imageSrc: "https://trackier.com/wp-content/uploads/2023/10/Group-33780.svg",
      reverse: false,
    },
  ];

  return (
    <Box
      sx={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </Box>
  );
};

export default Attribution;
