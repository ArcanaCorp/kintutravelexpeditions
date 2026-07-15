'use client';

import { useDB } from "@/context/DBContext";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import StepOne from "./ProcessPay/StepOne";
import StepTwo from "./ProcessPay/StepTwo";
import StepThree from "./ProcessPay/StepThree";

export default function ModalBooking ({ book }) {

    const { step, clearBook } = useDB();

    if (!book) return null;

    return (
        <>
            <div className="fixed inset-0 w-screen h-screen center bg-dark-transparent z-modal">
                <div className="w-full m-auto p-4 rounded-md bg-white lg:w" style={{"--w-lg": "40%"}}>
                    <div className="w-full flex items-center justify-between">
                        <div className="w" style={{"--mxw": "80%"}}>
                            <h3>Editar los detalles</h3>
                            <p className="fs-sm color-gray">Completa tu información para continuar con el proceso de reserva.</p>
                        </div>
                        <button className="size center bg-n1 rounded-full" style={{"--size": "50px"}} onClick={clearBook}><IconX/></button>
                    </div>
                    <div className="w-full pv-8 flex flex-col gap-4">
                        <div className="w-full flex items-center justify-between bg-n1 rounded-md p-2">
                            <div className="flex gap-4">
                                <div className="relative size rounded-md bg-n1" style={{"--size": "80px"}}>
                                    <Image src={book.cover} alt="" fill />
                                </div>
                                <div>
                                    <p className="fs-sm color-gray">{book.tour_name}</p>
                                    <h2>{book.experience_name}</h2>
                                </div>
                            </div>
                            <h3 className="fs-xl">S/. {(book?.total_price).toFixed(2)} <span className="fs-xs color-gray fw-regular">/persona</span></h3>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p className={`size rounded-full center ${step === 1 ? 'bg-dark color-white' : 'bg-n1'}`} style={{"--size": "40px"}}>1</p>
                                <p className={`fs-sm ${step === 1 ? 'fw-bold' : 'fw-regular'}`}>Datos personales</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className={`size rounded-full center ${step === 2 ? 'bg-dark color-white' : 'bg-n1'}`} style={{"--size": "40px"}}>2</p>
                                <p className={`fs-sm ${step === 2 ? 'fw-bold' : 'fw-regular'}`}>Pagos</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className={`size rounded-full center ${step === 3 ? 'bg-dark color-white' : 'bg-n1'}`} style={{"--size": "40px"}}>3</p>
                                <p className={`fs-sm ${step === 3 ? 'fw-bold' : 'fw-regular'}`}>Completado</p>
                            </div>
                        </div>
                        {step === 1 && ( <StepOne/> )}
                        {step === 2 && ( <StepTwo/> )}
                        {step === 3 && ( <StepThree/> )}
                    </div>
                </div>
            </div>
        </>
    )
}