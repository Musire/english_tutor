import { PencilSparkles, ShieldAlert, Slice, Sprout } from "lucide-react";
import { Modal } from "../Modal";
import { BottomDrawer } from ".";

export default function ResponsivePopover ({
    isMounted,
    animation,
    closeDrawer,
}) {
    if (!isMounted) return null;

    return (
        <>
            <div className="xs:max-md:hidden">
                <Modal  
                    isMounted={isMounted}
                    onClose={closeDrawer}
                    title="Benificios"
                    isEntering={animation}
                >
                    <ul className="stacked space-y-2">
                        <li className="flex items-center space-x-4">
                            <PencilSparkles />
                            <span className="">Antimanchas</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Slice  />
                            <span className="">Antirrayas</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <ShieldAlert  />
                            <span className="">{`Antiviral, antihongo y antibacteriano  > 99%`}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Sprout />
                            <span className="">Producción responsable</span>
                        </li>
                    </ul>
                </Modal>
            </div>
            <div className="md:hidden">
                <BottomDrawer 
                    isMounted={isMounted}
                    onClose={closeDrawer}
                    title="Benificios"
                    isEntering={animation}
                >
                    <ul className="stacked space-y-2">
                        <li className="flex items-center space-x-4">
                            <PencilSparkles />
                            <span className="">Antimanchas</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Slice  />
                            <span className="">Antirrayas</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <ShieldAlert  />
                            <span className="">{`Antiviral, antihongo y antibacteriano  > 99%`}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Sprout />
                            <span className="">Producción responsable</span>
                        </li>
                    </ul>
                </BottomDrawer>
            </div>
        </>
    );
}