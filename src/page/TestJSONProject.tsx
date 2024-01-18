import { Box } from '@mui/material';
import ProjectHeader from '../component/ProjectComponent/ProjectHeader';

import jsonArticle from '../data/project2/article.json';
import PostRenderer from '../component/PostRenderer';

const TestJSONProject = () => {
  const { projectTitle, editedDate, tags, article } = jsonArticle;
  return (
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} tags={tags} />

      {article.map((section, index) => PostRenderer(section, index))}
    </Box>
  );
};

export default TestJSONProject;
