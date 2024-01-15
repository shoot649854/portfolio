import { Box } from '@mui/material';
import { IVideoSegment } from '../Types';

const VideoSegment = (props: IVideoSegment) => {
  const { source, type } = props;
  
  return (
    <Box marginBottom={10}>
      <video width="100%" controls>
        <source src={source} type={type} />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
  };

export default VideoSegment;