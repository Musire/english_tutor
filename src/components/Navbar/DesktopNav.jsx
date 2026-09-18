import logoIdea from "@/assets/logo_idea.png";
import { Image, Link } from "@/components";

export default function DesktopNav ({ tabs }) {
    return (
        <nav className="xs:max-md:hidden bg-background  text-deep border-b border-border w-full h-16 fixed left-0 top-0  bg-card xs:px-10 lg:px-24 spaced shrink-0 z-50">
            <Link href="/" className="font-noto md:text-fluid-xl lg:text-fluid-2xl font-medium min-w-52 w-fit shrink-0">
                <div className="overflow-hidden w-32 ">
                    <Image 
                        src={logoIdea}
                    />
                </div>
            </Link>
            <ul className="flex space-x-8">
                {tabs?.map(t => (
                    <li key={t.id} className="">
                        <Link 
                           href={t.href}
                           className="normal-space hover:border-b-2 blip md:text-sm lg:text-lg"
                        >{t.label}</Link>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
}