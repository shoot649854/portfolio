import { Typography, Box } from '@mui/material';
import CodeSegment from '../component/CodeSegment';
import ProjectHeader from '../component/ProjectHeader';
import NotFound from '../data/NotFound/NotFound1.png';

const ProjectNagoya = () => {
  const editedDate = "814/1/2023";
  const projectTitle = "Electric Sheep Hackathon (Mobility and Big Data)";
  const pythonCode =
  `
  import random
  import statistics
  
  # Generate a random list of 10 integers between 1 and 100
  random_numbers = [random.randint(1, 100) for _ in range(10)]
  
  # Print the random list
  print("Random Numbers:", random_numbers)
  
  # Calculate and print statistics
  mean_value = statistics.mean(random_numbers)
  median_value = statistics.median(random_numbers)
  max_value = max(random_numbers)
  min_value = min(random_numbers)
  `;

  return (
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} tags={['Mobile Application', 'Google Map API']}/>

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

export default ProjectNagoya;
