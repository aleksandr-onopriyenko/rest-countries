import { RouteObject } from "react-router-dom";

import { App } from "./App";
import { Home, Details } from "@pages";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <Details />,
      },
    ],
  },
];
