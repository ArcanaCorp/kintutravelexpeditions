import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Providers from "./app/providers";
import { router } from "./app/routers";

import '@/shared/css/global.css'
import '@/shared/css/system.css'

createRoot(document.getElementById('root')).render (
    <>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </>
)

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => {
            console.log('SW registrado', reg);
            })
            .catch(err => {
                console.error('SW error', err);
            });
        });
}