/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/ui/hero-section-9';
import SquishyCard from './components/ui/squishy-card-component';
import { MinimalFooter } from './components/ui/minimal-footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Users, BookOpen, Star } from 'lucide-react';

export default function App() {
  const heroData = {
    title: (
      <>
        Jantar pronto em 7 minutos <br /> <span className="italic font-normal text-primary">sem pensar no que comer</span>
      </>
    ),
    subtitle: 'Gaste só 1 hora no domingo com o Método Freezer Inteligente e tenha comida com gosto de fresca de segunda a sexta.',
    actions: [
      {
        text: 'Quero minha semana resolvida',
        onClick: () => {
          const el = document.getElementById('oferta');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'default' as const,
      },
      {
        text: 'Saber mais',
        onClick: () => {
          const el = document.getElementById('solucao');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
      },
    ],
    stats: [],
    images: [
      'https://i.imgur.com/OdjMssg.jpeg',
      'https://i.imgur.com/wShjqta.png',
      'https://i.imgur.com/6NNtMzZ.png',
    ],
  };

  return (
    <div className="text-on-surface font-body selection:bg-primary-container/30 min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8faf9] via-[#eef2f0] to-[#e3ebe6] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#87a38f]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#ffe088]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-[#4b6453]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <header className="fixed top-0 w-full z-50 flex flex-col shadow-sm">
        <div className="bg-gradient-to-r from-[#2c3d31] via-[#4b6453] to-[#2c3d31] text-[#ffe088] text-center py-2 px-4 text-[10px] md:text-xs font-label font-bold tracking-[0.2em] uppercase w-full flex items-center justify-center gap-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe088] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe088]"></span>
          </span>
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] md:text-[16px]">schedule</span>
            Últimas horas com desconto especial!
          </span>
        </div>

        <nav className="bg-white/80 backdrop-blur-md border-b border-primary/10 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4b6453]">spa</span>
            <span className="text-lg md:text-xl font-serif italic text-[#4b6453] font-headline font-semibold tracking-tight">Rotina Leve</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
            <a className="text-[#4b6453]/80 font-label text-sm uppercase tracking-wider hover:text-primary transition-colors font-semibold" href="#solucao">Método</a>
            <a className="text-[#4b6453]/80 font-label text-sm uppercase tracking-wider hover:text-primary transition-colors font-semibold" href="#conteudo">Conteúdo</a>
            <a className="text-[#4b6453]/80 font-label text-sm uppercase tracking-wider hover:text-primary transition-colors font-semibold" href="#duvidas">Dúvidas</a>
          </div>

          <div className="flex justify-end">
            <button 
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-full font-label font-bold text-[10px] md:text-xs uppercase tracking-widest hover:opacity-90 transition-all scale-95 hover:scale-100 active:scale-95 shadow-md whitespace-nowrap"
            >
              <span className="hidden sm:inline">QUERO </span>COMIDA PRONTA
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="pt-28 md:pt-36">
          <HeroSection
            title={heroData.title}
            subtitle={heroData.subtitle}
            actions={heroData.actions}
            stats={heroData.stats}
            images={heroData.images}
            className="bg-transparent"
          />
        </div>

        {/* Section 2: DOR */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4 md:mb-6">A sua rotina depois do trabalho parece com isso?</h2>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">kitchen</span>
                </div>
                <h3 className="font-headline text-lg md:text-xl mb-2 md:mb-3 font-bold">Cemitério de legumes</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Você compra vegetais no domingo, mas na quarta-feira eles já estão murchos e vão direto para o lixo.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">delivery_dining</span>
                </div>
                <h3 className="font-headline text-lg md:text-xl mb-2 md:mb-3 font-bold">Refém do iFood</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Você abre o app de comida só porque está exausta demais para picar cebola e sujar panela.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2 sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">psychology</span>
                </div>
                <h3 className="font-headline text-lg md:text-xl mb-2 md:mb-3 font-bold">A tortura das 18h</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Aquela ansiedade que bate no fim do expediente quando você lembra: "putz, o que eu vou jantar hoje?".</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: SOLUÇÃO */}
        <section className="py-16 md:py-32 px-4 md:px-6" id="solucao">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-5xl mb-6 md:mb-8">Veja exatamente o que você vai <span className="italic text-primary">ter acesso</span></h2>
            <p className="text-on-surface-variant text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed px-4">
              Um material direto ao ponto, sem enrolação. Você recebe tudo mastigado para começar a aplicar hoje mesmo e se livrar do fogão.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto text-left">
              <div className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:-translate-y-1 transition-transform">
                <img src="https://i.imgur.com/GLL4scB.png" referrerPolicy="no-referrer" alt="Receitas" loading="lazy" decoding="async" width="128" height="128" className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-2xl shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-bold mb-3">1. Receitas rápidas e práticas</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Nada de ingredientes caros ou difíceis. Você vai aprender a fazer pratos do dia a dia (frango suculento, carne de panela, legumes assados) em grande quantidade e de forma rápida.</p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:-translate-y-1 transition-transform">
                <img src="https://i.imgur.com/5Hn5l7C.jpeg" referrerPolicy="no-referrer" alt="Lista de compras" loading="lazy" decoding="async" width="128" height="128" className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-2xl shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-bold mb-3">2. Lista de compras pronta</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Chega de ficar rodando no mercado sem saber o que levar. Você recebe a lista exata do que comprar, evitando desperdício de comida e de dinheiro.</p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:-translate-y-1 transition-transform">
                <img src="https://i.imgur.com/GEhFdZe.jpeg" referrerPolicy="no-referrer" alt="Cardápio" loading="lazy" decoding="async" width="128" height="128" className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-2xl shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-bold mb-3">3. Cardápio e combinações</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Aprenda a combinar os preparos base para criar refeições diferentes todos os dias. Você nunca mais vai comer a mesma coisa a semana inteira.</p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:-translate-y-1 transition-transform">
                <img src="https://i.imgur.com/GZtlWQs.jpeg" referrerPolicy="no-referrer" alt="Organização" loading="lazy" decoding="async" width="128" height="128" className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-2xl shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-bold mb-3">4. Organização simples</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">O segredo para a comida não ficar aguada. Saiba exatamente como porcionar, quais potes usar e como descongelar para manter o sabor de comida fresca.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: VEJA COMO ISSO FUNCIONA NA PRÁTICA */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4 md:mb-6">Como é a rotina de quem usa o método</h2>
              <p className="text-on-surface-variant text-base md:text-lg">O Método Freezer Inteligente resume sua semana na cozinha a apenas 3 passos simples.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
                <img src="https://i.imgur.com/tuLz4tQ.jpeg" referrerPolicy="no-referrer" alt="Cozinhando" loading="lazy" decoding="async" width="400" height="192" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">1. Uma hora de preparo</h3>
                <p className="text-on-surface-variant text-sm">Você tira 1 horinha do seu domingo para picar, temperar e fazer a base da comida da semana inteira.</p>
              </div>
              <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
                <img src="https://i.imgur.com/zJEhO15.jpeg" referrerPolicy="no-referrer" alt="Marmitas organizadas" loading="lazy" decoding="async" width="400" height="192" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">2. Freezer Inteligente</h3>
                <p className="text-on-surface-variant text-sm">Você guarda tudo nas porções certas. A comida congela rápido e preserva o sabor original.</p>
              </div>
              <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
                <img src="https://i.imgur.com/QjaEowP.jpeg" referrerPolicy="no-referrer" alt="Prato pronto" loading="lazy" decoding="async" width="400" height="192" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">3. Jantar em 5 minutos</h3>
                <p className="text-on-surface-variant text-sm">Chegou do trabalho? É só pegar o pote, aquecer e comer. Zero panelas sujas na pia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: EXEMPLOS REAIS DE REFEIÇÕES */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-4xl mb-4">O que vai sair do seu freezer em 5 minutos</h2>
                <p className="text-on-surface-variant">Comida caseira com textura e sabor de fresca. Nada daquelas marmitas fitness sem graça.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://i.imgur.com/BYkwaYg.jpeg" referrerPolicy="no-referrer" alt="Prato 1" loading="lazy" decoding="async" width="400" height="256" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-lg">Frango suculento com legumes</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://i.imgur.com/fvsV8AI.jpeg" referrerPolicy="no-referrer" alt="Prato 2" loading="lazy" decoding="async" width="400" height="256" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-lg">Escondidinho prático</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://i.imgur.com/xJ5eHm1.jpeg" referrerPolicy="no-referrer" alt="Prato 3" loading="lazy" decoding="async" width="400" height="256" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-lg">Carne de panela desfiada</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://i.imgur.com/ZLHS6PL.jpeg" referrerPolicy="no-referrer" alt="Prato 4" loading="lazy" decoding="async" width="400" height="256" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-lg">Mix de vegetais assados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CONTEÚDO */}
        <section className="py-16 md:py-32 px-4 md:px-6" id="conteudo">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6">O que você recebe ao entrar hoje</h2>
                <p className="text-on-surface-variant">O passo a passo exato para você nunca mais precisar pensar no que fazer para o jantar.</p>
              </div>
              <button 
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary-fixed hover:bg-secondary-fixed/90 active:scale-95 transition-all px-6 py-3 rounded-2xl font-label font-bold text-xs tracking-widest text-on-secondary-fixed shadow-sm self-center md:self-auto cursor-pointer"
              >
                ACESSO IMEDIATO
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6">menu_book</span>
                <h4 className="font-headline text-lg mb-2 md:mb-3 font-bold">O Método Completo</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Aulas curtas e diretas mostrando como preparar, congelar e aquecer a comida sem perder o sabor.</p>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6">inventory_2</span>
                <h4 className="font-headline text-lg mb-2 md:mb-3 font-bold">Cardápios Prontos</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm line-through text-on-surface-variant">R$ 37</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">HOJE: GRÁTIS</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Combinações de refeições testadas que ficam perfeitas depois de descongeladas. É só copiar.</p>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6">kitchen</span>
                <h4 className="font-headline text-lg mb-2 md:mb-3 font-bold">Guia de Potes</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm line-through text-on-surface-variant">R$ 27</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">HOJE: GRÁTIS</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Descubra os recipientes exatos para a comida não ficar aguada ou com gosto de geladeira.</p>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6">list_alt</span>
                <h4 className="font-headline text-lg mb-2 md:mb-3 font-bold">Listas de Mercado</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm line-through text-on-surface-variant">R$ 17</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">HOJE: GRÁTIS</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Vá ao mercado sabendo exatamente o que comprar. Zero desperdício de dinheiro e comida.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: ANTES E DEPOIS DA ROTINA */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl text-center mb-12 md:mb-16">O fim do estresse no fim do dia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Antes */}
              <div className="glass-card p-8 rounded-3xl border-red-500/40 relative overflow-hidden bg-red-50/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-red-600 text-3xl">cancel</span>
                  <h3 className="font-headline text-2xl font-bold text-red-700">Sua rotina hoje</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                    <span className="text-red-900/80 font-medium">Chegar cansada e ainda ter que picar cebola e sujar panela.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                    <span className="text-red-900/80 font-medium">Gastar R$ 1.000+ por mês em iFood por pura exaustão.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                    <span className="text-red-900/80 font-medium">Jogar legumes murchos no lixo toda semana.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                    <span className="text-red-900/80 font-medium">Pia sempre cheia de louça suja de segunda a sexta.</span>
                  </li>
                </ul>
              </div>
              
              {/* Depois */}
              <div className="glass-card p-8 rounded-3xl border-green-500/40 relative overflow-hidden bg-green-50/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                  <h3 className="font-headline text-2xl font-bold text-green-700">Com o Rotina Leve</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 shrink-0">check</span>
                    <span className="text-green-900/80 font-medium">Jantar pronto em 5 minutos, sem pensar no que comer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 shrink-0">check</span>
                    <span className="text-green-900/80 font-medium">Economizar centenas de reais cortando o delivery.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 shrink-0">check</span>
                    <span className="text-green-900/80 font-medium">Abrir o freezer e ter comida caseira com gosto de fresca.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 shrink-0">check</span>
                    <span className="text-green-900/80 font-medium">Cozinha limpa e tempo livre para você descansar e curtir.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: POR QUE ISSO FUNCIONA */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">Por que o Rotina Leve funciona tão bem?</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Não é sobre ter disciplina militar, é sobre ser inteligente com o seu tempo.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl">1</div>
                <h3 className="font-headline text-xl font-bold mb-3">Fim da fadiga de decisão</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Você não precisa mais pensar "o que vou fazer hoje?". A decisão já foi tomada no domingo. É só escolher o pote e comer.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl">2</div>
                <h3 className="font-headline text-xl font-bold mb-3">À prova de preguiça</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Nos dias em que você está exausta, a comida já está lá. Você não precisa de força de vontade para não pedir iFood.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl">3</div>
                <h3 className="font-headline text-xl font-bold mb-3">Bagunça concentrada</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Você pica cebola uma vez, suja a panela uma vez, limpa o fogão uma vez. O esforço é de 1 hora e o benefício dura a semana toda.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: RESULTADOS REAIS DE QUEM APLICOU */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">Veja quem já parou de depender do fogão</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Pessoas reais que trocaram o estresse diário por 5 minutos no micro-ondas.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="glass-card p-6 rounded-3xl flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://i.imgur.com/djPn82a.jpeg" referrerPolicy="no-referrer" alt="Juliana" loading="lazy" decoding="async" width="48" height="48" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-on-surface">Juliana M.</h4>
                    <p className="text-xs text-on-surface-variant">Economizou R$ 450 no primeiro mês</p>
                  </div>
                </div>
                <img src="https://i.imgur.com/8psAYHD.jpeg" referrerPolicy="no-referrer" alt="Marmitas da Juliana" loading="lazy" decoding="async" width="400" height="160" className="w-full h-40 object-cover rounded-2xl mb-4" />
                <p className="text-on-surface-variant text-sm italic">"Eu pedia iFood quase todo dia porque chegava morta do trabalho. Só de cortar o delivery, sobrou dinheiro pra pagar a academia. E a comida fica perfeita, não parece congelada!"</p>
              </div>
              <div className="glass-card p-6 rounded-3xl flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://i.imgur.com/eEkZs1I.jpeg" referrerPolicy="no-referrer" alt="Camila" loading="lazy" decoding="async" width="48" height="48" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-on-surface">Camila T.</h4>
                    <p className="text-xs text-on-surface-variant">Mãe de gêmeos, sem tempo pra nada</p>
                  </div>
                </div>
                <img src="https://i.imgur.com/z66TyXQ.jpeg" referrerPolicy="no-referrer" alt="Refeição da Camila" loading="lazy" decoding="async" width="400" height="160" className="w-full h-40 object-cover rounded-2xl mb-4" />
                <p className="text-on-surface-variant text-sm italic">"Com dois bebês, cozinhar era um pesadelo. A pia vivia cheia. Agora eu tiro do freezer, coloco no prato e em 5 minutos a gente tá jantando. Salvou minha sanidade."</p>
              </div>
              <div className="glass-card p-6 rounded-3xl flex flex-col md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://i.imgur.com/uZ318QA.jpeg" referrerPolicy="no-referrer" alt="Rafael" loading="lazy" decoding="async" width="48" height="48" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-on-surface">Rafael C.</h4>
                    <p className="text-xs text-on-surface-variant">Mora sozinho, odeia lavar louça</p>
                  </div>
                </div>
                <img src="https://i.imgur.com/CtIjHlV.jpeg" referrerPolicy="no-referrer" alt="Freezer do Rafael" loading="lazy" decoding="async" width="400" height="160" className="w-full h-40 object-cover rounded-2xl mb-4" />
                <p className="text-on-surface-variant text-sm italic">"Eu sempre jogava legumes fora porque estragavam na geladeira. Agora eu preparo tudo no domingo e tenho almoço e janta pra semana toda. Zero desperdício e pia limpa."</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: SECOND CTA */}
        <section className="py-12 px-4 md:px-6 bg-surface">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <p className="text-xl md:text-2xl font-headline text-on-surface mb-4">A sua semana resolvida com apenas 1 hora de preparo.</p>
            <p className="text-3xl font-bold text-primary mb-6">R$ 67</p>
            <button 
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-on-primary rounded-full px-8 py-4 font-label text-sm font-extrabold uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all w-full sm:w-auto"
            >
              Quero minha semana resolvida
            </button>
            <p className="text-sm text-on-surface-variant mt-3">Acesso imediato • Garantia de 7 dias</p>
          </div>
        </section>

        <section className="py-16 md:py-32 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto bg-primary text-on-primary rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
              <img className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000" alt="Nutri Ana" src="https://i.imgur.com/oYss4nM.jpeg" referrerPolicy="no-referrer" loading="lazy" decoding="async" width="500" height="500" />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center text-center lg:text-left">
              <span className="font-label text-xs uppercase tracking-[0.3em] mb-4 md:mb-6 opacity-70">Quem criou o método</span>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-tight">Oi, eu sou a Ana, e eu também <span className="italic">odiava cozinhar todo dia</span></h2>
              <p className="text-on-primary/80 text-base md:text-lg leading-relaxed mb-8">
                Trabalhando o dia todo, eu chegava em casa e a última coisa que queria era ir pro fogão. Acabava comendo pão ou pedindo pizza. Criei o Rotina Leve para resolver o MEU problema de falta de tempo. E agora, compartilho o sistema exato que me fez ter comida pronta todos os dias, sem esforço.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-2 md:mt-4">
                <div className="p-4 md:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                  <span className="block text-2xl md:text-3xl font-bold text-on-primary">Na prática</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Método Testado</span>
                </div>
                <div className="p-4 md:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                  <span className="block text-2xl md:text-3xl font-bold text-on-primary">5.000+</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Pessoas usando</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="duvidas" className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl text-center mb-10 md:mb-16">Dúvidas Frequentes</h2>
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    Minha geladeira é pequena, vai caber?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    Sim! O método ensina exatamente como empilhar e usar os potes certos para otimizar 100% do espaço, mesmo no congelador da geladeira comum.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    A comida não fica aguada ou sem gosto?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    Não. Você vai aprender a técnica exata de resfriamento e os potes corretos que impedem a formação de cristais de gelo. O sabor fica de comida recém-feita.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    Por quanto tempo tenho acesso a tudo isso?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    O acesso é vitalício. Você compra uma vez e pode acessar as aulas, os cardápios e as listas de compras para sempre.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    Vai funcionar para mim se eu nunca consigo manter nada por mais de uma semana?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    O método foi feito exatamente para quem já desistiu antes. Ele funciona porque é simples demais para abandonar — uma hora por semana, não uma rotina rígida.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    Precisa de muito espaço no freezer?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    Não. O sistema foi pensado para freezers comuns de apartamento. Você vai se surpreender com quanto cabe quando está organizado do jeito certo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-primary/20">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    É difícil de manter depois da primeira semana?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    A maioria das pessoas acha mais fácil na segunda semana do que na primeira. Depois que você vê a geladeira organizada e a semana fluindo, vira hábito automático.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-primary/20 border-b-0">
                  <AccordionTrigger className="text-left font-headline text-base md:text-lg text-on-surface hover:text-primary hover:no-underline">
                    Funciona para quem mora sozinho?
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    É ainda melhor para quem mora sozinho. Você prepara uma vez e tem comida boa para a semana inteira sem desperdício.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 8: GARANTIA */}
        <section className="pb-16 md:pb-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a241e] to-[#2c3d31] rounded-[2rem] md:rounded-[3rem] px-6 py-10 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffe088] rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#87a38f] rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 relative z-10">
              
              {/* High-Res CSS Seal */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center shrink-0 mx-auto lg:mx-0 my-6 sm:my-8 lg:my-4">
                {/* Outer gold burst */}
                <div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  {[0, 15, 30, 45, 60, 75].map((deg) => (
                    <div 
                      key={deg}
                      className="absolute w-full h-full bg-gradient-to-tr from-[#B8860B] via-[#FFD700] to-[#DAA520] rounded-xl"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>
                
                {/* Inner dark circle */}
                <div className="absolute inset-[5px] sm:inset-[6px] md:inset-[8px] bg-gradient-to-b from-[#1a1c29] to-[#0a0b10] rounded-full flex flex-col items-center justify-center border-[3px] sm:border-[4px] border-[#FFD700] shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] z-10">
                  
                  {/* Subtle radial rays background inside */}
                  <div className="absolute inset-0 rounded-full overflow-hidden opacity-10" style={{ background: 'repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, #ffffff 10deg, #ffffff 20deg)' }}></div>

                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-1 sm:pt-2">
                    <span className="text-[#FFD700] font-label text-[8px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-0.5 sm:mb-1">Garantia</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#DAA520] font-headline text-6xl sm:text-7xl md:text-8xl font-black leading-none drop-shadow-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">7</span>
                    <span className="text-[#FFD700] font-headline text-sm sm:text-lg md:text-xl font-bold uppercase tracking-widest mt-0.5 sm:mt-1">Dias</span>
                  </div>

                  {/* Stars */}
                  <div className="absolute left-2 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 sm:gap-1 z-20">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#FFD700] fill-[#FFD700]" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#FFD700] fill-[#FFD700] -translate-x-1" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#FFD700] fill-[#FFD700]" />
                  </div>
                  <div className="absolute right-2 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 sm:gap-1 items-end z-20">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#FFD700] fill-[#FFD700]" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#FFD700] fill-[#FFD700] translate-x-1" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#FFD700] fill-[#FFD700]" />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left text-white flex-1">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-white">
                  Teste na sua cozinha por 7 dias
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                  Entre, baixe as listas, assista às aulas e faça o teste no domingo. Se a sua semana não for infinitamente mais fácil, eu devolvo todo o seu dinheiro.
                </p>
                <ul className="space-y-4 text-left inline-block lg:block">
                  <li className="flex items-center gap-4 text-white/90">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe088]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#ffe088] text-sm">verified_user</span>
                    </div>
                    <span className="text-sm md:text-base">Risco totalmente nas minhas costas.</span>
                  </li>
                  <li className="flex items-center gap-4 text-white/90">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe088]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#ffe088] text-sm">bolt</span>
                    </div>
                    <span className="text-sm md:text-base">Seu dinheiro de volta com um único e-mail.</span>
                  </li>
                  <li className="flex items-center gap-4 text-white/90">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe088]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#ffe088] text-sm">mood</span>
                    </div>
                    <span className="text-sm md:text-base">Sem letras miúdas ou burocracia.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: OFERTA */}
        <SquishyCard />
      </main>

      {/* Footer */}
      <MinimalFooter />

      {/* BottomNavBar (Mobile Only) */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 flex justify-between p-1.5 items-center bg-white/90 backdrop-blur-xl rounded-full border border-primary/20 shadow-[0_10px_40px_rgba(75,100,83,0.2)]">
        <a className="text-[#4b6453] flex items-center px-3 font-label text-[10px] font-extrabold uppercase tracking-widest" href="#oferta">
          <span className="material-symbols-outlined mr-1.5 text-lg">sell</span>
          Oferta
        </a>
        <button 
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#4b6453] text-white rounded-full px-5 py-2.5 flex items-center gap-2 font-label text-[10px] font-extrabold uppercase tracking-widest shadow-md active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-base">shopping_cart</span>
          Quero minha semana resolvida
        </button>
      </div>
    </div>
  );
}
