import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainFeaturedPost from '../component/PostComponent/MainFeaturedPost';
import FeaturedPost from '../component/PostComponent/FeaturedPost';
import Main from '../component/PostComponent/Main';
import Sidebar from '../component/PostComponent/SideBar';
import post1 from '../data/blog-post.1.md';

import ProjectNagoya2 from '../data/project2/projectNagoya2.png'
import ProjectQiitaFD1 from '../data/project1/projectQiitaFD2.jpeg'
import ProjectSymposium from '../data/project3/projectSymposium1.jpeg';

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const defaultTheme = createTheme();

function Homepage() {
  const MainFeaturedPostTitle = "Electric Sheep Hackathon";
  const MainFeaturedPostDescription = "Collaborated with Japense university students to create AR App with Flutter that Toyota sponsors. Utilize Luma API and Google Map API for 3D models and map feature. Our proposal would be reviewed outside the project and presented at Toyota HQ in Japan.";
  const MainFeaturedPostLinkToPage = "/portfolio/project/2";

  const FeaturedPost1Title = "Health Tech Hackathon";
  const FeaturedPost1Description = "Developed a platform to assist paperwork in medical industry with GPT API to create medical SOAP forms, initial medical record documents for all patients. Used python Flask (Frontend), gpt api, and github page";
  const FeaturedPost1PostLinkToPage = "/portfolio/project/1";

  const FeaturedPost2Title = "European Symposium Cyberwarfare";
  const FeaturedPost2Description = "Researched on cyber-warfare I presented at research project. Worked with technology expert Kenneth Geers and my mentor, professor Alani Mayada.";
  const FeaturedPost2PostLinkToPage = "/portfolio/project/3";

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Container maxWidth="lg">
        
        <MainFeaturedPost title={MainFeaturedPostTitle} description={MainFeaturedPostDescription} image={ProjectNagoya2} LinkToPage={MainFeaturedPostLinkToPage} date='1/3/2023'/>

        <Grid container spacing={4}>
          <FeaturedPost title={FeaturedPost1Title} description={FeaturedPost1Description} date='1/3/2023' image={ProjectQiitaFD1} LinkToPage={FeaturedPost1PostLinkToPage}/>
          <FeaturedPost title={FeaturedPost2Title} description={FeaturedPost2Description} date='3/1/2023' image={ProjectSymposium} LinkToPage={FeaturedPost2PostLinkToPage}/>
        </Grid>

        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>

      </Container>

    </ThemeProvider>
  );
}

export default Homepage;