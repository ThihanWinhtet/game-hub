import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../Components/GameDetailPage";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {path : '/', element : <Layout/>, children : [
        {path : '', element : <HomePage/>},
        {path : '/games/:id', element : <GameDetailPage/>},
    ]},
]);
export default router;