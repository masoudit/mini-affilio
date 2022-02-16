import { lazy } from "react";

import UiKit from "@/pages/features/kits";
import LoginPage from "@/pages/public/login";
import PrivacyPage from "@/pages/public/privacy";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const AdminDashboard = lazy(() => import("@/pages/dashboardAdmin"));
const Counter = lazy(() => import("@/pages/features/counter"));

export const PRIVATE_BASE_PATH = "/dashboard";

export const PUBLIC_ROUTES = [
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: <LoginPage />,
  },
  {
    name: "Privacy",
    path: "/privacy",
    exact: true,
    component: <PrivacyPage />,
  },
];

export const ADMIN_ROUTES = [
  {
    path: "/",
    exact: true,
    component: <AdminDashboard />,
  },
];

export const AUTHENTICATED_ROUTES = [
  {
    path: "/",
    exact: true,
    component: <Dashboard />,
  },
  {
    path: "/kits",
    exact: true,
    component: <UiKit />,
  },
  {
    path: "/counter",
    exact: true,
    component: <Counter />,
  },
];

export const getPrivateRoutes = (userType = "AUTHENTICATED") => {
  return { ADMIN: ADMIN_ROUTES, AUTHENTICATED: AUTHENTICATED_ROUTES }[userType];
};
