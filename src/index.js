import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Providers from "./app/providers";
import { router } from "./app/routers";

import '@/shared/css/global.css'

createRoot(document.getElementById('root')).render (
    <>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </>
)