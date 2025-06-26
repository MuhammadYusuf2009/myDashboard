import { Navigate } from "react-router-dom";
import { MY_LOGIN_PAGE } from "../helpers/pages";
import useAuthContext from "./use-auth-context";

const AuthGuard = ({ children }) => {
  const { isAuth } = useAuthContext();
  return isAuth ? children : <Navigate to={MY_LOGIN_PAGE} />;
};

export default AuthGuard;
