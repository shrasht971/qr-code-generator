import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

interface RouterRouteProps {
  isProtected?: boolean;
}

const RouterRoute: React.FC<RouterRouteProps> = ({ isProtected = false }) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("login");

  useEffect(() => {
    if (isProtected && !login) {
      // Not logged in but trying to access a protected route
      navigate("/login");
    } else if (!isProtected && login) {
      // Already logged in and trying to access login/signup
      navigate("/dashboard");
    }
  }, [isProtected, login, navigate]);

  return <Outlet />;
};

export default RouterRoute;
