import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/features/layout";
import HomePage from "@/features/pages/HomePage";
import ExperienceSubPage from "../features/pages/ExperienceSubPage";
import ExperiencePage from "../features/pages/ExperiencePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/experiences',
                element: <ExperiencePage/>,
            },
            {
                path: '/experiences/:slug',
                element: <ExperienceSubPage/>
            },
            {
                path: '/blog'
            },
            {
                path: '/about'
            },
            {
                path: '/contact'
            },
            {
                path: '/planer'
            },
            {
                path: '/search'
            }
        ]
    }
])