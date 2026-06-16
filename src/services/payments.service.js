import { IS_DEV } from "@/config";

const URL = IS_DEV === 'dev' ? 'http://localhost:4000' : 'https://backend.kintutravelexpeditions.com'

export const getTokenForm = async (form) => {
    try {
        
        const response = await fetch(`${URL}/formToken`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const data = await response.json();

        if (!response.ok) throw new Error(response.statusText || data.message || 'Hubo un error inesperado');
        
            return data;

    } catch (error) {
        return { ok: false, error: error, message: error.message, code: 500 }
    }
}

export const validateForm = async (paymentData) => {
    try {
        
        const response = await fetch(`${URL}/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'kr-answer': paymentData.rawClientAnswer,
                'kr-hash': paymentData.hash,
            }),
        })

        const data = await response.json();

        if (!response.ok) throw new Error(response.statusText || data.message || "Error inesperado");
        
            console.log(data);
            return data;

    } catch (error) {
        return { ok: false, error: error, message: error.message, code: 500 }
    }
}