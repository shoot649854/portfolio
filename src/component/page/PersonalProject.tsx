import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import laptop_photo from '../image/opened-laptop.jpg';

const PersonalProject = () => {
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="80vh"
    >
      <Typography variant="h4" component="div" gutterBottom>
        Welcome to My Personal Project
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is a default content for your personal project page. You can customize it to showcase your project details, achievements, and more.
      </Typography>
      <Box marginTop={4}>
        <img src={laptop_photo} alt="Opened Laptop" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Box>

  );
}

export default PersonalProject;
