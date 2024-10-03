import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme, customstyles }) => ({
  position: "relative",
  padding: "1rem 2rem",
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#ffffff",
  background: "linear-gradient(to bottom, #171717, #242424)",
  borderRadius: "9999px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4)",
  transition: "all 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #292929",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    right: "-1px",
    bottom: "-1px",
    left: "-1px",
    background: "linear-gradient(to bottom, #292929, #000000)",
    zIndex: -1,
    borderRadius: "9999px",
    transition: "all 0.2s ease",
    opacity: 1,
  },
  "&:active": {
    transform: "translateY(2px)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 1), 0 5px 10px rgba(0, 0, 0, 0.4)",
  },
  "&:hover svg": {
    filter: "drop-shadow(0 10px 20px rgba(50, 50, 50, 1)) drop-shadow(0 0 20px rgba(2, 2, 2, 1))",
    transform: "rotate(-35deg)",
  },
  // Media queries for responsiveness
  [theme.breakpoints.down("sm")]: {
    padding: "0.8rem 1.5rem",
    fontSize: "0.9rem",
  },
  ...customstyles
}));

const InnerButton = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to bottom, #171717, #242424)",
  width: "2rem",
  height: "2rem",
  marginLeft: "10px",
  borderRadius: "50%",
  boxShadow: "0 0 1px rgba(0, 0, 0, 1)",
  border: "1px solid #252525",
  transition: "all 0.2s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    right: "-1px",
    bottom: "-1px",
    left: "-1px",
    background: "linear-gradient(to bottom, #292929, #000000)",
    zIndex: -1,
    borderRadius: "9999px",
    transition: "all 0.2s ease",
    opacity: 1,
  },
  "& svg": {
    width: "1.5rem", // Adjusted SVG size
    height: "1rem", // Adjusted SVG size
    filter: "drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9)) drop-shadow(0 0 4px rgba(0, 0, 0, 1))",
    transition: "all 0.4s ease-in-out",
  },

  // Media queries for responsiveness
  [theme.breakpoints.down("sm")]: {
    width: "1.5rem",
    height: "1.5rem",
    marginLeft: "5px",
  },
  
}));

const ArrowIcon = () => (
  <SvgIcon>
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#AAAAAA", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#iconGradient)"
      d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
    />
  </SvgIcon>
);

const CustomButton = ({ text, customstyles, url }) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
  }

  return (
    <StyledButton customstyles={customstyles} onClick={handleClick}>
      {text}
      <InnerButton>
        <ArrowIcon />
      </InnerButton>
    </StyledButton>
  );
};

export default CustomButton;
