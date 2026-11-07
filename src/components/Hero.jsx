import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowDown, Sparkles } from 'lucide-react';

const cinematicPhrases = [
  "A arte da precisão em cada detalhe.",
  "Excelência e exclusividade em unhas de alto padrão.",
  "O ritual de beleza que suas mãos merecem.",
  "Sofisticação e durabilidade com acabamento impecável."
];

export const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleWhatsAppBooking = (serviceName) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar um horário no AURA Nail Studio.`);
    window.open(`https://wa.me/5541984000638?text=${message}`, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % cinematicPhrases.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      {/* Background Cinematográfico com Vídeo Local Garantido */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-aura-black/65 z-10"></div>
        <div className="absolute inset-0 bg-linear-to-b from-aura-black/90 via-aura-black/40 to-aura-black z-10"></div>
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125"
        >
          {/* Aponta direto para o arquivo local salvo na pasta public */}
          <source src="/hero-bg.mp4" type="video/mp4" />
          Seu navegador não suporta tags de vídeo.
        </video>
      </div>

      {/* Conteúdo Principal Organizado */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">
        
        {/* Badge Studio */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-aura-gold font-medium">
            Studio Exclusivo em Curitiba
          </span>
        </motion.div>

        {/* Título Rotativo com Altura Dinâmica Segura */}
        <div className="w-full py-2 mb-4 min-h-27.5 sm:min-h-32.5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight max-w-3xl"
            >
              {cinematicPhrases[currentPhraseIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtítulo Parágrafo */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl font-light tracking-wide mb-8 leading-relaxed px-4"
        >
          Especialista em alongamentos estruturados, blindagem de alto desempenho e nail art personalizada para mulheres exigentes.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <a
            onClick={() => handleWhatsAppBooking()}
            href="#agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-aura-black bg-linear-to-r from-aura-gold to-aura-gold-light rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Reservar Horário
          </a>
          
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-white border border-white/20 hover:border-aura-gold hover:text-aura-gold rounded-full backdrop-blur-xs transition-all duration-300"
          >
            Explorar Serviços
          </a>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-1 cursor-pointer z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.2em]">Deslize</span>
        <ArrowDown className="w-3.5 h-3.5 text-aura-gold" />
      </motion.div>
    </section>
  );
};