import { Link } from "react-router-dom";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { FeaturedPostProps } from "../../Types";

const FeaturedPost = (props: FeaturedPostProps) => {
  const { title, description, date, image, imageText, LinkToPage } = props;

  return (
    <Grid item xs={12} md={6}>
      <Link to={LinkToPage} style={{ textDecoration: "none" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
            alt={imageText}
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default FeaturedPost;
