import { Typography, Box } from '@mui/material';
import ProjectHeader from '../component/ProjectComponent/ProjectHeader';
import projectSymposium1 from '../data/project3/projectSymposium1.jpeg';

const ProjectSymposium = () => {
  const editedDate = "3/1/2023";
  const projectTitle = "Symposium Cyberwarfare in Russia and Ukraine";
  

  return (
    //Ideathon / Brainstorming, Solution, Struggle, Demo, Conclusion
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} tags={['Symposium', 'Cyberwarfare', 'Russia and Ukraine']}/>

      <Box>
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Since February 2022, Russia has been engaging in both military and cyber attacks against Ukraine. A Microsoft report showed a significant increase in phishing attacks that aimed to trick people into revealing sensitive information, while malware attacks targeted Ukrainian infrastructure and government information. At least 15 million people in Ukraine have been left in urgent need of humanitarian assistance due to these attacks. The ongoing cyberwar includes the use of wiper malware such as AcidRain, which indicates that Russia is attempting to hide and delete information before it becomes public. However, there is support for Ukraine, including the use of cloud services to improve cyber and physical security. President Zelensky signed a law allowing for the use of cloud services in government agencies to reduce corruption risk and save on budget expenditures. A Microsoft cyber report revealed that 55% of the Ukrainian government targeted with wiper malware since February 2022 were critical infrastructure, which has raised concerns among experts like Derek Manky, head of Fortinet's threat intelligence team. However, the study from Carnegie suggests that Russian cyber "fires" have inflicted negligible damage on Ukrainian targets since Moscow's initial invasion. This may be due to support from Microsoft's Detection and Response Team (DART) and Microsoft Threat Intelligence Center (MSTIC).
        </Typography>
        <Box
          marginBottom={5}
          sx={{
            background: `url('${projectSymposium1}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />
      </Box>

    </Box>
  );
}

export default ProjectSymposium;
