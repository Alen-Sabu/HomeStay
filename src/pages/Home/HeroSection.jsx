import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton";

const HeroSection = () => {
    return (
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          backgroundImage:
            "url(https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel-11-.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          animation: "zoomInBg 10s ease-in-out infinite", // Add animation here
          "@keyframes zoomInBg": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.1)", // Adjust the scale as needed
            },
            "100%": {
              transform: "scale(1)",
            },
          },
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
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
              },
  
              color: "#FFFFFF",
            }}
          >
            VARIETY VILLA
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
              maxWidth: "500px",
              margin: "auto",
              paddingBottom: "20px",
            }}
          >
            Stay in a cozy, fully-equipped home with stunning views and
            personalized service.
          </Typography>
          <CustomButton customstyles={{marginTop: "1rem"}}  text="Book Your Stay" url="/contact" />
        </Box>
      </Box>
    );
  };

  export default HeroSection;