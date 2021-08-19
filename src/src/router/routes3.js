import { lazy } from "react";
const DashboardLogin = lazy(() => import("../components/dashboard/login"));
const routes = [
  {
    path: "/admin/login",
    name: "index",
    component: DashboardLogin,
    exact: true,
  },
];

export default routes;
