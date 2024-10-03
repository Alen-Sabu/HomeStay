import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Feature from "./Feature";
import AboutUs from "./AboutUs";
import CustomerReviews from "./CustomerReview";
import HotelMasonryLayout from "./HotelMasonryLayout";
import HeroSection from "./HeroSection";


const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 0,
        mt: 0,
      }}
    >
      <HeroSection />
      <AboutUs />
      <Feature />
      <CustomerReviews />
      <HotelMasonryLayout />
     
    </Box>
  );
};




export default Home;
