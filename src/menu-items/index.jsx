import {
  MY_DASHBOARD_PAGE,
  MY_PLANS_PAGE,
  MY_CALENDAR_PAGE,
  MY_STATUS_PAGE,
  MY_TASKS_PAGE,
} from "../helpers/pages";

const MenuItem = [
  {
    title: "Dashboard",
    icon: "mage:dashboard-2-fill",
    path: MY_DASHBOARD_PAGE,
  },
  {
    title: "Calendar",
    icon: "solar:calendar-bold-duotone",
    path: MY_CALENDAR_PAGE,
  },
  {
    title: "Stats",
    icon: "famicons:stats-chart-sharp",
    path: MY_STATUS_PAGE,
  },
  {
    title: "Tasks",
    icon: "tdesign:task-add-filled",
    path: MY_TASKS_PAGE,
  },
  {
    title: "Plans",
    icon: "icon-park-solid:plan",
    path: MY_PLANS_PAGE,
  },
];

export default MenuItem;
