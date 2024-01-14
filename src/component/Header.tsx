import * as React from 'react';
import { useNavigate } from 'react-router';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';

import profile from '../data/profile/profile.jpeg';

function Header() {
  const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
            
          <Toolbar component="nav" variant="dense">
            <Button variant="text" onClick={() => navigate('/blog')}>blog</Button>
            <Button variant="text" onClick={() => navigate('/project')}>Project</Button>
          </Toolbar>
        </Box>
        <Avatar alt="Profile Photo" src={profile} />
      </Box>

    </React.Fragment>
    
  );
}

export default Header;
