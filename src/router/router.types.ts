import { RouteObject } from "react-router-dom";

export enum Routes {
  index = "index",
  home = "home", //host
  character = "character",
  noMatch = "404",
}

export type RouteObjectExt = RouteObject & {
  route: Routes | string;
  children?: RouteObjectExt[];
};
