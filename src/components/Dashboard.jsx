import { Box, Typography, Button, CardMedia } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#E1E7FF", padding: { xs: "20px", md: "40px" }, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography variant="h3" sx={{ fontWeight: "800", marginBottom: 2, fontFamily: "Arial, sans-serif", color: '#0e0e52', marginTop: '10px', textAlign: { xs: "center", md: "left" } }}>
          Achieve Marketing Success  With
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "800", marginBottom: 2, fontFamily: "sans-serif", color: '#0e0e52', marginTop: '10px', textAlign: { xs: "center", md: "left" } }}>
          Scalable Attribution Tracking Solution
        </Typography>
        <Typography sx={{ marginBottom: 2, fontWeight: "600", color: '#0e0e52', marginTop: '10px', textAlign: { xs: "center", md: "left" } }}>
          Optimise Your Marketing Performance Skillfully With Real-time Partner Analytics Data
        </Typography>
        <Box sx={{ display: "flex", gap: 2, marginBottom: 5, marginTop: '10px', justifyContent: { xs: "center", md: "flex-start" } }}>
          <Button 
            variant="contained" 
            sx={{ padding: '8px 10px',minWidth: '25px', fontSize: '16px', fontWeight: '500',  backgroundColor: '#0e0e52', '&:hover': { backgroundColor: '#0c0c4a' } }}
          >
            Request Demo
          </Button>
          <Button 
            variant="contained" 
            sx={{ padding: '8px 10px',minWidth: '25px', fontSize: '16px', fontWeight: '500', backgroundColor: '#2176ff', '&:hover': { backgroundColor: '#2176ff' } }}
          >
            Free Trial
          </Button>
        </Box>
       <Box 
  sx={{ 
    display: "flex", 
    flexWrap: "wrap", 
    gap: 2, 
    marginTop: '10px', 
    justifyContent: { xs: "center", md: "flex-start" } 
  }}
>
  <CardMedia
    component="img"
    src="https://trackier.com/wp-content/uploads/2024/01/PartnerManagement_BestEstimatedROI_Roi.svg"
    alt="Image 1"
    sx={{ width: { xs: "80px", md: "100px" }, height: "auto", objectFit: "contain" }}
  />
  <CardMedia
    component="img"
    src="https://trackier.com/wp-content/uploads/2024/01/PartnerManagement_EasiestSetup_EaseOfSetup.svg"
    alt="Image 2"
    sx={{ width: { xs: "80px", md: "100px" }, height: "auto", objectFit: "contain" }}
  />
  <CardMedia
    component="img"
    src="https://trackier.com/wp-content/uploads/2024/01/PartnerManagement_FastestImplementation_GoLiveTime.svg"
    alt="Image 3"
    sx={{ width: { xs: "80px", md: "100px" }, height: "auto", objectFit: "contain" }}
  />
  <CardMedia
    component="img"
    src="https://trackier.com/wp-content/uploads/2024/01/PartnerManagement_HighPerformer_AsiaPacific_HighPerformer.svg"
    alt="Image 4"
    sx={{ width: { xs: "80px", md: "100px" }, height: "auto", objectFit: "contain" }}
  />
  <CardMedia
    component="img"
    src="https://trackier.com/wp-content/uploads/2023/10/GPTW.png"
    alt="Image 5"
    sx={{ width: { xs: "60px", md: "80px" }, height: "auto", objectFit: "contain" }}
  />
</Box>

      </Box>
      <Box sx={{ maxWidth: "100%", maxHeight: " 300%", margin: "0 auto", display: { xs: "none", md: "block" } }}>
  <CardMedia
    component="img"
    sx={{ height: "auto", maxHeight: " 600px", width: "200%" }}
    image="https://trackier.com/wp-content/uploads/2023/06/illustration_Dashboard-1.svg"
    alt="image"
  />
</Box>

    </Box>
  );
};

export default Dashboard;
