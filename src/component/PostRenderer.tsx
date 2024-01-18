import { Box, Typography } from '@mui/material';
import CodeSegment from './ProjectComponent/CodeSegment';
import VideoSegment from '../component/ProjectComponent/VideoSegment';
import { ArticleSection } from "../Types";

const PostRenderer = (section: ArticleSection, index: number) => {
  const { variant, content } = section;
  if (section.type === 'text' && section.variant === 'subtitle1') {
    return (
      <Typography
        key={index}
        variant={variant as any}
        fontSize={'18px'}
        margin={'20px'}
        color="black"
        fontFamily="sans-serif"
      >
        {content}
      </Typography>
    );
  } else if (section.type === 'text' && section.variant === 'h2') {
    return (
      <Box>
        <Typography
          key={index}
          variant={variant as any}
          fontSize={'30px'}
          margin={'5px'}
          color="black"
          fontFamily="sans-serif"
          fontWeight='Bold'
        >
          {content}
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />
      </Box>
    );
  } else if (section.type === 'image') {
    const { url, description } = section;
    return (
      <Box
          marginBottom={5}
          sx={{
            background: `url('${url}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />
    );
  } else if(section.type === 'video') {
    const { content } = section;
    
    if (content) {
        return (
          <VideoSegment source={content} type='video/mp4' />
        );
      } else {
        return null;
      }
  } else if(section.type === 'code') {
    const { content } = section;
    return (
      <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {content}
        </CodeSegment>
    )
  } else {
    return null;
  }
};

export default PostRenderer;