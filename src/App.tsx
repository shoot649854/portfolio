import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";
import Blog from "./page/Homepage";
import ProjectGallary from "./page/ProjectGallary";
import ProjectQiitaFD1 from "./page/ProjectQiitaFD1";
import ProjectNagoya from "./page/ProjectNagoya";
import ProjectSymposium from "./page/ProjectSymposium";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blog />} />
          <Route path="blog" element={<Blog />} />

          <Route path="project" element={<ProjectGallary />} />
          <Route path="project/1" element={<ProjectQiitaFD1 />} />
          <Route path="/project/2" element={<ProjectNagoya />} />
          <Route path="/project/3" element={<ProjectSymposium />} />
          <Route path="/portfolio" element={<Navigate to="/" />} />


          {/* Not Found Page Router */}
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
