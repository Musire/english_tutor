import { Body, Caption, H2, H3 } from "@/components";
import { WhatsappButton } from "../003 CTA";

export default function HeroArticle () {
    return (
        <>
        <div className="lg:max-w-1/2 xs:max-md:mt-20 lg:mt-0 text-primary stacked xs:max-lg:items-center lg:space-y-12 md:justify-center  w-full"> 
                <H3 className="text-sm ">
                    IN-PERSON ENGLISH TUTORING
                </H3>
                <H2 className="flex flex-col text-3xl md:text-5xl text-balance text-charcoal xs:max-lg:text-center md:font-bold font-poppins font-bold">
                    <span className="text-primary">Mejorar tu inglés</span>
                    <span className="text-primary">Abre más <strong className="text-blue-500" >puertas</strong></span>
                </H2>
                <Body className="flex flex-col space-y-4 xs:max-lg:text-center">
                    <Caption className="text-fluid text-balance">
                        No todos necesitan aprender inglés de la misma manera.
                    </Caption>
                    <Caption className="text-fluid text-balance">
                        Primero conocemos tu nivel, tus objetivos y las situaciones donde necesitas utilizar el idioma. Después diseñamos un plan de estudio personalizado para ayudarte a avanzar de forma estructurada.
                    </Caption>
                    <Caption className="text-fluid-sm font-semibold text-balance text-blue-500">
                        Inglés Académico · Inglés Conversacional · Inglés Profesional y Técnico
                    </Caption>
                </Body>
                <WhatsappButton />
        </div>
        </>
    );
}