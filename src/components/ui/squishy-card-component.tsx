import { motion } from "framer-motion";
import { ShinyButton } from "./shiny-button";

const SquishyCard = () => {
  return (
    <section id="oferta" className="bg-transparent px-4 py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a241e] to-[#4b6453] -z-10"></div>
      {/* Decorative elements for the dark section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ffe088] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#87a38f] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-5xl text-white mb-4 font-bold">A decisão mais óbvia do seu dia</h2>
          <p className="text-[#ffe088] font-label text-sm md:text-base uppercase tracking-widest font-bold">Acesso imediato a todo o material</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Side: Comparison */}
          <div className="w-full max-w-[380px] lg:max-w-[420px] bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-xl">
            <h3 className="text-white font-headline text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left">Tudo o que você vai receber hoje:</h3>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex justify-between items-center text-white/80 border-b border-white/10 pb-3">
                <span>O Método Rotina Leve</span>
                <span className="font-mono text-white">R$ 197,00</span>
              </li>
              <li className="flex justify-between items-center text-white/80 border-b border-white/10 pb-3">
                <span>Listas de Mercado</span>
                <span className="font-mono text-white">R$ 17,00</span>
              </li>
              <li className="flex justify-between items-center text-white/80 border-b border-white/10 pb-3">
                <span>Cardápios Prontos</span>
                <span className="font-mono text-white">R$ 37,00</span>
              </li>
              <li className="flex justify-between items-center text-white/80 border-b border-white/10 pb-3">
                <span>Guia de Potes</span>
                <span className="font-mono text-white">R$ 27,00</span>
              </li>
            </ul>
            
            <div className="flex justify-between items-center text-white font-bold text-lg sm:text-xl bg-white/10 p-4 rounded-2xl">
              <span>Se fosse comprar separado:</span>
              <span className="text-red-400 line-through decoration-2">R$ 278,00</span>
            </div>
          </div>

          {/* Right Side: Offer Card */}
          <div className="w-full max-w-[380px] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffe088] text-[#1a241e] font-bold px-6 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-widest z-30 shadow-[0_0_20px_rgba(255,224,136,0.4)] animate-pulse whitespace-nowrap border border-[#ffe088]/50">
              Somente Hoje!
            </div>
            <Card />
          </div>

        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative min-h-[520px] w-full max-w-[340px] sm:max-w-[380px] shrink-0 overflow-hidden rounded-[2.5rem] bg-primary p-6 sm:p-8 shadow-2xl mx-auto border border-white/10 flex flex-col justify-between"
    >
      <div className="relative z-10 text-white">
        <span className="mb-4 block w-fit rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
          81% OFF
        </span>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl font-bold opacity-70 line-through">R$ 278</span>
        </div>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-headline text-6xl sm:text-7xl font-black leading-[1.1]"
        >
          R$ 67
          <span className="text-2xl sm:text-3xl">,00</span>
        </motion.span>
        <ul className="text-left space-y-3 sm:space-y-4 mt-6 sm:mt-8 mb-8 text-sm sm:text-base text-white/90">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-xl shrink-0">check_circle</span>
            <span>O Método Rotina Leve</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-xl shrink-0">check_circle</span>
            <span className="flex items-center flex-wrap gap-2">
              Listas de Mercado
              <span className="text-xs line-through opacity-50">R$ 17</span>
              <span className="text-[10px] font-bold text-[#1a241e] bg-[#ffe088] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Bônus</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-xl shrink-0">check_circle</span>
            <span className="flex items-center flex-wrap gap-2">
              Cardápios Prontos
              <span className="text-xs line-through opacity-50">R$ 37</span>
              <span className="text-[10px] font-bold text-[#1a241e] bg-[#ffe088] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Bônus</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-xl shrink-0">check_circle</span>
            <span className="flex items-center flex-wrap gap-2">
              Guia de Potes
              <span className="text-xs line-through opacity-50">R$ 27</span>
              <span className="text-[10px] font-bold text-[#1a241e] bg-[#ffe088] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Bônus</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="relative z-20 mt-auto pt-4 flex flex-col items-center gap-2">
        <ShinyButton 
          onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v4/zUYiy7xAxZFSXGxUfiQd'}
          className="w-full text-xs sm:text-sm uppercase tracking-widest"
        >
          Quero minha semana resolvida
        </ShinyButton>
        <span className="text-white/60 text-xs font-medium">Acesso imediato • Garantia de 7 dias</span>
      </div>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="380"
      height="520"
      viewBox="0 0 380 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0 h-full w-full"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="190"
        cy="150"
        r="120"
        fill="#3a4f41"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="190"
        cy="350"
        rx="120"
        ry="60"
        fill="#3a4f41"
      />
    </motion.svg>
  );
};

export default SquishyCard;
