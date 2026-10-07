import { createBrowserRouter } from "react-router";
import App from "./App";
import Layout from "./Layout";
import Home from "./page/Home";
import About from "./page/About";
import Testimony from "./page/Testimony";
import Faq from "./page/Faq";
import HomeDetail from "./page/HomeDetail";
import NotFound from "./page/NotFound";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home />},
            { path: '/home/:id', element: <HomeDetail /> },
            { path: '/about', element: <About /> },
            { path: '/testimony', element: <Testimony /> },
            { path: '/faq', element: <Faq /> }
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    }
]);


