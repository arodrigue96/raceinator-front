import { lazy } from "react";
import { Route, Navigate, Routes } from "react-router";
import App from "../components/App/App";

export const TeamsPage = lazy(
  () => import("../team/pages/TeamsPage/TeamsPage"),
);
export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<TeamsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
