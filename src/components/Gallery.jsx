import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';

const categories = ["Todos", "Alongamentos", "Nail Art", "Minimalista", "Esmaltação"];

const galleryItems = [
  {
    id: 1,
    title: "Encapsulada Ouro & Nude",
    category: "Alongamentos",
    tag: "Gel Moldado",
    image: "/images/work-1.webp"
  },
  {
    id: 2,
    title: "Traços Finos & Minimalismo",
    category: "Nail Art",
    tag: "Hand Painted",
    image: "/images/work-2.webp"
  },
  {
    id: 3,
    title: "Black Velvet & Gloss",
    category: "Esmaltação",
    tag: "Gel Premium",
    image: "/images/work-3.webp"
  },
  {
    id: 4,
    title: "Efeito Mármore com Folha de Ouro",
    category: "Nail Art",
    tag: "Exclusive Design",
    image: "/images/work-4.webp"
  },
  {
    id: 5,
    title: "Curvatura C & Acabamento Slim",
    category: "Alongamentos",
    tag: "Fibra de Vidro",
    image: "/images/work-5.webp"
  },
  {
    id: 6,
    title: "Clean French Moderno",
    category: "Minimalista",
    tag: "Estilo Paris",
    image: "/images/work-6.webp"
  }
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredItems = activeCategory === "Todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Triplicamos os itens para garantir largura suficiente e loop infinito sem saltos
  const infiniteItems = [...filteredItems, ...filteredItems, ...filteredItems];

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 bg-aura-black relative z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-aura-gold font-medium">
                Galeria de Trabalhos & Lookbook
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide"
            >
              A Arte em Cada Detalhe
            </motion.h2>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl font-light tracking-wide mt-3 leading-relaxed">
              Clique na imagem e saiba mais sobre o procedimento.
            </p>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-aura-gold text-aura-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-aura-card/80 text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carrossel Infinito com Animação CSS Contínua */}
        <div 
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={`flex items-center gap-4 sm:gap-6 w-max animate-marquee ${isPaused ? 'animation-paused' : ''}`}>
            {infiniteItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedImage(item)}
                className="group relative min-w-60 sm:min-w-[320px] h-90 sm:h-110 rounded-2xl overflow-hidden bg-aura-card border border-white/10 hover:border-aura-gold/50 transition-all duration-500 cursor-pointer shrink-0"
              >
                {/* Imagem do Trabalho */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Overlays e Gradientes Dark Luxury */}
                <div className="absolute inset-0 bg-linear-to-t from-aura-black via-aura-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Badge Superior */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-aura-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-aura-gold border border-aura-gold/30">
                    {item.tag}
                  </span>
                </div>

                {/* Botão de Expandir no Hover */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-aura-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-aura-gold" />
                </div>

                {/* Legenda Inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-aura-gold mb-1 font-medium">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chamada para o Instagram */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs uppercase tracking-widest text-gray-300 hover:text-aura-gold hover:border-aura-gold/40 transition-all duration-300"
          >
            <svg className="w-4 h-4 text-aura-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Siga no Instagram para mais inspirações</span>
          </a>
        </div>

      </div>

      {/* Modal Lightbox em Tela Cheia */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-aura-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-aura-gold hover:text-aura-black transition-colors cursor-pointer z-50"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-aura-gold/30 bg-aura-card shadow-2xl flex flex-col md:flex-row overflow-y-auto"
            >
              <div className="md:w-2/3 h-[35vh] sm:h-[50vh] md:h-[75vh] bg-aura-black shrink-0">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-aura-card">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-aura-gold/10 text-aura-gold border border-aura-gold/30 mb-4">
                    {selectedImage.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 sm:mb-6">
                    Categoria: {selectedImage.category}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    Procedimento realizado com técnicas exclusivas do AURA Nail Studio, assegurando máxima durabilidade e acabamento ultrafino.
                  </p>
                </div>

                <a
                  href="https://wa.me/5541984000638?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-aura-gold text-aura-black text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300"
                >
                  Agendar Procedimento
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};