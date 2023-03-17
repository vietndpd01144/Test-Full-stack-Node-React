import { useAppSelector } from "@redux/store";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const NoAuthRoute: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    }
  }, [user]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default NoAuthRoute;
