import { Check, BookOpen, Smile, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    text: "Linguagem simples e divertida",
    color: "bg-pastel-yellow",
  },
  {
    icon: Sparkles,
    text: "Cada oração com ilustrações ou símbolos fofos",
    color: "bg-pastel-pink",
  },
  {
    icon: Users,
    text: "Perfeito para criar um ritual de fé em família",
    color: "bg-pastel-mint",
  },
  {
    icon: BookOpen,
    text: "Crianças pedem para orar!",
    color: "bg-pastel-blue",
  },
];

export const ProductSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <BookOpen className="w-4 h-4" />
            <span>O Produto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Apresentamos: <span className="text-gradient">"48 Orações para Crianças"</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Um eBook em PDF com 48 orações curtas, divertidas e feitas especialmente para 
            corações infantis, ideal para imprimir, recortar e usar em momentos de oração em família.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-foreground" />
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-left">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
