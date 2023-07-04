import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../Components/GameDetailPage";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/games/:id", element: <GameDetailPage /> },
    ],
  },
]);
export default router;
