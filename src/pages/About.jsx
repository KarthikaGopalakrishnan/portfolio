import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I'm a Senior Software Engineer with 7.5+ years of experience designing and building user-centric, scalable interfaces. I combine deep technical expertise with a passion for exceptional user experiences, driven by research and design thinking.
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
                    MS in Computer Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Specialization in Human-Computer Interaction & UX Research
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    B.Tech in Information Technology
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Strong foundation in software engineering and systems design
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
                items: ['React', 'Redux', 'Material-UI', 'ag-grid', 'Responsive & Accessible Design', 'Component Architecture'],
              },
              {
                title: 'Backend & Systems',
                items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Async Processing', 'Database Design'],
              },
              {
                title: 'Data & Visualization',
                items: ['Python', 'Pandas', 'Plotly & Dash', 'Data Analysis', 'Anomaly Detection', 'Business Intelligence'],
              },
              {
                title: 'DevOps & Automation',
                items: ['CI/CD Pipelines', 'GitHub Actions', 'Docker & Kubernetes', 'Cloud Infrastructure', 'Security & Compliance'],
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
