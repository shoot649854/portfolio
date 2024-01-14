import { Typography, Box } from "@mui/material";
import CodeSegment from "../component/CodeSegment";
import ProjectHeader from "../component/ProjectHeader";
import projectQiitaFD1 from "../data/project1/projectQiitaFD1.jpeg";

const ProjectQiitaFD1 = () => {
  const editedDate = "6/14/2023";
  const projectTitle = "Qiita × Fast DOCTOR Health Tech Hackathon";
  const pythonCode = `class SOAP_Converter:
        def __init__(self): 
            pass

        def get_subjective(self, prompt):
            prompt = """
            Subjective information in medical records includes patient's physical findings, 
            test results, and various examinations like auscultation, palpation, and imaging tests:
            """ 

            prompt = "find subjective information within 30 words:" + prompt
            res = openai.Completion.create(
                model="text-davinci-003",
                prompt=prompt,
                max_tokens=2048,
                temperature=0
            )
            return res.choices[0].text`;
  const CodeSubjective = `Subjective: Patient\'s physical findings, test results, and various examinations like auscultation, palpation, and imaging tests.`;
  const CodeObjective = `Objective: Objective information includes medical records, laboratory results, imaging studies, and other diagnostic tests`;
  const CodeAssessment = `Assessment: Process of evaluating and measuring a person's knowledge, skills, and abilities.`;

  return (
    <Box>
      <ProjectHeader projectTitle={projectTitle} editedDate={editedDate} />

      <Box>
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Hello, I am the representative of ANTI SOCIETY. This time, I wowed the
          audience with my presentation and the fact that I came from
          California, but when I started working on the project, I was a bit of
          a toppin' pooh-pooh. First of all, we decided to make it in Flutter,
          and it took about 12 hours to set up the environment ((I developed an
          allergy to Flutter)). Then I had to finish it in about 4 hours, so it
          may have turned out poorly, but as an idea, and for a student with so
          little development experience... I'm not sure if it was a good idea or
          not... 🙇 ... So thank you for looking at Qiita. I hope you will also
          check out the Github page as well.
        </Typography>
        <Box
          marginBottom={5}
          sx={{
            background: `url('${projectQiitaFD1}')`,
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
          Raising Issues
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          The current health care system has a serious problem: physicians are
          burdened with excessive paperwork and the need to fill out extensive
          medical records. A significant portion of their time is spent on this
          administrative task, resulting in limited opportunities for direct
          patient care. As a result, the quality of patient care suffers and
          health care professionals struggle to communicate and collaborate
          effectively with one another. Inefficient physician time utilization
          hinders their ability to provide optimal health care services, reduces
          patient satisfaction, and can impair patient outcomes. Solutions are
          needed to streamline administrative tasks, allow physicians to focus
          more on patient care, and facilitate better communication within the
          healthcare ecosystem.
        </Typography>
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
          Our Solution
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          We therefore propose the implementation of a visual verification
          system as a solution. The goal of this approach is to reduce paperwork
          and streamline processes, allowing physicians to allocate more time to
          direct patient care. The use of visual technology, including
          automation and digitization, simplifies administrative tasks, improves
          efficiency, and facilitates communication among healthcare
          professionals.
        </Typography>
        <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {pythonCode}
        </CodeSegment>
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
          Output
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {CodeSubjective}
        </CodeSegment>

        <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {CodeObjective}
        </CodeSegment>
        <CodeSegment
          language="python"
          showLineNumbers={true}
          startingLineNumber={1}
        >
          {CodeAssessment}
        </CodeSegment>

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          Plan: 1. Gather information: Collect information about the patient's
          medical history, current symptoms, and lifestyle. 2. Assess: Assess
          the patient's physical and mental health, including any existing
          conditions or medications. 3. Diagnose: Diagnose the patient's
          condition based on the information gathered and the assessment. 4.
          Develop a treatment plan: Develop a treatment plan that is tailored to
          the patient's individual needs and goals. 5. Monitor progress: Monitor
          the patient's progress and adjust the treatment plan as needed.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectQiitaFD1;
