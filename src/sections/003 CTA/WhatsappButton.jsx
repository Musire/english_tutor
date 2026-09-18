import { Whatsapp } from "@/assets";
import { Body } from "@/components";
import { ChevronRight } from "lucide-react";


export default function WhatsappButton ({ message="Hola, me interesa saber más información sobre las clases de inglés." }) {
    const phone = "526143138724";
    const whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

return (
        <a
            href={whatsappUrl}
            className=" bg-accent hover:bg-darken-1/accent hover:translate-y-[.12rem] normal-space cursor-pointer text-primary w-fit flex items-center space-x-2 rounded-lg"
        >
            <Whatsapp  className=" row-span-2 w-[clamp(1rem,4vw,2.5rem)] h-[clamp(1rem,4vw,2.5rem)]" />
            <Body className="text-base w-48 ">Mensaje en Whatsapp</Body>
            <ChevronRight />
        </a>
    );
}