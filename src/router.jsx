import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import UiLayout from "./components/layout/UiLayout";

export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <UiLayout/>,
        children: [{
            path:"/",
            element: <HomePage />,
            errorElement: <div>Not Found</div>
        }],

    },
    {
        path: "/about",
        element: <div>About page</div>
    },
    {
        path: "/contact",
        element: <div>Contact page</div>
    },
    {
        path: "/admin",
        element: <Outlet />
    },
    {
        path: "/login",
        element: <div>Login page</div>
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
 ]);