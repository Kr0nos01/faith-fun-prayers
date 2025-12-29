import { Heart, Sparkles, Star } from "lucide-react";

const results = [
  {
    emoji: "💛",
    text: "Crianças mais animadas para orar",
    color: "text-amber-500",
  },
  {
    emoji: "💚",
    text: "Momentos de conexão e carinho com Deus",
    color: "text-emerald-500",
  },
  {
    emoji: "💜",
    text: "Memórias afetivas de fé que duram para sempre",
    color: "text-purple-500",
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-[10%] text-pastel-yellow opacity-40">
        <Star className="w-12 h-12 fill-current animate-pulse-soft" />
      </div>
      <div className="absolute bottom-20 right-[15%] text-pastel-pink opacity-40">
        <Heart className="w-16 h-16 fill-current animate-float" />
      </div>
      <div className="absolute top-1/2 left-[5%] text-primary opacity-30">
        <Sparkles className="w-8 h-8 animate-sparkle" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Veja o que pode acontecer em sua casa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Famílias estão transformando a hora da oração em momentos mágicos
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex-1 flex items-center gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <span className="text-4xl">{result.emoji}</span>
              <p className="text-foreground font-semibold text-lg">{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
