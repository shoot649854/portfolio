import { Typography, Box } from '@mui/material';
import CodeSegment from '../component/ProjectComponent/CodeSegment';
import ProjectHeader from '../component/ProjectComponent/ProjectHeader';
import NotFound from '../data/NotFound/NotFound1.png';

const ProjectTemplate = () => {
  const editedDate = "1/1/2023";
  const projectTitle = "Title";
  const pythonCode =
  `print('Hello World!')
print('Get a mug of coffee!')
`;

  return (
    //Ideathon / Brainstorming, Solution, Struggle, Demo, Conclusion
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} tags={['Tag1', 'Tag2']}/>

      <Box>
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Description Description Description Description Description 
          Description Description Description Description Description 
          Description Description Description Description Description 
        </Typography>
        <Box
          marginBottom={5}
          sx={{
            background: `url('${NotFound}')`,
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
          Subtitle
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Description Description Description Description Description 
          Description Description Description Description Description 
          Description Description Description Description Description 
        </Typography>
      </Box>

      <Box>
        <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {pythonCode}
        </CodeSegment>
      </Box>

    </Box>
  );
}

export default ProjectTemplate;
