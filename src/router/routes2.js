import { lazy } from "react";

const DashboardPage = lazy(() => import("../views/Dashboard"));
const DashboardBanner = lazy(() => import("../views/DashboarBanner"));
const DashboardForm = lazy(() => import("../components/dashboard/BannerForm"));
const DashboardList = lazy(() => import("../components/dashboard/BannerList"));

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
  {
    path: "/admin/bannerform",
    name: "bannerform",
    component: DashboardForm,
    exact: true,
  },
  {
    path: "/admin/bannerlist",
    name: "bannerlist",
    component: DashboardList,
    exact: true,
  },
];

export default routes;
