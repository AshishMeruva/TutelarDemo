import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import EnterpriseSecurity from "./Pages/Service/EnterpriseSecurity.jsx";
import CloudSecurity from "./Pages/Service/CloudSecurity.jsx";
import CyberSecurity from "./Pages/Service/CyberSecurity.jsx";
import Additional from "./Pages/Service/Additional.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service/enterprise-security",
    element: <EnterpriseSecurity />,
  },
  {
    path: "/service/cloud-security",
    element: <CloudSecurity />,
  },
  {
    path: "/service/cyber-security",
    element: <CyberSecurity />,
  },
  {
    path: "/service/additional-services",
    element: <Additional />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
