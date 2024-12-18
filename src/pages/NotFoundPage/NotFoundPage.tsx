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
        <Button
          className="button__not-found"
          children="Go Back Home"
          linkTo="/home"
        />
      </div>
    </>
  );
};

export default NotFoundPage;
