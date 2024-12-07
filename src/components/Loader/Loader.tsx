import MoonLoader from "react-spinners/MoonLoader";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <span className="loader">
      <MoonLoader aria-label="Loading Spinner" speedMultiplier={0.6} />
    </span>
  );
};

export default Loader;
