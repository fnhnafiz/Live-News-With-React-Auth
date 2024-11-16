import { useContext } from "react";
import { AuthProviderContext } from "../ContextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const SecureRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthProviderContext);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default SecureRoutes;
