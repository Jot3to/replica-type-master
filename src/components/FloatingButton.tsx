import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButton = () => {
  const handleClick = () => {
    window.open("https://milistadenovios.cl", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 h-auto py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-sm md:text-base flex items-center gap-2 z-50 animate-in slide-in-from-bottom-10 fade-in"
    >
      <Gift className="h-4 w-4 md:h-5 md:w-5" />
      <span className="hidden sm:inline">Conoce Mi Lista de Novios</span>
      <span className="sm:hidden">Crear Lista</span>
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
    </Button>
  );
};
