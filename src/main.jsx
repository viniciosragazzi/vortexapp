import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fun } from "./pages/Fun";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FunChildrenPage from "./pages/FunChildrenPage";
import ItemPage from "./pages/ItemPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fun",
        element: <Fun />,
      },
    
      {
        path: "/fun/:type",
        element: <Fun />,
      },
      {
        path: "/fun/:type/:id",
        element: <ItemPage/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
