import { AlertCircle, Clock, Frown, Heart } from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "O dia acaba corrido e a hora da oração fica esquecida?",
    color: "bg-pastel-peach",
  },
  {
    icon: AlertCircle,
    text: "As palavras parecem difíceis para seu filho entender?",
    color: "bg-pastel-blue",
  },
  {
    icon: Frown,
    text: "Ele perde a atenção rápido e não quer mais orar?",
    color: "bg-pastel-lavender",
  },
  {
    icon: Heart,
    text: "Você sente que falta um momento especial de fé junto com ele?",
    color: "bg-pastel-pink",
  },
];

export const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Você já passou por isso?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Muitas famílias enfrentam esses desafios na hora de criar momentos de oração com os pequenos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-xl ${problem.color} flex-shrink-0`}>
                <problem.icon className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-foreground font-medium text-lg leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
