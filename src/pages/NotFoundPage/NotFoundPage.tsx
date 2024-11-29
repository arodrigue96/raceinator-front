import Button from "../../components/Button/Button";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h1 className="page-title">Page not found</h1>
      <div className="container">
        <p className="text">
          This page doesn't exist. Not to worry, it happens to even the best
          riders & teams.
        </p>
        <Button text="Go Back Home" redirection="/home" className="button" />
      </div>
    </>
  );
};

export default NotFoundPage;
