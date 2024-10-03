import React, { useState, useRef, useEffect } from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";






const HotelMasonryLayout = () => {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(1);
  
  const [images, setImages] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current ? containerRef.current.offsetWidth : 0;

      if (width > 1200) {
        setColumns(4);
      } else if (width > 900) {
        setColumns(3);
      } else if (width > 600) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    // Call once to set the initial columns
    handleResize();

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <Box ref={containerRef} sx={{ padding: "20px" }}>
      <ImageList variant="masonry" cols={columns} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={`image-${image}`}>
            <img
              src={image}
              alt={`Hotel Masonry ${index + 1}`}
              loading="lazy"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
                borderRadius: "10px",
                opacity: 1, // Initially hidden
                transition: "opacity 0.3s ease", // Smooth transition on hover
                "&:hover": {
                  opacity: 0, // Show overlay on hover
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default HotelMasonryLayout;
