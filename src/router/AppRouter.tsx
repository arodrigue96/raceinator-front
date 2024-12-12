import { lazy } from "react";
import { Route, Navigate, Routes } from "react-router";
import App from "../components/App/App";
import TeamsPage from "../team/pages/TeamsPage/TeamsPage";
import { addNewTeamPage, teamsPage } from "./routes";

export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

export const AddNewTeamPage = lazy(
  () => import("../team/pages/AddNewTeamPage/AddNewTeamPage"),
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={teamsPage} />} />
        <Route path={teamsPage} element={<TeamsPage />} />
        <Route path={addNewTeamPage} element={<AddNewTeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
