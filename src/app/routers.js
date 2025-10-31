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
            }
        ]
    }
])