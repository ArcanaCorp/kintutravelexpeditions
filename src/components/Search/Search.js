"use client";

import { useDB } from "@/context/DBContext";
import { IconFileDescription, IconSearch, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Search({ onClose }) {
    const { tours = [] } = useDB();

    const [query, setQuery] = useState("");

    const normalizeText = (value = "") => {
        return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
    };

    const randomTours = useMemo(() => {
        return [...tours]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
    }, [tours]);

    const filteredTours = useMemo(() => {
        const normalizedQuery = normalizeText(query);

        if (!normalizedQuery) return randomTours;

        return tours
            .filter((tour) => {
                const searchableContent = [
                tour.experience_name,
                tour.tour_name,
                tour.text,
                tour.code,
                tour.difficulty_level,
                tour.duration,
                tour.availability,
                ]
                .filter(Boolean)
                .join(" ");

                return normalizeText(searchableContent).includes(normalizedQuery);
            })
            .slice(0, 10);
    }, [query, tours, randomTours]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div className="fixed inset-0 w-screen h-screen z-modal bg-dark-transparent center" onClick={handleOverlayClick}>
            <div className="w p-4 bg-white rounded-md flex flex-col gap-2 md:w lg:w" style={{"--w": "90%","--w-md": "80%","--w-lg": "40%"}}>
                <div className="relative w-full flex items-center">
                    <IconSearch className="absolute" size={22} style={{ left: "20px" }}/>
                    <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-md h bg-n1 fs-md" style={{"--h": "60px", paddingLeft: "55px", paddingRight: "60px"}} placeholder="¿Qué estás buscando?" autoFocus aria-label="Buscar experiencias" />
                    <button type="button" className="absolute size center" style={{"--size": "60px", right: 0}} onClick={onClose} aria-label="Cerrar búsqueda"><IconX /></button>
                </div>
                <div className="w-full">
                    <p className="fs-sm text-neutral">{query.trim() ? `${filteredTours.length} resultado${filteredTours.length === 1 ? "" : "s" }` : "Experiencias recomendadas"} </p>
                </div>
                {filteredTours.length > 0 ? (
                    <ul className="w-full flex flex-col gap-2">
                        {filteredTours.map((tour) => (
                            <li key={tour.id} className="w-full">
                                <Link href={`/experiences/${tour.slug}`} className="w-full flex items-center gap-2 pv-2 fw-medium" onClick={onClose}>
                                    <IconFileDescription size={22} />
                                    <div className="flex flex-col">
                                        <span>{tour.experience_name || tour.tour_name}</span>
                                        {tour.tour_name && tour.tour_name !== tour.experience_name && ( <span className="fs-sm text-neutral fw-normal"> {tour.tour_name} </span> )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="w-full pv-4 text-center">
                        <p className="fw-medium">No encontramos experiencias</p>
                        <p className="fs-sm text-neutral">Prueba buscando “Jauja”, “granadilla”, “full day” o “fácil”.</p>
                    </div>
                )}
            </div>
        </div>
    );
}