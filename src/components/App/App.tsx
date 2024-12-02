import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <NavMenu />
    </>
  );
};

export default App;
