import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProjectTemplate = () => {
  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <Box 
      
      sx={{
        backgroundColor: "#FFF"}}
        >
      <Typography variant="h2">
        Your Title Here
      </Typography>

      <Typography variant="subtitle1">
        Your Name Here
      </Typography>

      <Typography variant="subtitle1">
        Date: {currentDate}
      </Typography>
    </Box>
  );
}

export default ProjectTemplate;
