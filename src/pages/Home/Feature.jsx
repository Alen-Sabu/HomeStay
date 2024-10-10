import React, { useEffect } from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const features = [
  {
    id: uuidv4(),
    title: "Luxury Rooms",
    description: "Experience the best comfort in our premium rooms.",
  },
  {
    id: uuidv4(),
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
  },
  {
    id: uuidv4(),
    title: "Free Wi-Fi",
    description: "Stay connected with our high-speed internet service.",
  },
];

const services = [
  {
    id: uuidv4(),
    title: "Rooms",
    description: "Clean rooms with AC and Non Ac",
  },
  {
    id: uuidv4(),
    title: "Outdoor Activities",
    description: "Access to gardens, outdoor seating",
  },
  {
    id: uuidv4(),
    title: "Personalized Attention",
    description: "Warm, friendly hosts offering personalized service and attention.",
  },
];

const FeatureCard = ({ title, description }) => (
  <Card
    sx={{
      bgcolor: "black",
      color: "white",
      mb: 2,
      mx: 1,
      borderRadius: 2,
      boxShadow: 3,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const Feature = () => {
  return (
    <Box sx={{ py: 5, bgcolor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "black" }}
        >
          Our Features
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            mb: 4,
          }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Box>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "black" }}
        >
          Our Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          {services.map((service) => (
            <FeatureCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;
