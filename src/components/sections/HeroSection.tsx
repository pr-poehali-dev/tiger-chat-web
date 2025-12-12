import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/0a5bf2b7-e38b-4588-9bb8-b1f45f0b9949.jpg" 
          alt="Тигриный чат" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
        <Badge className="mb-6 text-lg px-6 py-2 bg-primary hover:bg-primary/90">#декабрьская_беготня</Badge>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Вечно голодная 
тигриная стая</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">Сообщество бегунов - любителей. Тренируйся с нами, достигай невозможного.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale">
            <Icon name="Users" className="mr-2" size={24} />
            Присоединиться
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-foreground hover-scale">
            <Icon name="Calendar" className="mr-2" size={24} />
            Расписание
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
