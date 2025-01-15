import React from 'react';
import { Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'info' },
    { title: 'Project 2', description: 'info' },
    { title: 'Project 3', description: 'info' },
  ];

  return (
    <ProjectsContainer id="projects">
      <Typography variant="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ProjectsContainer>
  );
}

export default Projects;

