import { ArrowUp, Phone, Globe, Heart, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // URL do Google Maps com a localização do Terminal do Sítio Cercado em Curitiba
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Terminal+do+S%C3%ADtio+Cercado+Curitiba+PR";

  return (
    <footer className="bg-aura-black border-t border-white/10 pt-16 pb-12 px-4 relative z-10 text-gray-400">
      <div className="max-w-7xl mx-auto">
        
        {/* Conteúdo Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center pb-12 border-b border-white/5">
          
          {/* Coluna Esquerda: Marca / Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block font-serif text-2xl font-bold tracking-[0.2em] text-white mb-2">
              AURA <span className="text-aura-gold font-light text-base">NAIL STUDIO</span>
            </a>
            <p className="text-xs text-gray-400 font-light tracking-wide max-w-xs mx-auto md:mx-0">
              Excelência, sofisticação e biossegurança em design de unhas em Curitiba, Paraná.
            </p>
          </div>

          {/* Coluna Central: Endereço & Botão Google Maps */}
          <div className="flex flex-col items-center justify-center text-center">
            <a 
              href={mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-aura-gold/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-aura-gold/10 border border-aura-gold/30 flex items-center justify-center text-aura-gold group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.15em] text-white font-medium group-hover:text-aura-gold transition-colors">
                  Ver Localização no Maps
                </span>
                <span className="text-[11px] text-gray-400 font-light">
                  Aura Nail Studio — Curitiba, PR
                </span>
              </div>
            </a>
          </div>

          {/* Coluna Direita: Botão Voltar ao Topo */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-aura-card/80 border border-white/10 text-xs uppercase tracking-widest text-white hover:border-aura-gold hover:text-aura-gold transition-all duration-300 cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 text-aura-gold" />
            </button>
          </div>

        </div>

        {/* Linha Inferior: Copyright & LS DEV */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-light text-gray-500">
          
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} LSDEV Developer. Todos os direitos reservados.
          </p>

          {/* Assinatura e Contatos LS DEV */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://wa.me/5541984000638" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-aura-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-aura-gold" />
              <span>(41) 98400-0638</span>
            </a>

            <a 
              href="https://lsdev.dev.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-aura-gold transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-aura-gold" />
              <span>lsdev.dev.br</span>
            </a>

            <span className="text-gray-600 hidden sm:inline">|</span>

            <span className="flex items-center gap-1 text-gray-400">
              Desenvolvido com <Heart className="w-3 h-3 text-aura-gold fill-aura-gold" /> por <strong className="text-white font-medium">LS DEV</strong>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};