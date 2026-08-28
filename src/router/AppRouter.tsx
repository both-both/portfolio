import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage/Homepage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
