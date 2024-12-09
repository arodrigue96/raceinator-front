import RedirectionButton from "../../components/Buttons/RedirectionButton/RedirectionButton";
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
        <RedirectionButton
          text="Go Back Home"
          redirection="/home"
          buttonColor={"red"}
        />
      </div>
    </>
  );
};

export default NotFoundPage;
