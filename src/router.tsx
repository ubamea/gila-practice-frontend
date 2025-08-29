import { Navigate, createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main.layout";
import { LogsView } from "./components/views/logs.view";
import MessagePage from "./components/forms/sendMessage.form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/send-message",
        element: <MessagePage />,
      },
      {
        path: "/logs",
        element: <LogsView />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/changes" replace />,
  },
]);

export default router;
