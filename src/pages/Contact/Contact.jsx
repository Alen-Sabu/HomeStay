import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gmq7ru8", //service ID
        "template_vj0rzlc", //template ID
        {
          to_name: "Alen Sabu",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "8QhdQ2cUq2aJDXe8x"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          toast.error("Failed to send the message. Please try again");
        }
      );
  };

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
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          backgroundColor: "#1e1e1e", // Dark grey form background
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "#b0b0b0" }}
        >
          We'd love to hear from you. Please fill out the form below.
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column", // Align everything vertically
            gap: 2, // Space between form elements
          }}
        >
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
              label: { color: "#b0b0b0" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#555",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
              label: { color: "#b0b0b0" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#555",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#333",

              input: { color: "#fff" },
              label: { color: "#b0b0b0" },
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": {
                  borderColor: "#555",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#ff4081",
              "&:hover": {
                backgroundColor: "#ff79b0",
              },
              padding: "10px",
              color: "#fff",
            }}
          >
            Submit
          </Button>
        </Box>

        {/* Toaster Notification Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
