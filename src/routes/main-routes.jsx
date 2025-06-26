import { Navigate } from "react-router-dom";
import {
  MY_DASHBOARD_PAGE,
  MY_CALENDAR_PAGE,
  MY_PLANS_PAGE,
  MY_TASKS_PAGE,
  MY_STATUS_PAGE,
} from "../helpers/pages";
import Loadable from "../components/loadable/index";
import AuthGuard from "../auth/auth-guard";
import DashboardLayout from "../layout/main";
import { lazy } from "react";

const Dashboard = Loadable(lazy(() => import("../pages/dashboard/dashboard")));
const Calendar = Loadable(lazy(() => import("../pages/calendar/Calendar")));
const Stats = Loadable(lazy(() => import("../pages/stats/Stats")));
const Tasks = Loadable(lazy(() => import("../pages/task/Task")));
const Plans = Loadable(lazy(() => import("../pages/plans/Plans")));
const mainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: MY_DASHBOARD_PAGE,
      element: <Dashboard />,
    },
    {
      path: "/",
      element: <Navigate replace to={MY_DASHBOARD_PAGE} />,
    },
    {
      path: "*",
      element: <Navigate replace to={MY_DASHBOARD_PAGE} />,
    },
    {
      path: MY_CALENDAR_PAGE,
      element: <Calendar />,
    },
    {
      path: MY_STATUS_PAGE,
      element: <Stats />,
    },
    {
      path: MY_TASKS_PAGE,
      element: <Tasks />,
    },
    {
      path: MY_PLANS_PAGE,
      element: <Plans />,
    },
  ],
};

export default mainRoutes;
