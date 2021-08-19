import { lazy } from "react";

const DashboardPage = lazy(() => import("../views/Dashboard"));
const DashboardBanner = lazy(() => import("../views/DashboarBanner"));
const DashboardLogin = lazy(() => import("../components/dashboard/login"));

const routes = [
  {
    path: "/admin/dashboard",
    name: "index",
    component: DashboardPage,
    exact: true,
  },
  {
    path: "/admin/banner-edit",
    name: "banneredit",
    component: DashboardBanner,
    exact: true,
  },
];

export default routes;
