import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TeamsPage from "../team/pages/TeamsPage/TeamsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<TeamsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
