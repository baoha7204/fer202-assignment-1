import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line react/prop-types
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default RequireAuth;
