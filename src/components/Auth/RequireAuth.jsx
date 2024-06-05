import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { errorToastHandler } from "../../utils/toast/actions";

// eslint-disable-next-line react/prop-types
const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!auth?.user) {
      errorToastHandler({ status: 401, message: "Unauthorized" });
    }
  }, [auth]);

  // eslint-disable-next-line react/prop-types
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
