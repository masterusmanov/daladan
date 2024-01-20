import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Monitoring from "../pages/Monitoring/Monitoring";
import Admin from "../pages/Admin/Admin";
import Category from "../pages/Category/Category";
import Department from "../pages/Category/Department";
import News from "../pages/News/News";
import Banner from "../pages/Banner/Banner";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login";
import Moderator from "../pages/Modeerator/Moderator";
import Users from "../pages/User/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Monitoring />,
            },
            {
                path: "/admin",
                element: <Admin />
            },
            {
                path: "/category",
                element: <Category />
            },
            {
                path: "/department",
                element: <Department />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/banner",
                element: <Banner />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/users",
                element: <Users />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/moderator",
        element: <Moderator />
    }
]);

export default router;