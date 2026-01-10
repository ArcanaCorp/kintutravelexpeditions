import { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";
import { useAI } from "@/context/AIContext";
import { useTypewriter } from "@/features/components/text/TextWriting";

export default function EntryAI() {

    const { entry, setEntry, setViewModal } = useAI();
    const [hasTyped, setHasTyped] = useState(false);

    const questions = [
        '¿Mejor fecha para conocer Jauja?',
        '¿Tienen paquetes para la Tunantada 2026?',
        '¿Es seguro viajar con Kintu Travel Expeditions?',
        '¿Por qué viajar con Kintu Travel Expeditions?'
    ];

    const animatedText = useTypewriter(questions, !hasTyped);

    const handleInput = (e) => {
        const value = e.target.value;
        setHasTyped(value.trim().length > 0);
        setEntry(value);
    };

    const handleInit = () => {
        if (!entry.trim()) return;
        setViewModal(true);
    };

    return (
        <>
            <input
                className="w-full pv-4 ph-4 rounded-pill"
                value={entry}
                onChange={handleInput}
            />

            {!hasTyped && (
                <span className="absolute text-xs text-gray">
                    {animatedText}
                </span>
            )}

            <button
                className="absolute bg-dark center rounded-pill"
                onClick={handleInit}
            >
                <IconSparkles color="#FFFFFF" />
            </button>
        </>
    );
}