import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { useMediaQuery } from "../../component/useMediaQuery";

import {
  Toolbar,
  IconButton,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Hamburger from './Hamburger';
import profile from '../../data/profile/profile.jpeg';

function Header() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  
  return (
    <React.Fragment>
      <Box marginBottom='20px' sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {isSmallScreen && (
            <Hamburger onClick={handleHamburgerClick} isInitiallyOpen={false} />
          )}
          <IconButton>
            <SearchIcon />
          </IconButton>
            
          <Toolbar component="nav" variant="dense">
            <Button variant="text" onClick={() => navigate('/portfolio/blog')}>blog</Button>
            <Button variant="text" onClick={() => navigate('/portfolio/project')}>Project</Button>
          </Toolbar>
        </Box>
        <Box marginTop={'0.5%'}>
          <Avatar alt="Profile Photo" src={profile} sx={{ width: 36, height: 36 }}/>
        </Box>
      </Box>

    </React.Fragment>
    
  );
}

export default Header;
