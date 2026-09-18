import heroImage from "@/assets/hero/hero_section.avif";
import heroWide from "@/assets/hero/hero_section_wide.avif";
import { Image, Section } from "@/components";
import { HeroArticle } from ".";

export default function Hero() {
    return (
        <Section
            id="hero-section"
            className="relative min-h-150 xs:max-md:pb-4 md:h-dvh py-0 md:overflow-hidden flex flex-col md:block "
        >
            {/* Desktop Wide Background Image (Remains absolute behind the text) */}
            <div className="hidden md:block absolute inset-0 w-full h-full z-0">
                <Image
                    src={heroWide}
                    className="h-full w-full"
                    priority
                />
            </div>

            {/* Mobile Portrait Image (Acts as a natural flex child) */}
            <div className="w-full h-[40vh] md:hidden order-1 shrink-0">
                <Image
                    priority
                    src={heroImage}
                    className="h-full w-full"
                    contain={false} // Uses object-cover via your component defaults
                    position="object-right-bottom" // Aligns to the right bottom inside the flex block
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full md:h-full  lg:px-20 md:pt-20 order-2 ">
                <HeroArticle />
            </div>
        </Section>
    );
}
