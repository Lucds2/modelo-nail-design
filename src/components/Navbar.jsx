import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

   const handleWhatsAppBooking = (serviceName) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar um horário no AURA Nail Studio.`);
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-aura-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo AURA */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-20 h-20 rounded-full bg-linear-to-tr from-aura-gold to-aura-gold-light p-px transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-aura-black rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-aura-gold" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[35px] tracking-[0.2em] text-white font-bold uppercase">
                Aura
              </span>
              <span className="text-[12px] tracking-[0.2em] text-aura-gold uppercase font-medium">
                Nail Studio
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Início</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Serviços</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Portfólio</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">O Studio</a>
            
          </div>

          {/* Botão Agendamento Desktop */}
          <div className="hidden md:block">
            <a
              onClick={() => handleWhatsAppBooking()}
              href="#agendar"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-aura-black bg-linear-to-r from-aura-gold to-aura-gold-light rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105"
            >
              Agendar Horário
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-aura-dark/98 border-b border-white/10 px-6 pt-6 pb-8 space-y-5 text-center backdrop-blur-xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Início</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Serviços</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">Portfólio</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-[0.2em] text-gray-200 py-2">O Studio</a>
            
          <a
            href="#agendar"
            onClick={() => setIsOpen(false)}
            className="inline-block w-full py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-aura-black bg-aura-gold rounded-full shadow-md"
          >
            Agendar Horário
          </a>
        </div>
      )}
    </nav>
  );
};