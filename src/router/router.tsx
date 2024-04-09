import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Download from "@/pages/Download";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/download",
        element: <Download />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;