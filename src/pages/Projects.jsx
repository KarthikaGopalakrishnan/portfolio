import React, { useState } from 'react';
import { Container, Typography, Grid, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projects, projectsByCategory } from '../data/projects';

export default function Projects() {
  const [category, setCategory] = useState('All');

  const displayedProjects = category === 'All' ? projects : projectsByCategory[category] || [];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A selection of projects showcasing UI/UX design, full-stack development, and emerging technologies.
        </Typography>

        {/* Filter */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <ToggleButtonGroup
            value={category}
            exclusive
            onChange={(e, newCategory) => newCategory && setCategory(newCategory)}
            sx={{ flexWrap: 'wrap' }}
          >
            <ToggleButton value="All" sx={{ textTransform: 'none', fontWeight: 600 }}>
              All Projects
            </ToggleButton>
            <ToggleButton value="UI/UX" sx={{ textTransform: 'none', fontWeight: 600 }}>
              UI/UX
            </ToggleButton>
            <ToggleButton value="Backend" sx={{ textTransform: 'none', fontWeight: 600 }}>
              Backend
            </ToggleButton>
            <ToggleButton value="Automation" sx={{ textTransform: 'none', fontWeight: 600 }}>
              Automation
            </ToggleButton>
            <ToggleButton value="DevOps" sx={{ textTransform: 'none', fontWeight: 600 }}>
              DevOps
            </ToggleButton>
            <ToggleButton value="Data & Insights" sx={{ textTransform: 'none', fontWeight: 600 }}>
              Data & Insights
            </ToggleButton>
            <ToggleButton value="Innovation" sx={{ textTransform: 'none', fontWeight: 600 }}>
              Innovation
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <Grid container spacing={3}>
            {displayedProjects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="body1" color="text.secondary">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
