import { Avatar, Typography, Box } from '@mui/material';
import profile from '../data/profile/profile.jpeg';
import CodeSegment from '../component/CodeSegment';


const ProjectTemplate = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Box>
      <Box sx={{display: 'flex', gap: 2 }} >
        <Avatar alt="Profile Photo" src={profile} sx={{ width: 15, height: 15 }}/>
        <Typography variant="h3" fontSize="15px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
          Shoto Morisaki
        </Typography>
      </Box>
      <Typography variant="h3" fontSize="42px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
          ProjectTitle
      </Typography>
      <Typography variant="subtitle1">
        Editted Date: {currentDate}
      </Typography>
      
      <Typography variant="subtitle1" fontSize="13px" margin='20px' color="black" fontFamily="sans-serif">
        Description Description Description Description Description Description Description Description Description Description Description Description 
        Description Description Description Description Description Description Description Description Description Description Description Description 
        Description Description Description Description Description Description Description Description Description Description Description Description 
      </Typography>

      <CodeSegment language="typescript" showLineNumbers={true} startingLineNumber={1}>
        const example = 'Hello World';
      </CodeSegment>


    </Box>
  );
}

export default ProjectTemplate;
