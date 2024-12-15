import { toast } from "react-toastify";
import "./success.css";

export const createTeamFeedback = () => {
  toast.success(`Team created`, {
    autoClose: 3000,
    className: "toast__success",
    closeButton: false,
  });
};
