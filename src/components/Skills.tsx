import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillGroups = [
    {
      title: "Управление ассортиментом",
      icon: "Package",
      skills: [
        "Подбор товаров",
        "Анализ трендов",
        "Матрица ABC/XYZ",
        "Управление остатками",
      ],
      level: 95,
    },
    {
      title: "Аналитика продаж",
      icon: "TrendingUp",
      skills: ["Google Analytics", "Яндекс.Метрика", "Power BI", "SQL запросы"],
      level: 90,
    },
    {
      title: "Работа с поставщиками",
      icon: "Handshake",
      skills: ["Переговоры", "Договоры", "Логистика", "Контроль качества"],
      level: 85,
    },
    {
      title: "SEO и продвижение",
      icon: "Search",
      skills: [
        "Ключевые слова",
        "Описания товаров",
        "A/B тестирование",
        "Конверсия",
      ],
      level: 80,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Навыки и компетенции
          </h2>
          <p className="font-opensans text-lg text-neutral max-w-2xl mx-auto">
            Глубокая экспертиза в управлении маркетплейсами и увеличении продаж
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={group.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="font-montserrat text-xl">
                    {group.title}
                  </CardTitle>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-ocean h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${group.level}%` }}
                  />
                </div>
                <span className="text-sm font-opensans text-neutral">
                  {group.level}% экспертизы
                </span>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="font-opensans"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
