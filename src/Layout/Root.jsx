import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Header/Navigation";
const Root = () => {
  return (
    <div>
      <div className="contaner mx-auto">
        <Navigation />
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
