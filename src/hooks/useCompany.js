import { getCompany } from "@/services/company.service";
import { useState } from "react";

const STORAGE_KEY = "company_data";
const STORAGE_TIME_KEY = "company_data_timestamp";
const CACHE_TIME = 1000 * 60 * 60; // 1 hora

export const useCompany = () => {

    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCompany = async (force = false) => {

        try {

            if (!force && typeof window !== "undefined") {

                const cached = localStorage.getItem(STORAGE_KEY);
                const timestamp = localStorage.getItem(STORAGE_TIME_KEY);

                if (cached && timestamp) {

                    const isValid =
                        Date.now() - Number(timestamp) < CACHE_TIME;

                    if (isValid) {
                        setCompany(JSON.parse(cached));
                        setLoading(false);
                        return JSON.parse(cached);
                    }

                }

            }

            const data = await getCompany();

            setCompany(data);

            if (typeof window !== "undefined") {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());
            }

            return data;

        } catch (error) {

            console.error(error);

            // Si falla la API pero existe cache, usarlo
            if (typeof window !== "undefined") {
                const cached = localStorage.getItem(STORAGE_KEY);

                if (cached) {
                    const data = JSON.parse(cached);
                    setCompany(data);
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
        company,
        loading,
        fetchCompany,
        clearCache,
    };

};