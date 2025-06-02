import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Mail",
      title: "Email",
      value: "anna.petrova@email.com",
      link: "mailto:anna.petrova@email.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@anna_marketplace",
      link: "https://t.me/anna_marketplace",
    },
    {
      icon: "Linkedin",
      title: "LinkedIn",
      value: "anna-petrova-marketplace",
      link: "https://linkedin.com/in/anna-petrova-marketplace",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-montserrat text-4xl font-bold mb-4">
            Готов к сотрудничеству
          </h2>
          <p className="font-opensans text-lg text-gray-300 max-w-2xl mx-auto">
            Обсудим ваш проект и найдем способы увеличить продажи на
            маркетплейсах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon
                      name={contact.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-montserrat font-medium text-white">
                      {contact.title}
                    </div>
                    <a
                      href={contact.link}
                      className="font-opensans text-gray-300 hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h3 className="font-montserrat text-2xl font-bold mb-4">
            Что я могу для вас сделать?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <Icon
                name="TrendingUp"
                size={32}
                className="text-primary mx-auto mb-2"
              />
              <div className="font-montserrat font-medium mb-1">
                Увеличу продажи
              </div>
              <div className="font-opensans text-gray-400">
                На 50-200% через аналитику
              </div>
            </div>
            <div>
              <Icon
                name="Target"
                size={32}
                className="text-primary mx-auto mb-2"
              />
              <div className="font-montserrat font-medium mb-1">
                Оптимизирую процессы
              </div>
              <div className="font-opensans text-gray-400">
                Автоматизация и KPI
              </div>
            </div>
            <div>
              <Icon
                name="Users"
                size={32}
                className="text-primary mx-auto mb-2"
              />
              <div className="font-montserrat font-medium mb-1">
                Обучу команду
              </div>
              <div className="font-opensans text-gray-400">
                Лучшие практики маркетплейсов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
