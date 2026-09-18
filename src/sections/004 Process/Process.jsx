import { Section } from "@/components";
import { processes } from "@/data";
import ProcessCard from "./ProcessCard";

export default function Process () {
    return (
        <Section id="process-section" className="pt-6 stacked text-center text-primary">
            <div className="stacked space-y-4">
                <h3 className="uppercase text-blue-500">el proceso</h3>
                <h2 className="text-3xl md:text-4xl font-bold ">Simple. Personalizado. Eficaz.</h2>
                <h4 className="text-balance text-sm">Desde tu primera conversación hasta lograr avances reales, así es como funciona:</h4>
            </div>
            <div className="xs:max-md:spaced-col md:spaced md:space-x-2 xs:max-md:space-y-4 xs:max-md:mt-10 md:mt-20 ">
                {processes?.map((p, index)=> {
                    return (
                        <ProcessCard key={p.id} data={p} ifLast={index === processes.length -1 } />
                    )
                })}
            </div>
        </Section>
    );
}

