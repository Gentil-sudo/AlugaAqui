import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;