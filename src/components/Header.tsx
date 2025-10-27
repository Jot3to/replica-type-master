import logo from "@/assets/logo-mi-lista-de-novios.png";

export const Header = () => {
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <a href="https://milistadenovios.cl" target="_blank" rel="noopener noreferrer">
          <img 
            src={logo} 
            alt="Mi Lista de Novios" 
            className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </header>
  );
};
