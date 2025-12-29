import { Check, FileText, Zap, BookOpen, Mail } from "lucide-react";

const features = [
  {
    icon: FileText,
    text: "PDF com 48 orações infantis",
  },
  {
    icon: Zap,
    text: "Conteúdo pronto para imprimir ou usar digital",
  },
  {
    icon: BookOpen,
    text: "Linguagem fácil e acessível",
  },
  {
    icon: Mail,
    text: "Entrega imediata por e-mail",
  },
];

export const ContentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              O que você recebe agora
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que você precisa para começar hoje mesmo
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-mint/30 hover:bg-pastel-mint/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-cta flex items-center justify-center shadow-cta">
                    <Check className="w-6 h-6 text-cta-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <p className="text-foreground font-semibold text-lg">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
