import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { store } from "@store";
import { ROUTES } from "./routes";
import "@assets/styles/index.scss";

const router = createHashRouter(ROUTES);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
