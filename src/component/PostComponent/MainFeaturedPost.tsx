import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { MainFeaturedPostProps } from '../../Types';

const MainFeaturedPost = (props: MainFeaturedPostProps) => {
  const { title, description, image, imageText, LinkToPage, date } = props;

  return (
    <Link to={LinkToPage} style={{ textDecoration: 'none' }}>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${image})`,
        }}
      >
        {<img style={{ display: "none" }} src={image} alt={imageText} />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                {date}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default MainFeaturedPost;
