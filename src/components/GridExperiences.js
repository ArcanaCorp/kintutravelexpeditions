import { useDB } from "@/context/DBContext";
import CardExperiences from "./CardExperiences";
import { useMemo } from "react";

export default function GridExperiences () {

    const { tours, loadTours } = useDB();
    
    const randomTours = useMemo(() => {
        return [...tours]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }, [tours]);

    return (
        <ul className="grid grid-1 gap-2 md:grid-2 lg:grid-4">
            {randomTours.map((tour) => (
                <CardExperiences key={tour.id} exp={tour} />
            ))}
        </ul>
    )
}