import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = () => {
    setAuth(null);
  };

  return logout;
};

export default useLogout;
