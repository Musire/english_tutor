import { CTA, Hero, Process, Services } from "@/sections";

export default function Page () {
    return (
        <div className="flex-1 stacked space-y-4 max-w-full">
            <Hero />
            <Services />
            <Process />
            <CTA />
        </div>
    );
}

