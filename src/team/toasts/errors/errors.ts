import { toast } from "react-toastify";
import "./errors.css";

export const loadingTeamError = () => {
  toast.error(`Failed to Load teams`, {
    autoClose: 5000,
    className: "toast__loading-error",
    closeButton: false,
  });
};

export const addNewTeamError = (error: Error) => {
  toast.error(
    error.message.includes("Failed to fetch")
      ? "Failed to add a new team"
      : error.message,
    {
      autoClose: 5000,
      className: "toast__loading-error",
      closeButton: false,
    },
  );
};
