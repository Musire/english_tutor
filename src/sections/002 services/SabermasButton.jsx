import { Body } from "@/components";
import { ChevronRight } from "lucide-react";


export default function SabermasButton ({ message="Hola, me interesa saber más información sobre las clases de inglés." }) {
    const phone = "526143138724";
    const whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

return (
        <a
            href={whatsappUrl}
            className="  spaced normal-space border border-border cursor-pointer rounded hover:border-gray-400 hover:shadow-sm"
        >
            <Body className="text-base w-48 ">Saber mas</Body>
            <ChevronRight />
        </a>
    );
}