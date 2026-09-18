import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const tabs = [
    {
        id: 'services-section-link',
        href: '/#service-section',
        icon: 'icon',
        label: 'Servicios'
    },
    {
        id: 'process-section-link',
        href: '/#process-section',
        icon: 'icon',
        label: 'Proceso'
    },
    {
        id: 'CTA-section-link',
        href: '/#CTA-section',
        icon: 'icon',
        label: 'Contactanos'
    },
]

export default function Navbar () {
    return (
        <div className="bg-primary">
            <MobileNav tabs={tabs} />
            <DesktopNav tabs={tabs} />
        </div>
    );
}