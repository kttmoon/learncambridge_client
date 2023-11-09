////////////////////////////
// Global
////////////////////////////

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

////////////////////////////
// Components
////////////////////////////

import App from "./App.jsx";
import Home from "./app/pages/Home.jsx";
import Subject from "./app/pages/Subject.jsx";

import "./index.css";

////////////////////////////
// Body
////////////////////////////

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/subject/:subjectId",
    element: <App />,
    children: [
      {
        path: "",
        element: <Subject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
);
