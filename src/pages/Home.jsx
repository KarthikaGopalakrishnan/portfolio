import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Karthika Gopalakrishnan
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            Senior UI Engineer & UX Designer
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Designing and building intuitive, scalable interfaces for real-world impact. Specializing in full-stack UI development, user experience design, and emerging technologies.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              View Projects
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              size="large"
            >
              About Me
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Core Skills
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Frontend Development',
              skills: ['React', 'Redux', 'Material-UI', 'ag-grid', 'Responsive Design'],
            },
            {
              title: 'Backend & DevOps',
              skills: ['Java', 'Spring Boot', 'Node.js', 'CI/CD', 'Cloud Infrastructure'],
            },
            {
              title: 'Data & Analytics',
              skills: ['Python', 'Pandas', 'Plotly', 'Dashboard Design', 'Anomaly Detection'],
            },
            {
              title: 'UX & Design',
              skills: ['User Research', 'Wireframing', 'Component Design', 'Accessibility', 'Design Systems'],
            },
          ].map((skillGroup, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {skillGroup.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {skillGroup.skills.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          backgroundColor: '#e3f2fd',
                          color: '#1976d2',
                          px: 2,
                          py: 1,
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#fafafa', my: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Featured Projects
        </Typography>
        <Grid container spacing={3}>
          {featuredProjects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="outlined"
            size="large"
          >
            View All Projects
          </Button>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Let's work together
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Interested in collaborating? I'm always open to discussing new projects, ideas, or opportunities.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ backgroundColor: 'white', color: '#1976d2', fontWeight: 700 }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
