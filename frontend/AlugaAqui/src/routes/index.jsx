import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/Login";
import Modal from "../components/modal/Modal"

const router = createBrowserRouter([
 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/modal",
    element: <Modal/>,
  },
]);

export default router;