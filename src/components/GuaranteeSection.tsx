import { ShieldCheck, RefreshCw } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 gradient-soft">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 shadow-card">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-pastel-mint rounded-full blur-md opacity-60"></div>
                <div className="relative w-24 h-24 rounded-full bg-pastel-mint flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-foreground" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                Compra sem risco
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Garantia de devolução de <span className="font-bold text-foreground">7 dias</span>. 
                Se você não ficar 100% satisfeito com o eBook, devolvemos seu dinheiro sem perguntas.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <RefreshCw className="w-5 h-5" />
                <span>Satisfação garantida ou seu dinheiro de volta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
