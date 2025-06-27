import { useRoutes } from "react-router-dom";
import mainRoutes from "./main-routes";
import loginRoutes from "./login-routes";

const Router = () => useRoutes([loginRoutes, mainRoutes]);

export default Router;
