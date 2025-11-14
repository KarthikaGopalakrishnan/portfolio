import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#fafafa', py: 6, mt: 8, borderTop: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Karthika Gopalakrishnan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Senior UI Engineer & UX Designer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Links
            </Typography>
            <Link href="#" underline="none" sx={{ display: 'block', mb: 1, color: '#1976d2' }}>
              LinkedIn
            </Link>
            <Link href="#" underline="none" sx={{ display: 'block', mb: 1, color: '#1976d2' }}>
              GitHub
            </Link>
            <Link href="#" underline="none" sx={{ display: 'block', color: '#1976d2' }}>
              Email
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Navigation
            </Typography>
            <Link href="/" underline="none" sx={{ display: 'block', mb: 1, color: '#1976d2' }}>
              Home
            </Link>
            <Link href="/projects" underline="none" sx={{ display: 'block', mb: 1, color: '#1976d2' }}>
              Projects
            </Link>
            <Link href="/about" underline="none" sx={{ display: 'block', color: '#1976d2' }}>
              About
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid #e0e0e0', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 Karthika Gopalakrishnan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
