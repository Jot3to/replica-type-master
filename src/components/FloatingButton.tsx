import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButton = () => {
  const handleClick = () => {
    window.open("https://milistadenovios.cl", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-auto py-4 px-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-base md:text-lg flex items-center gap-3 z-50 animate-in slide-in-from-bottom-10 fade-in"
    >
      <Gift className="h-5 w-5 md:h-6 md:w-6" />
      <span className="hidden sm:inline">Conoce Mi Lista de Novios</span>
      <span className="sm:hidden">Crear Lista</span>
      <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
    </Button>
  );
};
