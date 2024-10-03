import React from 'react';
import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 6,
        px: 4,
        mt: 'auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        sx={{ maxWidth: '1200px', mx: 'auto' }}
      >
        {/* Left Section: Logo and Description */}
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" component="div" gutterBottom>
            Variety
          </Typography>
          <Typography variant="body2" color="grey.500">
             Building a better future, one step at a time.
          </Typography>
        </Box>

        {/* Center Section: Navigation Links */}
        <Stack direction="row" spacing={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/about" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="/features" color="inherit" underline="hover">
            Features
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Stack>

        {/* Right Section: Social Media Icons */}
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton href="#" sx={{ color: 'white' }} aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{ color: 'white' }} aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={{ color: 'white' }} aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton href="#" sx={{ color: 'white' }} aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>

      {/* Bottom Section: Copyright */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="grey.500">
          © {new Date().getFullYear()} Variety. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
