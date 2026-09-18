import logoIdea from "@/assets/logo_idea.avif";
import { Image, Link } from "@/components";
import { Menu } from "lucide-react";
import { useState } from "react";


export default function MobileNav ({ tabs }) {
    const [isOpen, setOpen] = useState()
    return (
        <nav className="md:hidden bg-background  text-deep border-b border-border w-full h-16 fixed left-0 top-0 bg-card xs:px-10 lg:px-24 spaced shrink-0 z-50">
            <Link href="/" className="font-noto md:text-fluid-xl lg:text-fluid-2xl font-medium min-w-52 w-fit shrink-0">
                <div className="overflow-hidden w-32 ">
                    <Image
                        priority 
                        src={logoIdea}
                    />
                </div>
            </Link>
            <button 
                type="button"
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)}    
            >
                <Menu />
            </button>
            {isOpen && (
                <aside className="bg-gray-200/90 backdrop-blur-sm w-dvw  fixed left-0  top-16 h-[89dvh]">
                    <div className="stacked space-y-2 w-full py-20 p-6">
                        {tabs.map(link => {
                            return (
                                <Link
                                    key={link.id} 
                                    href={link.href}
                                    onClick={() => setOpen(false) }
                                    className="border border-border normal-space text-center bg-background hover:bg-darken-1/background active:bg-lighten-1/background text-auto" 
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </aside>
            )}
        </nav>
    );
}