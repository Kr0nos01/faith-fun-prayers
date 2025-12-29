import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-current" />
            <span className="text-xl font-bold">48 Orações para Crianças</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center justify-center gap-6 text-sm opacity-80">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-background/20">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} • Criado com amor para famílias cristãs e crianças
            </p>
            <p className="text-xs opacity-40 mt-2">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
