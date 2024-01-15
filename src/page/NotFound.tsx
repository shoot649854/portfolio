import Box from '@mui/material/Box';

import NotFound1 from '../data/NotFound/NotFound1.png';

const NotFound = () => {
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="80vh"
    >
      
      <Box marginTop={4}>
        <img src={NotFound1} alt="Opened Laptop" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Box>

  );
}

export default NotFound;
