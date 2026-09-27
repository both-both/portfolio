import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage/Homepage";
import { ProjectPage } from "../pages/ProjectPage/ProjectPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
};
