import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe da Ana, 5 anos",
    text: "Minha filha agora pede para orar! As orações são tão fofas e simples que ela consegue acompanhar. Virou nosso momento favorito do dia.",
    avatar: "👩",
  },
  {
    name: "Carlos Santos",
    role: "Pai do Pedro, 7 anos",
    text: "Finalmente encontrei algo que mantém a atenção do meu filho durante a oração. Ele adora escolher a oração do dia. Recomendo muito!",
    avatar: "👨",
  },
  {
    name: "Juliana Costa",
    role: "Mãe da Laura, 4 anos",
    text: "As ilustrações são lindas e as palavras são perfeitas para crianças pequenas. Minha filha decora as orações e repete durante o dia todo!",
    avatar: "👩‍🦱",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            O que outras famílias estão dizendo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de famílias que transformaram a hora da oração
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center">
                <Quote className="w-5 h-5 text-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
