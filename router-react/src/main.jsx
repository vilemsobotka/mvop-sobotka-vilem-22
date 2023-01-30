import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>Hello world!</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Outlet />
      </div>
      ),
    children: [{
      path: "/about",
      element: <h1>ebaut</h1>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);