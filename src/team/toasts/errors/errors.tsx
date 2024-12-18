import { toast } from "react-toastify";
import "./errors.css";

export const loadingTeamError = () => {
  toast.error(`Failed to load teams`, {
    className: "toast__errors",
    closeButton: false,
    icon: <img src="/icons/alert.svg" alt="" />,
  });
};

export const addNewTeamError = (error: Error) => {
  toast.error(
    error.message.includes("Failed to fetch")
      ? "Failed to add a new team"
      : error.message,
    {
      closeButton: false,
      className: "toast__errors",
      icon: <img src="/icons/alert.svg" alt="" />,
    },
  );
};

export const deleteTeamError = (error: Error) => {
  toast.error(
    error.message.includes("Failed to fetch")
      ? "Failed to delete a team"
      : error.message,
    {
      closeButton: false,
      className: "toast__errors",
      icon: <img src="/icons/alert.svg" alt="" />,
    },
  );
};
