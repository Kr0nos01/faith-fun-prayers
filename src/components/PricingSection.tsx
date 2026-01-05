import { buttonVariants } from "@/components/ui/button";
import { Heart, ShieldCheck, Mail, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "9,90",
    originalPrice: "19,90",
    description: "Comece sua jornada de fé",
    featured: false,
    checkoutUrl: "https://checkout.sbpacademy.site/VCCL1O8SCNTX",
    features: [
      "48 Orações para Crianças",
      "Acesso por 5 meses",
      "Formato PDF digital",
      "Entrega imediata por e-mail",
    ],
  },
  {
    name: "Premium",
    price: "23,00",
    originalPrice: "47,00",
    checkoutUrl: "https://checkout.sbpacademy.site/VCCL1O8SCNU2",
    description: "Experiência completa de fé",
    featured: true,
    badge: "Mais Popular",
    features: [
      "48 Orações para Crianças",
      "10 Mapas Mentais de Personagens Bíblicos",
      "Coletânea de Histórias Bíblicas em Vídeo para Dormir",
      "Acesso vitalício",
      "Formato PDF digital",
      "Entrega imediata por e-mail",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Escolha seu plano
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invista em momentos de fé que durarão para sempre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Glow effect for featured plan */}
              {plan.featured && (
                <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink via-primary to-pastel-yellow rounded-3xl blur-lg opacity-50 animate-pulse-soft"></div>
              )}

              <div
                className={`relative h-full bg-card rounded-3xl p-8 shadow-card flex flex-col ${
                  plan.featured
                    ? "border-2 border-primary"
                    : "border border-border"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-bold text-sm shadow-cta">
                      <Star className="w-4 h-4 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-muted-foreground line-through text-lg">
                      R$ {plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span
                      className={`text-5xl font-extrabold ${
                        plan.featured ? "text-gradient" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pagamento único
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.featured
                              ? "bg-primary text-primary-foreground"
                              : "bg-pastel-mint text-foreground"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href={plan.checkoutUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    
                    // Dispara o evento do Facebook Pixel
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'InitiateCheckout', {
                        content_name: plan.name,
                        value: parseFloat(plan.price.replace(',', '.')),
                        currency: 'BRL'
                      });
                    }
                    
                    // Abre o checkout após um pequeno delay para garantir que o pixel seja disparado
                    setTimeout(() => {
                      window.open(plan.checkoutUrl, '_blank');
                    }, 100);
                  }}
                  className={cn(
                    buttonVariants({ variant: plan.featured ? "cta" : "outline", size: "lg" }),
                    "w-full"
                  )}
                >
                  <Heart className="w-5 h-5" />
                  {plan.featured ? "Quero o Premium!" : "Quero o Básico!"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>Entrega imediata por e-mail</span>
          </div>
        </div>
      </div>
    </section>
  );
};
