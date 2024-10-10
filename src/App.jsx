import React from "react";
import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Features from "./pages/Features/Features";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflowX: "hidden"}}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
