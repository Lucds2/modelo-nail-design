import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Gem, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: "Biossegurança Rigorosa",
    description: "Esterilização hospitalar em autoclave, materiais 100% descartáveis e kits individuais para cada cliente."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Acolhedor",
    description: "Um espaço pensado para o seu momento de pausa, com ritual de cortesia e conforto absoluto em Curitiba."
  },
  {
    icon: Gem,
    title: "Produtos Premium",
    description: "Utilização exclusiva de géis hipoalergénicos importados, esmaltes de alta fixação e brilho prolongado."
  }
];

export const About = () => {
  const handleWhatsAppAbout = () => {
    const message = encodeURIComponent("Olá! Conheci a seção O Studio no site e gostaria de agendar uma experiência no AURA Nail Studio.");
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank');
  };

  return (
    <section id="sobre" className="relative py-20 sm:py-32 px-4 overflow-hidden bg-aura-black border-t border-white/5">
      
      {/* Vídeo de Fundo Enquadrado Perfeitamente no Mobile e Desktop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full min-h-full object-cover object-center filter brightness-45 sm:brightness-50"
        >
          <source src="/welcome.mp4" type="video/mp4" />
        </video>
        {/* Gradiente escuro para contraste impecável em qualquer ecrã */}
        <div className="absolute inset-0 bg-linear-to-b from-aura-black via-aura-black/90 to-aura-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-aura-gold font-medium">
              O Studio & Filosofia
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4 sm:mb-6 leading-tight"
          >
            Onde a Excelência Encontra o Cuidado Pessoal
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xs sm:text-base font-light leading-relaxed px-2 sm:px-0"
          >
            Fundado em Curitiba, o <strong className="text-white font-medium">AURA Nail Studio</strong> nasceu com o propósito de redefinir o conceito de design e saúde ungueal. Cada detalhe do nosso ambiente foi projetado para proporcionar uma experiência sensorial única, unindo técnica de alta precisão, exclusividade e bem-estar.
          </motion.p>
        </div>

        {/* Grid dos Pilares / Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-aura-card/70 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-aura-gold/40 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-aura-gold/10 border border-aura-gold/30 flex items-center justify-center text-aura-gold mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-aura-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Caixa de Convite / CTA Final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-linear-to-r from-aura-card via-aura-card/80 to-aura-card p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-aura-gold/30 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-aura-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Permita-se viver esta experiência
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm font-light max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Venha desfrutar de um atendimento personalizado na melhor localização de Curitiba. Agende o seu horário e descubra o verdadeiro significado de unhas impecáveis.
          </p>
          
          <button
            onClick={handleWhatsAppAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-aura-gold text-aura-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <span>Agendar Meu Horário</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};