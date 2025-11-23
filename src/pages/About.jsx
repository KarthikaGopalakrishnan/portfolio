import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

export default function About() {
  // Calculate years of experience from July 2018
  const calculateExperience = () => {
    const startDate = new Date(2018, 6, 1); // July 2018 (month is 0-indexed)
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    const monthDifference = currentDate.getMonth() - startDate.getMonth();
    
    if (monthDifference < 0) {
      years--;
    }
    
    const dayDifference = currentDate.getDate() - startDate.getDate();
    const months = monthDifference < 0 ? 12 + monthDifference : monthDifference;
    const days = dayDifference < 0 ? months > 0 ? 30 : 0 : dayDifference;
    
    if (years > 0) {
      return `${years}+ years`;
    } else if (months > 0) {
      return `${months}+ months`;
    } else {
      return 'Less than a month';
    }
  };

  const yearsOfExperience = calculateExperience();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I'm a Senior Software Engineer with {yearsOfExperience} of experience designing and building user-centric, scalable interfaces. I combine deep technical expertise with a passion for exceptional user experiences, driven by research and design thinking.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At my core, I'm fascinated by how technology can solve real human problems. I've led full-stack projects at scale, mentored junior engineers, and actively explored emerging areas like HCI research and AI-assisted design.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              My background spans UI-heavy frontend development, backend systems architecture, DevOps automation, and data analytics. I believe the best solutions come from understanding both sides: what users need and what systems can deliver.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Education
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    MS in Computer Science — Texas A&M Kingsville
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    B.Tech in Information Technology — Anna University
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Philosophy
                </Typography>
                <Typography variant="body2">
                  "Great design is invisible. It feels natural, obvious, and effortless. But beneath the surface lies deep research, thoughtful consideration of constraints, and iterative refinement. I strive to create interfaces that empower users and backend systems that reliably support them."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Skills Grid */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Expertise Areas
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'Frontend Development',
                items: ['React', 'Redux', 'Material-UI', 'ag-grid', 'JavaScript', 'TypeScript', 'Responsive & Accessible Design', 'Component Architecture'],
              },
              {
                title: 'Backend & Systems',
                items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Async Processing', 'Database Design'],
              },
              {
                title: 'DevOps & Automation',
                items: ['CI/CD Pipelines', 'GitHub Actions', 'Docker & Kubernetes', 'Cloud Infrastructure', 'Security & Compliance', 'Cucumber Automation Scripts'],
              },
              {
                title: 'UX & Design',
                items: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility (WCAG)', 'Information Architecture'],
              },
              {
                title: 'Emerging Tech',
                items: ['AI-Assisted Development', 'OpenAI Integration', 'LLM Applications', 'Conversational UI', 'Prompt Engineering'],
              },
            ].map((area, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      {area.title}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {area.items.map((item) => (
                        <Typography component="li" key={item} variant="body2" sx={{ mb: 1 }}>
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
