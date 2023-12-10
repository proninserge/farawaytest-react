import React, { useMemo } from "react";
import { routerConfig } from "./config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRoutes() {
  const router = useMemo(() => createBrowserRouter(routerConfig), []);
  return <RouterProvider router={router} />;
}
