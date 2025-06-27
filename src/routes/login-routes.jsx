import { Navigate } from "react-router-dom";
import LoginLayout from "../layout/login";
import { MY_LOGIN_PAGE, MY_REGISTER_PAGE } from "../helpers/pages";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import GuestGuard from "../auth/guest-guard";

const loginRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <LoginLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: MY_LOGIN_PAGE,
      element: <Login />,
    },
    {
      path: MY_REGISTER_PAGE,
      element: <Register />,
    },
    {
      path: "/",
      element: <Navigate replace to={MY_LOGIN_PAGE} />,
    },
    {
      path: "*",
      element: <Navigate replace to={MY_LOGIN_PAGE} />,
    },
  ],
};

export default loginRoutes;
