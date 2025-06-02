import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-purple-500 to-ocean flex items-center justify-center px-4">
      <div className="max-w-4xl text-center text-white animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon name="User" size={64} />
          </div>
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-4">
            Анна Петрова
          </h1>
          <p className="font-opensans text-xl md:text-2xl font-medium mb-2">
            Менеджер маркетплейса
          </p>
          <p className="font-opensans text-lg opacity-90">
            Увеличиваю продажи на 150%+ через аналитику и оптимизацию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold font-montserrat">5+</div>
            <div className="text-sm font-opensans">лет опыта</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold font-montserrat">50+</div>
            <div className="text-sm font-opensans">успешных проектов</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold font-montserrat">₽120M+</div>
            <div className="text-sm font-opensans">оборота управлял</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-montserrat font-medium"
          >
            <Icon name="Download" size={20} />
            Скачать резюме
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 font-montserrat font-medium"
          >
            <Icon name="Mail" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
