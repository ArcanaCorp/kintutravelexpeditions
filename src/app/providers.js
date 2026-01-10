import { AIProvider } from "../context/AIContext";

export default function Providers ({ children }) {

    return (

        <>
            <AIProvider>
                {children}
            </AIProvider>
        </>

    )

}