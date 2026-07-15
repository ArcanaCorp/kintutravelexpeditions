'use client';
import { useDB } from '@/context/DBContext';
import { validateForm } from '@/services/payments.service';
import KRGlue from '@lyracom/embedded-form-glue'
import { useEffect } from 'react'

export default function StepTwo () {

    const { stepChange } = useDB();

    useEffect(() => {

        let endpoint = "https://static.micuentaweb.pe";
        let publicKey = localStorage.getItem('publicKey')
        let formToken = localStorage.getItem('formToken')

        //Configurar libreria con los datos recibidos de su servidor
        KRGlue.loadLibrary(endpoint, publicKey).then(({ KR }) => {
            KR.setFormConfig({
                formToken: formToken,
                'kr-language': 'es-ES',
            });

            //Incrustar la pasarela
            KR.attachForm('#micuentawebstd_rest_wrapper').then(({ KR, result }) => {
                KR.showForm(result.formId);
            });

            //Al recibir la respuesta enviar a su servidor a validar los datos
            KR.onSubmit(async (paymentData) => {
                try {
                    const isValid = await validateForm(paymentData);

                    if (isValid.ok) {
                        localStorage.setItem('paymentData', JSON.stringify(paymentData.clientAnswer))
                        stepChange(3)
                    }
                } catch (error) {
                    console.error('Error validando pago:', error);
                }
                return false;
            });
        })

    }, [])

    return (
        <>
            <div className="w-full flex flex-col gap-6">
                <div id="micuentawebstd_rest_wrapper">
                    <div className="kr-embedded"></div>
                </div>
            </div>
        </>
    )
}