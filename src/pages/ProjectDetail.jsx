import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Project not found</Typography>
        <Button onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{ mb: 4, textTransform: 'none', fontWeight: 600 }}
        >
          Back to Projects
        </Button>

        {/* Project Header */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} color="primary" variant="outlined" />
            ))}
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            {project.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px' }}>
            {project.longDescription}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Case Study */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            {/* Context & Problem */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Context & Problem
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {project.context}
              </Typography>
              <Typography variant="body1">{project.problem}</Typography>
            </Box>

            {/* Constraints */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Constraints
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.constraints.map((constraint, idx) => (
                  <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                    {constraint}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Process */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                UX/Process
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.process.map((item, idx) => (
                  <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Technical Details */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Technical Details
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.technical.map((item, idx) => (
                  <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Impact */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Impact
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(project.impact).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Card>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {key.replace('metric', 'Metric ')}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Technologies */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Technologies
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth
                  >
                    View Demo
                  </Button>
                  <Button
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth
                  >
                    View Repository
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
          {prevProject ? (
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(`/projects/${prevProject.id}`)}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {prevProject.title}
            </Button>
          ) : (
            <Box />
          )}
          {nextProject ? (
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(`/projects/${nextProject.id}`)}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {nextProject.title}
            </Button>
          ) : (
            <Box />
          )}
        </Box>
      </Container>
    </Box>
  );
}
