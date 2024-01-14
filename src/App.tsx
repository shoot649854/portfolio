import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";
import Blog from "./component/Blog";
import Project from "./component/page/Project";
import PersonalProject from "./component/page/PersonalProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blog />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project" element={<Project />} />
          <Route path="project/1" element={<PersonalProject />} />
          <Route path="/portfolio" element={<Navigate to="blog" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
