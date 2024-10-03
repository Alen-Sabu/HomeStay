import React, {useEffect, useState} from "react";
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";

// Dummy images for the carousel
const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
  "https://via.placeholder.com/800x400?text=Image+4",
];

// Carousel settings using react-slick
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const Features = () => {
  const [images, setImages] = useState([])

  const homefeatures = [
    "“Experience true comfort with our cozy accommodations and personalized services.”",
    "“Indulge in local cuisine with meals prepared by our in-house chef.”",
    "“Relax in nature with breathtaking views and serene surroundings.”",
    "“Enjoy modern amenities like free Wi-Fi, private balconies, and more.”",
  ];
  useEffect(() => {
    const imagessection = import.meta.glob('../../assets/*.{jpg,jpeg}');
    
    // Resolve all promises to get the URLs
    const loadImages = async () => {
      const paths = await Promise.all(
        Object.keys(imagessection).map(async (key) => {
          const img = await imagessection[key]();
          return img.default; // Vite loads images with a default export
        })
      );
      setImages(paths);
     
      
    };

    loadImages();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#000", // Black background
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <Container sx={{ mt: 4, mb: 8 }}>
        {/* Feature Page Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Our Key Features
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ mb: 4, color: "grey" }}
        >
          Explore some of the key features we offer through this visual journey.
        </Typography>

        {/* Carousel Section */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", sm: "auto" },
            margin: "0 auto",
            padding: "0px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            maxHeight: "800px",
          }}
        >
          <Slider {...carouselSettings}>
            {images.map((img, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Feature ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: { xs: "300px", sm: "auto" }, // Responsive height for mobile and larger screens
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Feature Content Carousel */}
        <Box
        sx={{
          width: "100%",
          height: "auto",
          margin: "15px auto",
          padding: "0px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          background: "transparent",
          color: "#fff",
        }}
      >
      <Slider {...carouselSettings}>
      {homefeatures.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            component="blockquote"
            sx={{
              fontStyle: "italic",
              color: "#fff",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            {feature}
          </Typography>
        </Box>
      ))}
    </Slider>
      </Box>
      </Container>
    </Box>
  );
};

export default Features;
