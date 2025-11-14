import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Card, CardContent } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          I'm always interested in discussing new projects, research ideas, or opportunities. Feel free to reach out!
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={5}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 500 }}>
                  karthika@example.com
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  LinkedIn
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Connect with me on LinkedIn
                </Typography>
                <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 500 }}>
                  linkedin.com/in/karthika
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  GitHub
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Check out my projects and contributions
                </Typography>
                <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 500 }}>
                  github.com/karthika
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
