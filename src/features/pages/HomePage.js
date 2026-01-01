import Experience from "../views/home/Experience";
import Explore from "../views/home/Explore";
import Hero from "../views/home/Hero";
import Limits from "../views/home/Limits";
import Quiz from "../views/home/Quiz";

import './styles/home.css'

export default function HomePage () {

    return (

        <>
        
            <Hero/>
            <Quiz/>
            <Experience/>
            <Explore/>
            <Limits/>

        </>

    )

}