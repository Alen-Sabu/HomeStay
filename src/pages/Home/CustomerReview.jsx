import React from 'react';
import { Box, Typography, Paper, Rating, Divider } from '@mui/material';

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Great experience! The homestay was very comfortable and the hosts were friendly.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "The food was amazing, and I loved the local tour they arranged. Highly recommend!",
  },
  {
    name: "Mark Johnson",
    rating: 4.5,
    comment: "Very cozy and well-located. I will definitely stay here again next time.",
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "A beautiful and peaceful place to stay. The hosts were very accommodating.",
  },
];

const CustomerReviews = () => {
  return (
    <Box sx={{ py: 6, px: 4, background: "transparent" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{color:"#fff"}}>
        What Our Guests Say
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, color:"grey" }}>
        Real reviews from real guests who have stayed with us
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4 
        }}
      >
        {reviews.map((review, index) => (
          <Box 
            key={index}
            sx={{
              width: { xs: '100%', sm: '48%' }, // Full width on mobile, half width on tablet+
              backgroundColor: '#fff',
              p: 4,
              borderRadius: '15px',
              boxShadow: 6,
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', color:"black" }}>
              "
            </Typography>
            
            
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              "{review.comment}"
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Rating value={review.rating} precision={0.5} readOnly sx={{ mt: 1 }} />
            <Typography variant="h2" sx={{ fontWeight: 'bold', color:"black" }}>
              "
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerReviews;
