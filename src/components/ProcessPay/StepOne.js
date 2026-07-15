'use client';

import { useDB } from "@/context/DBContext"
import { getTokenForm } from "@/services/payments.service";
import { useState } from "react";
import { toast } from "sonner";

export default function StepOne () {

    const { booking, completeBook, stepChange, clearBook } = useDB();
    const [ loading, setLoading ] = useState(false);

    const handleReserve = async () => {
        try {
            setLoading(true);
            const data = {
                experience_id: booking.experience_id, 
                fullname: booking.fullname, 
                travel_date: booking.travel_date, 
                number_of_people: booking.number_of_people, 
                total_price: booking.total_price, 
                currency: booking.currency || 'PEN'
            }
            const dataToken = await getTokenForm(data);
            if (!dataToken.ok) return toast.warning('Alerta', { description: data.message || 'Hubo un problema al continuar' })
                localStorage.setItem('formToken', dataToken.formToken)
                localStorage.setItem('publicKey', dataToken.publicKey)
                stepChange(2)
        } catch (error) {
            toast.error('Error', { description: error.message })
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-full flex flex-col gap-6">
                <div className="w-full">
                    <label className="block fs-sm fw-medium mb-4">Ingresa tu nombre completo</label>
                    <input type="text" className="input" name="fullname" id="fullname" value={booking?.fullname} placeholder="Ingresa tu nombre completo" onChange={completeBook} />
                </div>
                <div className="w-full flex flex-col gap-2 lg:flex-row">
                    <div className="w-full">
                        <label className="block fs-sm fw-medium mb-4">Selecciona la fecha de reserva</label>
                        <input type="date" className="input" name="travel_date" id="travel_date" value={booking?.travel_date} onChange={completeBook} />
                    </div>
                    <div className="w-full">
                        <label className="block fs-sm fw-medium mb-4">¿Cuántos viajeros serán?</label>
                        <input type="number" className="input" inputMode="numeric" name="number_of_people" id="number_of_people" value={booking?.number_of_people} placeholder="¿Cuántos viajeros serán?" onChange={completeBook} />
                    </div>
                </div>
                <div className="w-full">
                    <label className="block fs-sm fw-medium mb-4">¿Tienes algun comentario extra?</label>
                    <textarea className="textarea" placeholder="¿Tienes algun comentario extra?" name="additional_comments" id="additional_comments" value={booking?.additional_comments} onChange={completeBook} />
                </div>
            </div>
            <div className="w-full flex items-center gap-4 justify-end">
                <button className="w-fit h ph-4 rounded-full" style={{"--h": "50px"}} onClick={clearBook}>Cancelar</button>
                <button className="w-fit h ph-4 rounded-full bg-dark color-white" style={{"--h": "50px"}} onClick={handleReserve}>{loading ? 'Continuando...' : 'Continuar'}</button>
            </div>
        </>
    )
}