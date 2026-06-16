'use client';

import { useDB } from "@/context/DBContext";
import { formAddContact } from "@/services/contact.service";
import { useState } from "react";
import { toast } from "sonner";

export default function FormContact () {

    const { tours } = useDB();
    
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        phone: '',
        tour: '',
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
            if (!form.name || !form.phone || !form.email || !form.message || !form.tour) return toast('Completa los datos antes de enviar.')
                setLoading(true);
                await formAddContact(form)
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    tour: '',
                    message: ''
                });
                toast('Se envió tu mensaje correctamente.')
        } catch (error) {
            console.error(error);
            toast(`Error: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="w-full flex flex-col gap-4" data-aos="fade-up" onSubmit={handleSubmit}>
            <div className="w-full">
                <label htmlFor="name" className="none" aria-label="Ingresa tu nombre">Ingresa tu nombre</label>
                <input type="text" className="input" name="name" id="name" value={form.name} placeholder="Ingresa tu nombre" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                    <label htmlFor="email" className="none" aria-label="Ingresa tu correo electrónico">Ingresa tu correo electrónico</label>
                    <input type="email" className="input" name="email" id="email" value={form.email} placeholder="Ingresa tu correo electrónico" onChange={handleChange} disabled={loading}/>
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="none" aria-label="Ingresa tu número telefónico">Ingresa tu número telefónico</label>
                    <input type="number" inputMode="numeric" className="input" name="phone" id="phone" value={form.phone} placeholder="Ingresa tu número telefónico" onChange={handleChange} disabled={loading}/>
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="tour" className="none" aria-label="Selecciona el tour que te interesa">Selecciona el tour que te interesa</label>
                <select className="input" name="tour" id="tour" value={form.tour} onChange={handleChange} disabled={loading}>
                    <option value={''}>Selecciona el tour que te interesa</option>
                    {tours.map((tour) => (
                        <option key={tour.id} value={tour.id}>{tour.experience_name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="none" aria-label="Déjanos un mensaje...">Déjanos un mensaje...</label>
                <textarea className="textarea" name="message" id="message" value={form.message} placeholder="Déjanos un mensaje..." onChange={handleChange} disabled={loading}/>
            </div>
            <div className="w-full">
                <button className="btn-decorative">
                    {loading ? 'Enviando...' : 'Enviar'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" className="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                    <span className="arrow"></span>
                </button>
            </div>
        </form>
    )
}