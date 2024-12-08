import React from "react";
import { Box, Typography, Grid, Link, CardMedia } from "@mui/material";

const Section = ({ title, description, links, imageSrc, reverse }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        marginBottom: "40px", 
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
        {links.map((link, index) => (
          <div key={index}>
            <Link href={link.href} underline="hover">
              {link.label}
            </Link>
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
            display: { xs: "none", md: "block" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Section;
