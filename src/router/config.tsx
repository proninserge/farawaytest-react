import React from "react";
import { RouteObjectExt, Routes } from "./router.types";

import {
  HomePage,
  CharacterInfoPage,
  NotFoundPage,
} from "../pages";
import { InnerPageTemplate } from "../ui-kit";

export const routerConfig: RouteObjectExt[] = [
  {
    route: Routes.index,
    path: "/",
    element: <InnerPageTemplate />,
    children: [
      {
        route: Routes.home,
        index: true,
        element: <HomePage />,
      },
      {
        route: Routes.character,
        path: "character/:charId",
        element: <CharacterInfoPage />,
      },
    ] as RouteObjectExt[],
  },
  {
    route: Routes.noMatch,
    path: "*",
    element: <NotFoundPage />,
  }
];
