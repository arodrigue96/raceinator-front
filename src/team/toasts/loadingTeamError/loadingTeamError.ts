import { toast } from "react-toastify";
import "./loadingTeamError.css";

const loadingTeamError = () => {
  toast.error(`Failed to Load teams`, {
    autoClose: 5000,
    className: "toast__loading-error",
    closeButton: false,
  });
};

export default loadingTeamError;
