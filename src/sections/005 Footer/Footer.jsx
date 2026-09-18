import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import logoIdea from "@/assets/logo_idea.avif";
import { Image, Section } from "@/components";

export default function Footer () {
    return (
        <Section className="spaced min-h-32">
            <div className="overflow-hidden w-32 ">
                <Image 
                    src={logoIdea}
                />
            </div>
            <div className="flex items-center space-x-2">
                <button aria-label="social-media-button-facebook" type="button" className="p-2 centered rounded-xl hover:bg-gray-300 cursor-pointer">
                    <Facebook strokeWidth={2} size={30} />
                </button>
                <button aria-label="social-media-button-instagram" type="button" className="p-2 centered rounded-xl hover:bg-gray-300 cursor-pointer">
                    <Instagram strokeWidth={2} size={30} />
                </button>
            </div>
        </Section>
    );
}