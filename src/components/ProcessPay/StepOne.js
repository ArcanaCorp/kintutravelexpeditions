'use client';

import { useDB } from "@/context/DBContext"
import { getTokenForm } from "@/services/payments.service";
import { useState } from "react";
import { toast } from "sonner";

export default function StepOne () {

    const { book, completeBook, stepChange, clearBook } = useDB();
    const [ loading, setLoading ] = useState(false);

    const handleReserve = async () => {
        try {
            
            setLoading(true);
            const data = {
                experience_id: book.experience_id, 
                fullname: book.fullname, 
                travel_date: book.travel_date, 
                number_of_people: book.number_of_people, 
                total_price: book.total_price, 
                currency: book.currency || 'PEN'
            }
            const dataToken = await getTokenForm(data);
            if (!dataToken.ok) return toast.warning('Alerta', { description: data.message || 'Hubo un proble al continuar' })
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
                    <input type="text" className="input" name="fullname" id="fullname" value={book?.fullname} placeholder="Ingresa tu nombre completo" onChange={completeBook} />
                </div>
                <div className="w-full flex flex-col gap-2 lg:flex-row">
                    <div className="w-full">
                        <label className="block fs-sm fw-medium mb-4">Selecciona la fecha de reserva</label>
                        <input type="date" className="input" name="travel_date" id="travel_date" value={book?.travel_date} onChange={completeBook} />
                    </div>
                    <div className="w-full">
                        <label className="block fs-sm fw-medium mb-4">¿Cuántos viajeros serán?</label>
                        <input type="number" className="input" inputMode="numeric" name="number_of_people" id="number_of_people" value={book?.number_of_people} placeholder="¿Cuántos viajeros serán?" onChange={completeBook} />
                    </div>
                </div>
                <div className="w-full">
                    <label className="block fs-sm fw-medium mb-4">¿Tienes algun comentario extra?</label>
                    <textarea className="textarea" placeholder="¿Tienes algun comentario extra?" name="additional_comments" id="additional_comments" value={book?.additional_comments} onChange={completeBook} />
                </div>
            </div>
            <div className="w-full flex items-center gap-4 justify-end">
                <button className="w-fit h ph-4 rounded-full" style={{"--h": "50px"}} onClick={clearBook}>Cancelar</button>
                <button className="w-fit h ph-4 rounded-full bg-dark color-white" style={{"--h": "50px"}} onClick={handleReserve}>{loading ? 'Continuando...' : 'Continuar'}</button>
            </div>
        </>
    )
}