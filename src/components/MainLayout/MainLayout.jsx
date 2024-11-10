import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="max-w-3xl mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
