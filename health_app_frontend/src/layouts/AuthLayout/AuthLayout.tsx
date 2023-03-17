import { Outlet } from "react-router-dom";
import logo from "@assets/icons/logo.png";

export const AuthLayout: React.FC = () => {
  return (
    <>
      <div className="w-full flex  flex-col items-center my-8">
        <img src={logo} alt="Logo" />
        <div className="w-[30rem] h-0.5 bg-gray-300 mt-10"></div>
      </div>
      <Outlet />
    </>
  );
};
