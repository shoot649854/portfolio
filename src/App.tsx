import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";
import Blog from "./page/Homepage";
import ProjectGallary from "./page/ProjectGallary";
import ProjectQiitaFD1 from "./page/ProjectQiitaFD1";
import ProjectNagoya from "./page/ProjectNagoya";
import ProjectSymposium from "./page/ProjectSymposium";
import TestJSONProject from "./page/TestJSONProject";
import NotFound from "./page/NotFound";

function App() {
  // const PUBLIC_URL = process.env.REACT_APP_HOMEPAGE;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blog />} />
          <Route path="portfolio/blog" element={<Blog />} />
          <Route path="portfolio/project" element={<ProjectGallary />} />
          <Route path="portfolio/project/1" element={<ProjectQiitaFD1 />} />
          <Route path="project/1" element={<ProjectQiitaFD1 />} />
          <Route path="portfolio/project/2" element={<ProjectNagoya />} />
          <Route path="project/2" element={<ProjectNagoya />} />
          <Route path="portfolio/project/3" element={<ProjectSymposium />} />
          <Route path="project/3" element={<ProjectSymposium />} />

          <Route path="portfolio/project/0" element={<TestJSONProject />} />

          <Route path="portfolio" element={<Navigate to = '/portfolio/blog' />} />
          {/* Not Found Page Router */}
          <Route path="portfolio/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
