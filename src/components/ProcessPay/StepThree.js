'use client'
import { useDB } from "@/context/DBContext"
import { IconCircleCheck } from "@tabler/icons-react"

export default function StepThree () {

    const { clearBook } = useDB();

    const clientAnswer = JSON.parse(localStorage.getItem('paymentData'))

    const title = {
        'PAID': 'Pagado con éxito'
    }

    const textStatus = {
        'PAID': 'Pagado'
    }

    const iconStatus = {
        'PAID': <IconCircleCheck size={100} color="#16A34A"/>
    }

    const handleClose = () => {
        localStorage.removeItem('formToken')
        localStorage.removeItem('publicKey')
        localStorage.removeItem('paymentData')
        clearBook();
    }

    return (
        <>
            <h2 className="text-center">{title[clientAnswer?.orderStatus]}</h2>
        
            <div className="w-full h center" style={{"--h": "150px"}}>
                {iconStatus[clientAnswer?.orderStatus]}
            </div>

            <ul className="w-full bg-secondary p-2 rounded-md flex flex-col gap-2">
                <li className="w-full flex items-center justify-between h" style={{"--h": "50px"}}>
                    <span>ID</span>
                    <span>{clientAnswer?.orderDetails.orderId}</span>
                </li>
                <li className="w-full flex items-center justify-between h" style={{"--h": "50px"}}>
                    <span>Estado</span>
                    <span>{textStatus[clientAnswer?.orderStatus] || ''}</span>
                </li>
                <li className="w-full flex items-center justify-between h" style={{"--h": "50px"}}>
                    <span>Monto</span>
                    <span>{clientAnswer?.orderDetails.orderCurrency} {(clientAnswer?.orderDetails.orderTotalAmount / 100).toFixed(2)}</span>
                </li>
            </ul>
            <button className="w-full h rounded-full bg-dark color-white fw-bold" onClick={handleClose} style={{"--h": "50px"}}>Cerrar</button>
        </>
    )
}