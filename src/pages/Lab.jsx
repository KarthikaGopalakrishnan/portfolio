import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Lab() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
          Lab / Experiments
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This section is coming soon. I'll be showcasing prototypes, research explorations, and side projects here.
        </Typography>
      </Container>
    </Box>
  );
}
