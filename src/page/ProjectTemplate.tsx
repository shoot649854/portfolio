import { Typography, Box } from '@mui/material';
import CodeSegment from '../component/CodeSegment';
import ProjectHeader from '../component/ProjectHeader';

const ProjectTemplate = () => {
  const editedDate = '1/14/2024';
  const projectTitle = 'Title'

  return (
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} imageSrcPath='../data/image/opened-laptop.jpg' />
      
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
