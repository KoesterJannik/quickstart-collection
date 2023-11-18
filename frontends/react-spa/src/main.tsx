import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Providers from "./components/Provider/Providers";
import IsAuthenticated from "./components/Wrapper/IsAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Providers>
        <Root />
      </Providers>
    ),
  },
  {
    path: "/register",
    element: (
      <Providers>
        <Register />
      </Providers>
    ),
  },
  {
    path: "/login",
    element: (
      <Providers>
        <Login />
      </Providers>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <IsAuthenticated>
        <Dashboard />
      </IsAuthenticated>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
