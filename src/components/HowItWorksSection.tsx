import { Printer, Scissors, BookHeart } from "lucide-react";

const steps = [
  {
    icon: Printer,
    title: "Imprima ou Use Digital",
    description: "Receba o PDF e imprima ou use direto na tela",
    color: "bg-pastel-blue",
    emoji: "✨",
  },
  {
    icon: Scissors,
    title: "Recorte ou Marque",
    description: "Escolha a oração do dia com seu filho",
    color: "bg-pastel-pink",
    emoji: "✨",
  },
  {
    icon: BookHeart,
    title: "Ore em Família",
    description: "Leia junto com a criança e celebre o momento de fé",
    color: "bg-pastel-mint",
    emoji: "✨",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Como tornar a oração especial?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            É simples e fácil começar a criar memórias de fé com seus filhos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-pastel-pink to-pastel-blue opacity-50"></div>
              )}
              
              <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-cta-foreground font-bold text-lg shadow-cta">
                  {index + 1}
                </div>
                
                <div className={`p-5 rounded-2xl ${step.color} mb-4`}>
                  <step.icon className="w-10 h-10 text-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.emoji} {step.title}
                </h3>
                
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
