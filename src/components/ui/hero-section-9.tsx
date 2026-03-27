import { motion } from 'framer-motion';
import { Button, type ButtonProps } from './button';
import { ShinyButton } from './shiny-button';
import { cn } from '../../lib/utils';
import React from 'react';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full overflow-hidden bg-background py-12 sm:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline leading-[1.1]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-muted-foreground" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:justify-start w-full sm:w-auto" variants={itemVariants}>
            {actions.map((action, index) => {
              if (action.variant === 'default') {
                return (
                  <ShinyButton key={index} onClick={action.onClick} className={cn("w-full sm:w-auto text-sm uppercase tracking-widest", action.className)}>
                    {action.text}
                  </ShinyButton>
                );
              }
              return (
                <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={cn("rounded-full font-label font-bold uppercase tracking-widest w-full sm:w-auto", action.className)}>
                  {action.text}
                </Button>
              );
            })}
          </motion.div>
          <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-[#87a38f]/40"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-[#ffe088]/40"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-[#4b6453]/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-white/50 backdrop-blur-sm p-2 shadow-lg sm:h-64 sm:w-64 border border-white/60"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <img src={images[0]} alt="Healthy meal prep" width="256" height="256" decoding="async" fetchPriority="high" className="h-full w-full rounded-xl object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-white/50 backdrop-blur-sm p-2 shadow-lg sm:h-56 sm:w-56 border border-white/60"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <img src={images[1]} alt="Fresh ingredients" width="224" height="224" decoding="async" fetchPriority="high" className="h-full w-full rounded-xl object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-white/50 backdrop-blur-sm p-2 shadow-lg sm:h-48 sm:w-48 border border-white/60"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <img src={images[2]} alt="Organized freezer" width="192" height="192" decoding="async" fetchPriority="high" className="h-full w-full rounded-xl object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
