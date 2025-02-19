import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import UiLayout from "./components/layout/UiLayout";
import ShopPage from "./pages/shop";
import BlogPage from "./pages/blog/INDEX.JSX";
import BlogDetails from "./components/sections/blogdetails";
import SwiperModal from "./components/sections/swiperModal";

export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <UiLayout/>,
        children: [{
            path:"/",
            element: <HomePage />,
            errorElement: <div>Not Found</div>
        },
        // {
        //     path: ":slug",  
        //     element: <SwiperModal/>, 
        //     errorElement: <div>Blog Not Found</div>,
        // }
    ],

    },
    {
        path: "/about",
        element: <div>About page</div>
    },
    {
        path: "/shop",
        element: <UiLayout/>,
        children: [{
            path:"/shop",
            element: <ShopPage />,
            errorElement: <div>Not Found</div>
        }],
    },
    {
        path: "/blog",
        element: <UiLayout/>,
        children: [{
            path:"/blog",
            element: <BlogPage />,
            errorElement: <div>Not Found</div>
        },
        {
            path: ":slug",  
            element: <BlogDetails/>, 
            errorElement: <div>Blog Not Found</div>,
        }
    ],
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