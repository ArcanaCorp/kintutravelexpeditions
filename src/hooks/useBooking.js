import { useState } from "react"

export const useBooking = () => {

    const [ stepPay, setStepPay ] = useState(1);
    const [ book, setBook ] = useState({
        experience_id: '',
        fullname: '',
        experience_name: '',
        cover: '',
        tour_name: '',
        travel_date: '',
        number_of_people: 1,
        package_type: '',
        additional_comments: '',
        total_price: 0,
        currency: '',
        payment_method: '',
        payment_confirmation: '',
        status: 'pending',
        source: 'web'
    });

    const initBooking = (bk) => setBook(prev => ({
        ...prev,
        experience_id: bk.experience_id || bk.id,
        experience_name: bk.experience_name,
        tour_name: bk.tour_name,
        total_price: bk.price_min,
        currency: bk.currency,
        cover: bk.cover
    }));

    const completeData = (e) => {
        const { name, value } = e.target;
        setBook(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const clearBooking = () => setBook({
        experience_id: '',
        fullname: '',
        experience_name: '',
        cover: '',
        tour_name: '',
        travel_date: '',
        number_of_people: 1,
        package_type: '',
        additional_comments: '',
        total_price: 0,
        currency: '',
        payment_method: '',
        payment_confirmation: '',
        status: 'pending',
        source: 'web'
    });

    return {
        book,
        stepPay,
        setStepPay,
        initBooking,
        completeData,
        clearBooking
    }

}