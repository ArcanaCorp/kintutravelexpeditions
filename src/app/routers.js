import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/features/layout";
import HomePage from "@/features/pages/HomePage";

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
                element: <h1>Experiencias</h1>,
                children: [
                    {
                        path: '/experiences/:slug',
                        element: <h1>Slug</h1>
                    }
                ]
            },
            {
                path: '/search'
            }
        ]
    }
])