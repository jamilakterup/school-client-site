import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Teachers from "../pages/Teachers/Teachers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'teachers',
                element: <Teachers />
            }
        ])
    }
]);

export default router;
