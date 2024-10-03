import { Box, Container, Typography } from "@mui/material";
import aboutImage from '../../assets/01.jpeg';
import CustomButton from "../../components/CustomButton";

const AboutUs = () => {
    return (
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stacks on small screens, side by side on larger screens
          alignItems: "center",
          
          py: 5,
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="About Us"
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, half on larger screens
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            p: 3,
            width: { xs: "100%", md: "50%" }, // Full width on small screens, half on larger screens
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="body1" sx={{ color: "#a39f9f", lineHeight: 1.6 }}>
              At Variety Villa, we believe in providing a home away from home with
              unparalleled comfort, stunning views, and personalized service. Our
              homestay offers a cozy, fully-equipped environment where guests can
              relax and enjoy their stay. Join us and experience the perfect blend
              of hospitality and luxury.
            </Typography>
            <CustomButton customstyles={{marginTop: "2rem"}} text="More About Us" url="/about" />
          </Container>
        </Box>
      </Box>
    );
  };
  

  export default AboutUs;