import MoonLoader from "react-spinners/MoonLoader";
import "./Loader.css";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="loader">
      <MoonLoader aria-label="Loading Spinner" speedMultiplier={0.6} />
      {message && <span className="loader--message">{message}</span>}
    </div>
  );
};

export default Loader;
