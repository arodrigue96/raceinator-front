import { toast } from "react-toastify";
import "./success.css";

export const createTeamFeedback = () => {
  toast.success(`Team created`, {
    className: "toast__success",
    closeButton: false,
  });
};

export const deleteTeamFeedback = () => {
  toast.success(`Team deleted`, {
    className: "toast__success",
    closeButton: false,
    icon: <img src="/icons/bin.svg" alt="" />,
  });
};
