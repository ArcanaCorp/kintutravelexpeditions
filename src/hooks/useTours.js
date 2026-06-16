import { getTours } from "@/services/tours.service";
import { useState } from "react";

const STORAGE_KEY = "tours_data";
const STORAGE_TIME_KEY = "tours_data_timestamp";
const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 horas

export const useTours = () => {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTours = async (force = false) => {

        try {

            // Si no es una actualización forzada, intentar usar cache
            if (!force && typeof window !== "undefined") {

                const cached = localStorage.getItem(STORAGE_KEY);
                const timestamp = localStorage.getItem(STORAGE_TIME_KEY);

                if (cached && timestamp) {

                    const isValid =
                        Date.now() - Number(timestamp) < CACHE_TIME;

                    if (isValid) {
                        const data = JSON.parse(cached);
                        setTours(data);
                        setLoading(false);
                        return data;
                    }

                }

            }

            // Obtener datos frescos
            const data = await getTours();

            setTours(data);

            if (typeof window !== "undefined") {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());
            }

            return data;

        } catch (error) {

            console.error(error);

            // Si falla la API, intentar usar el cache
            if (typeof window !== "undefined") {

                const cached = localStorage.getItem(STORAGE_KEY);

                if (cached) {
                    const data = JSON.parse(cached);
                    setTours(data);
                    return data;
                }

            }

        } finally {
            setLoading(false);
        }

    };

    const clearCache = () => {

        if (typeof window !== "undefined") {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(STORAGE_TIME_KEY);
        }

    };

    return {
        tours,
        loading,
        fetchTours,
        clearCache,
    };

};