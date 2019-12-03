import { lazy } from "react";

const Public = lazy(() => import("../../module/Public/Public"));

const publicRoutesList = [
  {
    component: Public,
    exact: true,
    id: "public-id",
    path: "/public",
  },
];

const PublicRoutes = (isLoggedIn: boolean) => {
  let publicRoutes = publicRoutesList;

  if (!isLoggedIn) {
    publicRoutes = [
      ...publicRoutesList,
      {
        component: Public,
        exact: true,
        id: "public-id",
        path: "/",
      },
    ];
  }

  return publicRoutes;
};

export default PublicRoutes;
