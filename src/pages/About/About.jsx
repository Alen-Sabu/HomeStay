import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import MapComponent from "./Maps";
import AddressSection from "./AddressSection";
// Dummy data for team and accommodations
const teamMembers = [
  {
    name: "John Doe",
    role: "Homestay Owner",
    image: "https://via.placeholder.com/150",
    bio: "John has been running the homestay for 5 years, ensuring every guest feels at home.",
  },
  {
    name: "Jane Smith",
    role: "Host & Chef",
    image: "https://via.placeholder.com/150",
    bio: "Jane prepares traditional meals for our guests and is passionate about hospitality.",
  },
];

const accommodations = [
  {
    name: "Deluxe Suite",
    description:
      "A luxurious room with a king-sized bed, stunning views, and private balcony.",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Cozy Cabin",
    description: "A rustic cabin perfect for a quiet, nature-filled getaway.",
    image: "https://via.placeholder.com/200",
  },
];
const About = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "100vh", s: "80vh" },
          backgroundImage:
            "url(https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel-11-.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          marginTop: { xs: "60px", md: "80px" }, // Adjust for mobile view
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "lg",
            p: 3,
            bgcolor: "transparent", // Transparent background to show overlay
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
              },
              color: "#FFFFFF",
            }}
          >
            Welcome to our Homestay
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              color: "#E0E0E0", // Light gray for body text, softer than pure white
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
              paddingBottom: "20px",
            }}
          >
            Your home away from home, nestled in the heart of Idukki. Whether
            you're a seasoned traveler or visiting for the first time, our
            homestay offers a unique blend of comfort, warmth, and an authentic
            local experience. At Variety Villa, we believe in the power of
            connection—whether it’s through the friendly conversations over
            breakfast or the stories shared by our guests around the fireplace.
            Our mission is simple: to make you feel at home, no matter how far
            you’ve traveled.
          </Typography>

          <CustomButton
            customstyles={{ marginTop: "1rem" }}
            text="Book Your Stay"
            url="/contact"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
        padding="20px"
      >
        {/* Left Side: Map */}
        <Box flex={1} marginTop="20px" marginBottom="20px">
          <MapComponent />
        </Box>
        <Box>
            <AddressSection />
        </Box>

       
      </Box>
    </Box>
  );
};

export default About;
