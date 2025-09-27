import { Routes, Route } from "react-router-dom";
import { MainDash } from "../pages/dashboard";
import { MainLogin } from "../pages/login";

export const MainRoutes = () => (
  <Routes>
    <Route path="*" element={<MainDash />} />
    <Route path="/dashboard" element={<MainDash />} />
    <Route path="/login" element={<MainLogin />} />
  </Routes>
);
