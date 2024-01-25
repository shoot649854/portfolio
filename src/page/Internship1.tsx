import { Typography, Box } from "@mui/material";
import ProjectHeader from "../component/ProjectComponent/ProjectHeader";
import Running from "../data/internship1/running.jpg";
import mapbox from "../data/internship1/mapbox.jpeg";
const Internship1 = () => {
  const editedDate = "1/25/2024";
  const projectTitle = "Software Engineering at Tsubasa";

  return (
    //Ideathon / Brainstorming, Solution, Struggle, Demo, Conclusion
    <Box>
      <ProjectHeader
        projectTitle={projectTitle}
        editedDate={editedDate}
        tags={["Internship", "Reat", "AWS", "Typescript"]}
      />

      <Box>
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Started in the summer of 2023 at a Japanese startup. Initial tasks
          involved creating a Running web application for user health.
          Explored the library for efficient demo development.
          Later, focused on front-end development, delving into AWS Cognito for
          user authentication. Acquired valuable experience in project
          initiation, client communication, and project completion.
        </Typography>
        <Box
          marginBottom={5}
          sx={{
            background: `url('${Running}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />
      </Box>

      <Box>
        <Typography
          variant="h2"
          fontSize="30px"
          fontWeight="Bold"
          margin="5px"
          color="black"
          fontFamily="sans-serif"
        >
          Introduction
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          My internship in Japan began in the summer of 2023. I had an
          internship at a start-up company, and what I was able to absorb was
          very significant. I don't think I can go into detail in this article
          due to the nature of my duties, but I will try to write as much as I
          can.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h2"
          fontSize="30px"
          fontWeight="Bold"
          margin="5px"
          color="black"
          fontFamily="sans-serif"
        >
          First Task
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          The first task I was assigned was to create a simple demonstration in
          Python. I was given this task because it is very easy to create an
          application, and because there is an ibrary that makes it possible to
          create a demonstration without having to start in earnest using react
          and the like. The project our team was assigned was an app that would
          draw user health information, so a major point of contention was how
          much potential we could show in a demonstration state.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h2"
          fontSize="30px"
          fontWeight="Bold"
          margin="5px"
          color="black"
          fontFamily="sans-serif"
        >
          Frontend Task
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Next to the demonstration, we were assigned the task of creating the
          front end. I had never done any front-end development before, so I was
          at a bit of a loss as to how to start and what the rules were, but I
          studied every day and learned a lot. One of the things I learned a lot
          about was the authentication using AWS cognitives. I learned a lot
          from the page where each user is given a password and username to sign
          in while protecting their personal information. It was also good to
          have practical experience of how a project starts, how to talk to
          clients, and how to finish the project.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h2"
          fontSize="30px"
          fontWeight="Bold"
          margin="5px"
          color="black"
          fontFamily="sans-serif"
        >
          Developing responsive Mapbox Feature  
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Box
          marginBottom={5}
          sx={{
            background: `url('${mapbox}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          We were able to receive real-time Chilean information on where the athletes 
          were, so we were able to display that geographic information on a map. 
          The difficult part was that we had envisioned a UI like Google Maps, but 
          due to funding, we had to use other maps, so we had to think thoroughly 
          about how to display the information in a way that would be easy for users to 
          understand. Also, since a map is like a collection of dots, zooming in and 
          out causes optimizations, so we had to think about how to speed up the process.
        </Typography>
      </Box>

    </Box>
  );
};

export default Internship1;
