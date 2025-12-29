import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const femaleNames = [
  'Maria', 'Ana', 'Juliana', 'Camila', 'Fernanda', 'Patricia', 'Amanda', 'Bruna',
  'Carolina', 'Daniela', 'Gabriela', 'Larissa', 'Letícia', 'Mariana', 'Natália',
  'Priscila', 'Rafaela', 'Renata', 'Sabrina', 'Tatiana', 'Vanessa', 'Bianca',
  'Cristina', 'Débora', 'Eduarda', 'Flávia', 'Helena', 'Isabela', 'Joana', 'Laura'
];

const maleNames = [
  'João', 'Pedro', 'Lucas', 'Gabriel', 'Rafael', 'Matheus', 'Bruno', 'Carlos',
  'Daniel', 'Eduardo', 'Felipe', 'Gustavo', 'Henrique', 'Igor', 'José', 'Leonardo',
  'Marcos', 'Nicolas', 'Paulo', 'Ricardo', 'Samuel', 'Thiago', 'Victor', 'André',
  'Bernardo', 'Caio', 'Diego', 'Enzo', 'Fábio', 'Guilherme'
];

const cities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre',
  'Salvador', 'Fortaleza', 'Brasília', 'Recife', 'Manaus', 'Goiânia', 'Campinas',
  'Florianópolis', 'Vitória', 'Natal', 'João Pessoa', 'Maceió', 'Teresina'
];

const timeAgo = [
  'agora mesmo',
  'há 1 minuto',
  'há 2 minutos',
  'há 3 minutos',
  'há 5 minutos',
  'há 8 minutos',
  'há 10 minutos',
  'há 15 minutos',
  'há 20 minutos',
  'há 30 minutos'
];

const packages = [
  { name: 'Básico', color: 'text-kids-blue' },
  { name: 'Premium', color: 'text-kids-orange' }
];

interface NotificationData {
  name: string;
  city: string;
  time: string;
  package: { name: string; color: string };
}

const generateNotification = (): NotificationData => {
  const isFemale = Math.random() > 0.5;
  const names = isFemale ? femaleNames : maleNames;
  const name = names[Math.floor(Math.random() * names.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const time = timeAgo[Math.floor(Math.random() * timeAgo.length)];
  const pkg = packages[Math.random() > 0.4 ? 1 : 0]; // 60% Premium, 40% Básico

  return { name, city, time, package: pkg };
};

const SalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState<NotificationData | null>(null);

  useEffect(() => {
    // Primeira notificação após 5 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      // Próxima notificação entre 8-15 segundos após a anterior fechar
      const nextTimeout = setTimeout(() => {
        showNotification();
      }, Math.random() * 7000 + 8000);

      return () => clearTimeout(nextTimeout);
    }
  }, [isVisible]);

  const showNotification = () => {
    setNotification(generateNotification());
    setIsVisible(true);

    // Auto-hide após 4 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !notification) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-white rounded-xl shadow-elegant border border-kids-blue/20 p-4 max-w-xs relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kids-blue via-kids-pink to-kids-orange" />
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 pr-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kids-mint/30 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-kids-blue" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground font-medium leading-tight">
              <span className="font-bold">{notification.name}</span> de {notification.city}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              comprou o pacote{' '}
              <span className={`font-semibold ${notification.package.color}`}>
                {notification.package.name}
              </span>
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              {notification.time}
            </p>
          </div>
        </div>

        {/* Verified badge */}
        <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border/50">
          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs text-muted-foreground">Compra verificada</span>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
