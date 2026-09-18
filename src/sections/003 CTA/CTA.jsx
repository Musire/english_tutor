import CTAIcon from "@/assets/CTA_image.png";
import { Image, Section } from "@/components";
import { WhatsappButton } from ".";

export default function CTA () {
    return (
        <Section id="CTA-section" className="min-h-[30dvh] bg-primary xs:max-md:spaced-col  md:spaced w-full">
            <article className="xs:max-md:text-center xs:max-md:pt-10 xs:max-md:centered-col xs:max-md:items-center md:stacked space-y-3 text-background max-w-xl ">
                <p className="uppercase text-sm">¿Listo para empezar?</p>
                <p className="text-4xl font-bold">Hablemos de tus objetivos.</p>
                <p className="text-sm text-balance">Envíame un mensaje por WhatsApp y te ayudaré a encontrar el camino adecuado para tu aprendizaje de inglés.</p>
                <WhatsappButton />
            </article>
            <div className="xs:max-md:w-full xs:max-md:py-12 md:w-96 md:mr-20">
                <Image
                    src={CTAIcon}
                    contain
                />
            </div>
        </Section>
    );
}