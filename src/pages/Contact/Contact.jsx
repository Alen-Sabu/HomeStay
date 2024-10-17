import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_gmq7ru8", //service ID
          "template_vj0rzlc", //template ID
          {
            to_name: "Alen Sabu",
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          "8QhdQ2cUq2aJDXe8x"
        )
        .then(
          (response) => {
            toast.success("Message sent successfully");
            resetForm(); // Reset the form on success
          },
          (err) => {
            toast.error("Failed to send the message. Please try again");
          }
        );
    },
  });

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
          onSubmit={formik.handleSubmit}
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
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Trigger validation on blur
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Trigger validation on blur
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Trigger validation on blur
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
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
