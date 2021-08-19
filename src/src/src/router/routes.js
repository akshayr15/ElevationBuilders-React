import { lazy } from "react";
import AppLayout from "../layout";

const HomePage = lazy(() => import("../views/Home"));
const projectpage = lazy(() => import("../components/Home/project"));
 const contactUsPage = lazy(() => import("../components/Home/contactus"));
 const aboutUsPage = lazy(() => import("../components/Home/testimonial"));
 const whyUsPage = lazy(() => import("../components/Home/contentmain"));

const DashboardBannerForm = lazy(() =>
  import("../components/dashboard/BannerForm")
);
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/projects",
    name: "project",
    component: projectpage,
    exact: true,
  },
  {
    path: "/contact-us",
    name: "contactus",
    component: contactUsPage,
    exact: true,
  },
  {
    path: "/why-us",
    name: "whyus",
    component: whyUsPage,
    exact: true,
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: aboutUsPage,
    exact: true,
  },
  {
    path: "/admin/banner-form",
    name: "banneredit",
    component: DashboardBannerForm,
    exact: true,
  },
];

export default routes;
