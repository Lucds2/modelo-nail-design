import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Check } from 'lucide-react';

const categories = ["Todos", "Alongamento", "Blindagem", "Nail Art"];

// Mapeamento dos serviços utilizando as imagens locais otimizadas (.webp) na pasta public/images
const services = [
  {
    id: 1,
    title: "Alongamento em Gel Moldado",
    category: "Alongamento",
    description: "Estrutura personalizada com curvatura natural, alta durabilidade e acabamento ultrafino.",
    features: ["Resistência superior", "Aspeto 100% natural", "Manutenção a cada 25 dias"],
    image: "/images/service-5.webp"
  },
  {
    id: 2,
    title: "Blindagem de Alto Desempenho",
    category: "Blindagem",
    description: "Escudo protetor em gel para unhas naturais, promovendo crescimento saudável sem quebras.",
    features: ["Proteção contra quebras", "Brilho de vidro prolongado", "Ideal para unhas fracas"],
    image: "/images/service-2.webp"
  },
  {
    id: 3,
    title: "Nail Art Minimalista & Luxo",
    category: "Nail Art",
    description: "Design exclusivo feito à mão com detalhes em folha de ouro, traços finos e pedrarias finas.",
    features: ["Design exclusivo", "Pigmentos importados", "Personalização total"],
    image: "/images/service-3.webp"
  },
  {
    id: 4,
    title: "Esmaltação em Gel Premium",
    category: "Blindagem",
    description: "Cor intensa com secagem imediata em cabine LED/UV e duração impecável por semanas.",
    features: ["Sem tempo de secagem", "Zero lascas por 20 dias", "Remoção segura"],
    image: "/images/service-4.webp"
  },
  {
    id: 5,
    title: "Alongamento Fibra de Vidro",
    category: "Alongamento",
    description: "Técnica de alta precisão para máxima leveza e resistência com visual extremamente sofisticado.",
    features: ["Super leve", "Adaptável a qualquer formato", "Acabamento de luxo"],
    image: "/images/service-1.webp"
  },
  {
    id: 6,
    title: "Spa de Mãos & Ritual Exclusivo",
    category: "Nail Art",
    description: "Esfoliação renovadora, hidratação profunda com óleos essenciais e massagem relaxante.",
    features: ["Hidratação profunda", "Cutilagem contínua", "Experiência sensorial"],
    image: "/images/service-6.webp"
  }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredServices = activeCategory === "Todos"
    ? services
    : services.filter(service => service.category === activeCategory);

  const handleWhatsAppBooking = (serviceName) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar um horário para o serviço: ${serviceName} no AURA Nail Studio.`);
    window.open(`https://wa.me/5541984000638?text=${message}`, '_blank');
  };

  return (
    <section id="galeria" className="py-24 px-4 bg-aura-black relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-aura-gold font-medium">
              Menu de Serviços & Galeria
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide"
          >
            Experiências & Procedimentos
          </motion.h2>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-aura-gold text-aura-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-aura-card text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cards dos Serviços */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.title}
                className="group bg-aura-card rounded-2xl overflow-hidden border border-white/5 hover:border-aura-gold/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Container da Imagem Local */}
                  <div className="relative h-64 overflow-hidden bg-aura-black">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-aura-card via-transparent to-transparent pointer-events-none"></div>
                    <span className="absolute top-4 left-4 bg-aura-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-aura-gold border border-aura-gold/30 z-20">
                      {service.category}
                    </span>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-aura-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Destaques do Serviço */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-light">
                          <Check className="w-3.5 h-3.5 text-aura-gold shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão de Agendar Serviço */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => handleWhatsAppBooking(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 group-hover:bg-aura-gold group-hover:text-aura-black text-white text-xs uppercase tracking-widest font-semibold border border-white/10 group-hover:border-aura-gold transition-all duration-300 cursor-pointer"
                  >
                    <span>Agendar Procedimento</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};