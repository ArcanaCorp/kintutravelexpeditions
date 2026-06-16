'use client';

import { useBlogs } from "@/hooks/useBlogs";
import { useBooking } from "@/hooks/useBooking";
import { useCompany } from "@/hooks/useCompany";
import { useTours } from "@/hooks/useTours";
import { createContext, useContext, useEffect } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const company = useCompany();
    const tours = useTours();
    const blogs = useBlogs();
    const booking = useBooking();

    useEffect(() => {
        (async () => {
            await Promise.all([
                company.fetchCompany(),
                tours.fetchTours(),
                blogs.fetchBlogs()
            ])
        })();
    }, []);

    const contextValue = {
        company: company.company,
        loadCompany: company.loading,
        tours: tours.tours,
        loadTours: tours.loading,
        blogs: blogs.blogs,
        loadBlogs: blogs.loading,
        booking: booking.book,
        step: booking.stepPay,
        stepChange: booking.setStepPay,
        initBook: booking.initBooking,
        completeBook: booking.completeData,
        clearBook: booking.clearBooking
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useDB = () => useContext(DBContext);