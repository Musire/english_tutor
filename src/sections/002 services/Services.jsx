import { Section } from "@/components";
import ServiceCard from "./ServiceCard";

export default function Services () {
    return (
        <Section id="service-section" className="pt-6 stacked text-center text-primary">
            <div className="stacked space-y-4">
                <h2 className="uppercase text-blue-500">servicios</h2>
                <h3 className="text-3xl md:text-4xl font-bold ">Ingles para cada meta</h3>
                <h4 className="text-balance text-sm">Tres programas enfocados, una meta - tu exito.</h4>
            </div>
            <div className="xs:max-md:spaced-col md:spaced md:space-x-2 xs:max-md:space-y-4  ">
                <ServiceCard variant='kids' />
                <ServiceCard variant='conversational' />
                <ServiceCard variant='professional' />
            </div>
        </Section>
    );
}