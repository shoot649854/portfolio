import * as React from 'react';
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import laptop_photo from '../image/opened-laptop.jpg';

const Project = () => {

  return (
    <Box>
      <Box
        className="hero"
        marginBottom={10}
        height="calc(110vh - 120px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundImage: `url(${laptop_photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
    >
      <Box width="50%" textAlign="center">
        <Typography variant="h1" fontSize="42px" color="#FFF">
          Title
        </Typography>
        <Typography variant="body1" fontSize="18px" marginTop="20px" fontWeight="400" color="FFF">
          Description
        </Typography>
      </Box>
    </Box>
      
    <Link to="/project/1">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={laptop_photo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>

    </Box>

  );
}

export default Project;
