import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
