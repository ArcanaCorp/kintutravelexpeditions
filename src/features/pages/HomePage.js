import Experience from "../views/home/Experience";
import Explore from "../views/home/Explore";
import Hero from "../views/home/Hero";
import Made from "../views/home/Made";
import Quiz from "../views/home/Quiz";

import './styles/home.css'

export default function HomePage () {

    return (

        <>
        
            <Hero/>
            <Quiz/>
            <Experience/>
            <Explore/>
            <Made/>

        </>

    )

}