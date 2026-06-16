'use client';

import { formAddMessage } from "@/services/contact.service";
import { useState } from "react";
import { toast } from "sonner";

export default function FormContactInfo () {

    const [ form, setForm ] = useState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    })
    const [ loading, setLoading ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!form.name || !form.lastname || !form.email || !form.message) return toast.warning('Alerta', { description: 'Por favor complete los campos antes de enviar.' })
                setLoading(true)
                await formAddMessage(form);
                toast.success('Éxito', { description: 'Hemos enviado correctamente tu mensaje.' })
        } catch (error) {
            console.error(error);
            toast.error('Error', { description: 'No se pudo enviar el mensaje. Inténtalo más tarde' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="w-full m-auto flex flex-col gap-4 lg:w" style={{"--w-lg": "60%"}} onSubmit={handleSubmit}>
            <div className="w-full flex gap-4">
                <div className="w-full flex flex-col gap-4">
                    <label htmlFor="name" className="block fw-bold uppercase">Ingresa tu nombre <span className="color-danger fs-xl">*</span></label>
                    <input type="text" name="name" id="name" className="input" value={form.name} onChange={handleChange} disabled={loading} />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <label htmlFor="lastname" className="block fw-bold uppercase">Ingresa tu apellido <span className="color-danger fs-xl">*</span></label>
                    <input type="text" name="lastname" id="lastname" className="input" value={form.lastname} onChange={handleChange} disabled={loading} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-4">
                <label htmlFor="email" className="block fw-bold uppercase">Ingresa tu email <span className="color-danger fs-xl">*</span></label>
                <input type="email" name="email" id="email" className="input" value={form.email} onChange={handleChange} disabled={loading} />
            </div>
            <div className="w-full flex flex-col gap-4">
                <label htmlFor="message" className="block fw-bold uppercase">¿Cómo podemos ayudarte? <span className="color-danger fs-xl">*</span></label>
                <textarea name="message" id="message" className="textarea" value={form.message} onChange={handleChange} disabled={loading} />
            </div>
            <div className="w-full">
                <button className="w-fit pv-4 ph-8 rounded-full bg-primary" disabled={loading}>{loading ? 'Enviando...' : 'Contáctanos'}</button>
            </div>
        </form>
    )
}