import { useState, useEffect } from "react";
import { Box, Avatar, Typography, Alert } from "@mui/material";
import profile from '../data/profile/profile.jpeg';
import { IProjectHeader } from "../Types";


const ProjectHeader = ({ projectTitle, editedDate, imageSrcPath, children }: IProjectHeader) => {
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
      {children}
    </>
  );
};

export default ProjectHeader;
