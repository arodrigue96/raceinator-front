import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <img
          className="main-header__logo"
          src="/images/logo.svg"
          alt="Raceinator logo"
          width={88}
          height={50}
        />
        <span className="main-header__title">Raceinator</span>
      </div>
    </header>
  );
};

export default Header;
