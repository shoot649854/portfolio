import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";
import Blog from "./page/Blog";
import ProjectGallary from "./page/ProjectGallary";
import ProjectTemplate from "./page/ProjectTemplate";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blog />} />
          <Route path="blog" element={<Blog />} />

          <Route path="project" element={<ProjectGallary />} />
          <Route path="project/1" element={<ProjectTemplate />} />
          <Route path="/portfolio" element={<Navigate to="/" />} />

          {/* Not Found Page Router */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
