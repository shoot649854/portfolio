import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useMatchMedia } from "../component/useMatchMedia";

import projectQiitaFD5 from '../data/project1/projectQiitaFD1.jpeg';
import prohjectNagoya1 from '../data/project2/projectNagoya1.jpeg';
import projectSymposium1 from '../data/project3/projectSymposium1.jpeg';

const ProjectGallary = () => {
  const isSmallScreen = useMatchMedia("(max-width: 800px)");

  return (
    <Box>
      <Typography variant="h1" fontSize="42px" fontWeight="bold" color="black" marginBottom="20px" fontFamily="sans-serif">
          Project Gallary
      </Typography>
      <Typography variant="subtitle1" fontSize="13px" margin='20px' color="black" fontFamily="sans-serif">
        Explore my Project Gallery showcasing innovative endeavors. 
        In collaboration with Japanese university students, the Qiita × Fast DOCTOR Health Tech Hackathon led to the creation of an AR App with Flutter, 
        sponsored by Toyota. The app integrated Luma API and Google Map API for 3D models and mapping features. Additionally, the Electric Sheep Hackathon 
        focused on Mobility and Big Data, resulting in another AR App creation. Lastly, my involvement in the Symposium on Cyberwarfare in Russia and Ukraine 
        involved in-depth research on cyber warfare, with presentations alongside technology expert Kenneth Geers and mentor Professor Alani Mayada. 
        Dive into a world of technological exploration and problem-solving.
      </Typography>

      <Box display="flex" sx={{ gap: 2, flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <Link to="/portfolio/project/1" style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 345, width: isSmallScreen ? '100%' : 'auto'  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectQiitaFD5}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Qiita × Fast DOCTOR Health Tech Hackathon
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Collaborated with Japense university students to create AR App with Flutter that Toyota sponsors. 
                  Utilize Luma API and Google Map API for 3D models and map feature
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/portfolio/project/2"style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 345, width: isSmallScreen ? '100%' : 'auto'  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={prohjectNagoya1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Electric Sheep Hackathon (Mobility and Big Data)
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Collaborated with Japense university students to create AR App with Flutter that Toyota sponsors. 
                  Utilize Luma API and Google Map API for 3D models and map feature
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/portfolio/project/3"style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 345, width: isSmallScreen ? '100%' : 'auto'  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectSymposium1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Symposium Cyberwarfare in Russia and Ukraine
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Researched on cyber-warfare I presented at research project. Worked with technology expert Kenneth Geers and my mentor, professor Alani Mayada.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Box>

    </Box>

  );
}

export default ProjectGallary;
