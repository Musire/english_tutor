import { MetadataManager, Navbar, ScrollHandler } from "@/components";
import Footer from "@/sections/005 Footer/Footer";
import { useLayoutEffect, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const mainContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      mainContainerRef.current.scrollTop = 0; // Fallback hard set
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="max-w-dvw min-h-dvh flex flex-col overflow-x-hidden overflow-y-auto bg-background text-foreground scrollbar-adjust">
        <MetadataManager />
        <ScrollHandler />
        <Navbar />
        <main ref={mainContainerRef} className=" flex flex-1 mt-16 font-inter">
            <Outlet /> 
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
