import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.shortDescription}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontWeight: 500 }}
            />
          ))}
          {project.tags.length > 3 && (
            <Chip
              label={`+${project.tags.length - 3}`}
              size="small"
              variant="outlined"
              sx={{ fontWeight: 500 }}
            />
          )}
        </Box>
        <Button
          component={RouterLink}
          to={`/projects/${project.id}`}
          endIcon={<ArrowForwardIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            color: '#1976d2',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            },
          }}
        >
          View Case Study
        </Button>
      </CardContent>
    </Card>
  );
}
