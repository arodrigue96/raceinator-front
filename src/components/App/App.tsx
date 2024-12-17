import { Suspense } from "react";
import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Suspense fallback={<Loader />}>
          <main>
            <Outlet />
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={true}
              newestOnTop
              closeOnClick
              rtl
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </main>
        </Suspense>
      </div>
      <NavMenu />
    </>
  );
};

export default App;
