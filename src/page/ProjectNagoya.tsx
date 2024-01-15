import { Typography, Box } from '@mui/material';
import CodeSegment from '../component/ProjectComponent/CodeSegment';
import VideoSegment from '../component/ProjectComponent/VideoSegment';
import ProjectHeader from '../component/ProjectComponent/ProjectHeader';

import projectNagoya2 from '../data/project2/projectNagoya2.png';
import projectNagoyaDemo from '../data/project2/projectNagoyaDemo.mp4';

const ProjectNagoya = () => {
  const editedDate = "8/14/2023";
  const projectTitle = "Electric Sheep Hackathon (Mobility and Big Data)";
  const pythonCode =
  `  import 'dart:async';
  import 'package:flutter/material.dart';
  import 'package:flutter/material.dart';
  import 'package:geolocator/geolocator.dart';
  import 'package:google_maps_flutter/google_maps_flutter.dart';
  import 'package:metele/map.dart';
  import 'model.dart';
  
  void main() {
    runApp(const MyApp());
  }
  
  class MyApp extends StatelessWidget {
    const MyApp({Key? key}) : super(key: key);
    @override
    Widget build(BuildContext context) {
      return const MaterialApp(
        title: 'My diARry',
        home: LoginPage(),
      );
    }
  }
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
          この記事は2023年の夏に日本の名古屋で行われたメーテレと合同のプロジェクトの様子をまとめたものです。この記事では、私の主観とともに、我々のチームがどのようにして三日間の間でアイディアを絞り、そしてモバイルアプリを制作するまでに当たったかをまとめています。
        </Typography>
        <Box
          marginBottom={5}
          sx={{
            background: `url('${projectNagoya2}')`,
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
          Ideathon / Brainstorming
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          僕たちのグループは、まず私たちに与えられたテーマから考えることにしました。私たちのテーマは、モビリティーとビックデーたとトランスポーテーションです。この3つのお題の背景として、トヨタ自動車がスポンサーであることが大きな要因です。しかしこの3つのお題と言うのは他の3つのチームに来ないような複雑さがあり、私たちの中ではどのようなアイディアに最終的にするのかとても難航しました。私たちが作る製品の時代、背景や年代等は自由に決められることができました。
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
          私たちは30年後の日本また過疎化された日本について絞ることにしました。2023年の夏、少子高齢化が進む中より多くの人が大都市に進むにつれ地方の過疎化が予見されます。また日本は火山地帯でも知られることや地震大国でも知られるので、30年後はより多くの人が大都市化に移るとともに、腐敗した地方でに戻ることができない環境を考えました。私たちのチームメイトの中には、多くの友達が地方で育つのにもかかわらずで、大学や仕事のために上京したらいいまた海外に行く友達もいました。そのような人たちは、節目節目ごとに自分の家に帰りたいと言うことで、地方に帰る友達も数少なくありません。そこで私たちはモバイルアプリで3Dのモデルを表示するアプリケーションを制作しました。

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
          Struggle
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          苦労した点として挙げられるのが、私たちのチームメイトの中で、開発経験が少なかった人が多かったことだ。今回のプロジェクトはどちらかと言うと初心者より、またはいろいろな興味を持った学生を対象に行われたプロジェクトだったので、もともとの経験などを足切りにしていたわけではなく、とても幅広い経験層へのプロジェクトだったため、逆に自分から教えることが多かった。例えば、GitHubの使い方や基礎的なコーディングの仕方などを三日間といえども出来る限り教えて行った。

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

      <Box>
        <Typography
          variant="h2"
          fontSize="30px"
          fontWeight="Bold"
          margin="5px"
          color="black"
          fontFamily="sans-serif"
        >
          Demo
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />
        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          そこで、私たちエンジニアはデモをモバイルアプリとして開発することを決め、日本の5人のエンジニアで作り始めました。難しかった点としてはGoogle map api とLuma API をFlutter で使用することでした

        </Typography>
        <VideoSegment source={projectNagoyaDemo} type='video/mp4' />
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
          Conclusion
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />

        <Typography
          variant="subtitle1"
          fontSize="18px"
          margin="20px"
          color="black"
          fontFamily="sans-serif"
        >
          今回のプロジェクトで良かった事は、トヨタ自動車がスポンサーについていたことによって、実務経験ありの業界の人間が、僕たち、学生のアイディアと製品に対して評価をしていただく機会をいただけたこと。またその評価等が三日間で作った製品の割にはよくできていたと言う事。これに関して僕はアイディアはもう少し見つめられた点が多かったのではないかと思うが、トヨタと言う面白い会社を相手にして出来る限り戦えた思う。
        </Typography>
      </Box>

    </Box>
  );
}

export default ProjectNagoya;
