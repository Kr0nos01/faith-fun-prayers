import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Mail, Sparkles } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Comece hoje mesmo!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invista em momentos de fé que durarão para sempre
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink via-primary to-pastel-yellow rounded-3xl blur-lg opacity-40 animate-pulse-soft"></div>
            
            <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border-2 border-primary/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-bold text-sm shadow-cta">
                  <Sparkles className="w-4 h-4" />
                  Oferta Especial
                </div>
              </div>
              
              {/* Product name */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  48 Orações para Crianças
                </h3>
                <p className="text-muted-foreground">eBook Digital em PDF</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-muted-foreground line-through text-xl">R$ 47</span>
                  <span className="text-5xl font-extrabold text-gradient">R$ 27</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Pagamento único • Acesso vitalício
                </p>
              </div>
              
              {/* CTA Button */}
              <Button variant="cta" size="xl" className="w-full mb-6">
                <Heart className="w-5 h-5" />
                Quero meu eBook Agora!
              </Button>
              
              {/* Trust badges */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Entrega imediata por e-mail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
