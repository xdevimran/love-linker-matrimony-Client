import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <h1 className="text-3xl bg-black text-center text-white">Dashboard</h1>
      <div className="flex pr-10  mx-auto">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
