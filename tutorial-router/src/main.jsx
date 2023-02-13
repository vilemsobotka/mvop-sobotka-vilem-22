import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Contact, { loader as contactLoader } from "./routes/contact";
import { Children } from "react";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: "contacts/:contactId/edit",
    element: <EditContact />,
    action: editAction,
    loader: contactLoader,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);