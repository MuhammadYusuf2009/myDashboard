import { Navigate } from "react-router-dom";
import { MY_DASHBOARD_PAGE } from "../helpers/pages";
import useAuthContext from "./use-auth-context";

const GuestGuard = ({ children }) => {
  const { isAuth } = useAuthContext();
  return !isAuth ? children : <Navigate to={MY_DASHBOARD_PAGE} />;
};

export default GuestGuard;
