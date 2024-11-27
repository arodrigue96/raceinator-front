import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <img
        className="main-header__logo"
        src="/images/logo.svg"
        alt="Raceinator logo"
        width={88}
        height={50}
      />
      <h1 className="main-header__title">Raceinator</h1>
    </header>
  );
};

export default Header;
