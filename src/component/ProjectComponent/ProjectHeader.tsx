import { useState, useEffect } from "react";
import { Box, Avatar, Typography, Alert } from "@mui/material";
import profile from '../../data/profile/profile.jpeg';
import { IProjectHeader } from "../../Types";

const Tags = ({ tags }: { tags: string[] }) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    {tags.map((tag: any, index: number) => (
      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
        <Box component="text"> {/* sx={{ border: '1px solid gray', padding: '2px 5px', borderRadius: '5px' }} */}
          <Typography variant="subtitle2" color="primary">
            {tag}
          </Typography>
        </Box>
        {index < tags.length - 1 && <Typography variant="subtitle2" color="black">,</Typography>}
      </Box>
    ))}
  </Box>
);

const ProjectHeader = ({ projectTitle, editedDate, imageSrcPath, tags, children }: IProjectHeader) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const [customProfile, setCustomProfile] = useState(null);

  useEffect(() => {
    try {
      const profileImage = imageSrcPath ? require(imageSrcPath) : null;
      setCustomProfile(profileImage);
    } catch (error) {
      setImageLoadError(true);
      setTimeout(() => {
        setImageLoadError(false);
      }, 5000);
    }
  }, [imageSrcPath]);

  return (
    <>
    {imageLoadError && (
      <Alert severity="error" sx={{ transition: "opacity 0.5s ease-in-out" }}>
        Failed to load image. Using default image.
      </Alert>
    )}

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Avatar alt="Profile Photo" src={customProfile || profile} sx={{ width: 20, height: 20 }} />
        
        <Typography variant="h3" fontSize="15px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
          Shoto Morisaki
        </Typography>
      </Box>
      <Typography variant="h3" fontSize="42px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
        {projectTitle}
      </Typography>
      <Typography variant="subtitle1">
        Edited Date: {editedDate}
      </Typography>
      {tags && <Tags tags={tags} />}
      {children}
    </>
  );
};

export default ProjectHeader;
