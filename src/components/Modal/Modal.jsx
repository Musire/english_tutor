export default function Modal({ isMounted, onClose, title, children, isEntering}) {
    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 40% Black Overlay with smooth opacity transition */}
            <div 
                className={`
                    fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-0
                    ${isEntering ? "opacity-100" : "opacity-0"}
                    
                `}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container with scale/fade transition */}
            <div 
                className={`
                    relative z-10 w-full max-w-md bg-background dark:bg-zinc-900 shadow-xl 
                    rounded-2xl flex flex-col overflow-hidden max-h-[90vh]
                    transition-all duration-300 ease-out
                    
                `}
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b ">
                    <h3 className="text-lg font-semibold text-charcoal ">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-else hover:text-zinc-600  p-1 rounded-lg"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}