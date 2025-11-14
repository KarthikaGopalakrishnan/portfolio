import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1976d2',
                cursor: 'pointer',
                '&:hover': { opacity: 0.8 },
              }}
            >
              KG
            </Typography>
          </RouterLink>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ color: '#212121', fontWeight: 500 }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/projects"
              color="inherit"
              sx={{ color: '#212121', fontWeight: 500 }}
            >
              Projects
            </Button>
            <Button
              component={RouterLink}
              to="/lab"
              color="inherit"
              sx={{ color: '#212121', fontWeight: 500 }}
            >
              Lab
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              color="primary"
              variant="contained"
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
