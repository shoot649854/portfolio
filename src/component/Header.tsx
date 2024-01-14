import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavigateFunction, useNavigate } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import Project from './page/Project';
import Blog from './Blog';
import { Box } from '@mui/system';

function Header() {
  const navigate: NavigateFunction = useNavigate();
  
  return (
    <React.Fragment>

      <Box margin='20px' sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
          
        <Toolbar component="nav" variant="dense">
          <Button variant="text" onClick={() => navigate('/blog')}>blog</Button>
          <Button variant="text" onClick={() => navigate('/project')}>Project</Button>
        </Toolbar>
      </Box>

    </React.Fragment>
    
  );
}

export default Header;
