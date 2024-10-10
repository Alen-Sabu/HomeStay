import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const AddressSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={{ xs: "20px", sm: "40px" }} // Smaller padding on mobile, larger on desktop          // Black background
      color="white" // White text
      textAlign="center"
      sx={{ minHeight: "300px" }}
    >
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Our Location
      </Typography>

      {/* Location */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }} // Stacks vertically on mobile, horizontally on larger screens
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <IconButton
          color="primary"
          component="a"
          href="https://www.google.com/maps/place/VARIETY+VILLA+HOMESTAY/@9.770118,77.0901339,19z/data=!4m14!1m7!3m6!1s0x3b07af007734ed25:0x81f8839da118323!2sVARIETY+VILLA+HOMESTAY!8m2!3d9.770118!4d77.0907776!16s%2Fg%2F11w86zz553!3m5!1s0x3b07af007734ed25:0x81f8839da118323!8m2!3d9.770118!4d77.0907776!16s%2Fg%2F11w86zz553?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D" // Google Maps URL
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          <LocationOnIcon sx={{ color: "#ff9800", fontSize: "30px" }} />
        </IconButton>
        <Typography
          variant="body1"
          marginLeft={{ sm: "10px" }}
          marginTop={{ xs: "10px", sm: "0px" }}
        >
          Q3CR+28R, 185, National Highway, Vellayamkudi, Kerala
        </Typography>
      </Box>

      {/* Phone */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <IconButton color="primary">
          <PhoneIcon sx={{ color: "#ff9800", fontSize: "30px" }} />
        </IconButton>
        <Typography
          variant="body1"
          marginLeft={{ sm: "10px" }}
          marginTop={{ xs: "10px", sm: "0px" }}
        >
          +91 9526958302
        </Typography>
      </Box>

      {/* Email */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <IconButton color="primary">
          <EmailIcon sx={{ color: "#ff9800", fontSize: "30px" }} />
        </IconButton>
        <Typography
          variant="body1"
          marginLeft={{ sm: "10px" }}
          marginTop={{ xs: "10px", sm: "0px" }}
        >
          varietyvilla@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default AddressSection;
