import { Button } from "@/components/ui/button";
import { DecorativeElements } from "@/components/DecorativeElements";
import heroImage from "@/assets/potinho-oracoes.png";
import { Heart, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <DecorativeElements />
      
      <div className="container relative z-10 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-pastel-pink/50 px-4 py-2 rounded-full text-sm font-medium text-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>eBook Digital • Entrega Imediata</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              <span className="text-gradient">Transforme a hora de dormir</span>
              <br />
              <span className="text-foreground">em um momento de fé e conexão</span>
              <br />
              <span className="text-foreground">com seu filho</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-full lg:max-w-xl mx-auto lg:mx-0 px-2 lg:px-0">
              48 orações infantis prontas para imprimir e ler todas as noites – 
              <span className="font-semibold text-foreground"> simples, leves e cheias de significado.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="cta" size="xl" onClick={scrollToPricing}>
                <Heart className="w-5 h-5" />
                Quero Acessar Agora
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="text-lg">🔒</span> Pagamento Seguro
              </span>
              <span className="flex items-center gap-1">
                <span className="text-lg">📧</span> Entrega Imediata
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-pastel-pink/40 via-pastel-yellow/30 to-pastel-blue/40 rounded-3xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Crianças orando em um jardim encantado com nuvens e anjos"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
