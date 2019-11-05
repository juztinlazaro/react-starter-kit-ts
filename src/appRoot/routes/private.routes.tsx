import { lazy } from "react";

const Home = lazy(() => import("module/Home/Home"));

const privateRoutesList = [
  {
    component: Home,
    exact: true,
    id: "home-id",
    path: "/home",
  },
];

const PrivateRoutes = (isLoggedIn: boolean) => {
  let privateRoutes = privateRoutesList;

  if (isLoggedIn) {
    privateRoutes = [
      ...privateRoutesList,
      {
        component: Home,
        exact: true,
        id: "home-id",
        path: "/",
      },
    ];
  }

  return privateRoutes;
};

export default PrivateRoutes;
