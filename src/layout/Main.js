import { Outlet } from "react-router-dom";

import './styles/main.css'

export default function Main () {

    return (

        <main className="__main">
            <Outlet/>
        </main>

    )

}