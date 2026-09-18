import { useEffect, useRef, useState } from "react";

export default function BottomDrawer({
    isMounted,
    onClose,
    title,
    children,
    isEntering,
}) {
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const startY = useRef(0);
    const currentY = useRef(0);

    /*
     * Lock background page scrolling while drawer is open
     */
    useEffect(() => {
        if (!isMounted) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isMounted]);

    /*
     * Reset drag state when drawer is unmounted
     */
    useEffect(() => {
        if (!isMounted) {
            setDragY(0);
            setIsDragging(false);
        }
    }, [isMounted]);

    /*
     * Start dragging
     */
    const handlePointerDown = (event) => {
        startY.current = event.clientY;
        currentY.current = event.clientY;

        setIsDragging(true);

        event.currentTarget.setPointerCapture?.(event.pointerId);
    };

    /*
     * Handle dragging
     */
    const handlePointerMove = (event) => {
        if (!isDragging) return;

        currentY.current = event.clientY;

        const deltaY = currentY.current - startY.current;

        // Only allow dragging downward.
        if (deltaY > 0) {
            setDragY(deltaY);
        }
    };

    /*
     * Finish dragging
     */
    const handlePointerUp = (event) => {
        if (!isDragging) return;

        const deltaY = currentY.current - startY.current;

        setIsDragging(false);

        /*
         * Dragged far enough → close drawer
         */
        if (deltaY > 120) {
            setDragY(0);
            onClose();
            return;
        }

        /*
         * Not far enough → snap back
         */
        setDragY(0);

        event.currentTarget.releasePointerCapture?.(
            event.pointerId
        );
    };

    /*
     * Cancel dragging
     */
    const handlePointerCancel = () => {
        setIsDragging(false);
        setDragY(0);
    };

    if (!isMounted) return null;

    return (
        <aside
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bottom-drawer-title"
        >
            {/* =========================================================
                OVERLAY
            ========================================================= */}
            <div
                className={`
                    fixed inset-0
                    bg-black/40
                    backdrop-blur-sm
                    transition-opacity
                    duration-300
                    ${
                        isEntering
                            ? "opacity-100"
                            : "opacity-0"
                    }
                `}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* =========================================================
                DRAWER
            ========================================================= */}
            <div
                className={`
                    fixed
                    bottom-0
                    left-0
                    right-0
                    z-10

                    w-full
                    bg-background

                    shadow-2xl
                    rounded-t-2xl

                    flex
                    flex-col

                    max-h-[90vh]
                    overflow-hidden

                    ${
                        isDragging
                            ? ""
                            : "transition-transform duration-300 ease-out"
                    }

                    ${
                        !isDragging && isEntering
                            ? "translate-y-0"
                            : !isDragging
                            ? "translate-y-full"
                            : ""
                    }
                `}
                style={{
                    transform: isDragging
                        ? `translateY(${dragY}px)`
                        : undefined,

                    /*
                     * Prevent the browser from interpreting
                     * the drawer gesture as page scrolling.
                     */
                    touchAction: "none",
                }}
            >
                {/* =====================================================
                    DRAG HANDLE
                ===================================================== */}
                <div
                    className="
                        flex
                        justify-center
                        pt-3
                        pb-2
                        cursor-grab
                        active:cursor-grabbing
                        select-none
                        touch-none
                    "
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >
                    <div
                        className="
                            h-1.5
                            w-12
                            rounded-full
                            bg-charcoal
                        "
                    />
                </div>

                {/* =====================================================
                    HEADER
                ===================================================== */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-6
                        py-4
                        border-b
                        shrink-0
                    "
                >
                    <h3
                        id="bottom-drawer-title"
                        className="
                            text-lg
                            font-semibold
                            text-charcoal
                        "
                    >
                        {title}
                    </h3>
                </div>

                {/* =====================================================
                    BODY
                ===================================================== */}
                <div
                    className="
                        p-6
                        overflow-y-auto
                        overscroll-contain
                    "
                    style={{
                        /*
                         * Body can scroll vertically,
                         * but scrolling cannot propagate
                         * to the page behind the drawer.
                         */
                        touchAction: "pan-y",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {children}
                </div>
            </div>
        </aside>
    );
}