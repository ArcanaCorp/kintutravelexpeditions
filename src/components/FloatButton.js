import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function FloatButton () {

    const message = "¡Hola! 👋 Visité la página web de *Kintu Travel Expeditions* y quisiera recibir información sobre sus tours, destinos y disponibilidad.";

    const whatsappUrl = `https://wa.me/51993507707?text=${encodeURIComponent(message)}`;

    return (
        <Link href={whatsappUrl} className="fixed center w h rounded-full bg-success" style={{"--w": "60px", "--h": "60px", bottom: "60px", right: "60px", zIndex: 999}} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Kintu Travel Expeditions por WhatsApp"><IconBrandWhatsapp color="#FFFFFF" size={38}/></Link>
    )
}