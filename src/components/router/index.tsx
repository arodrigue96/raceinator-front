import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App/App";
import TeamsPage from "../../teams/pages/TeamsPage/TeamsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<TeamsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
