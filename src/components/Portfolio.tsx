import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "Электроника на Wildberries",
      category: "Категорийный менеджмент",
      description:
        "Увеличил продажи категории на 180% за 8 месяцев через оптимизацию ассортимента и SEO",
      metrics: [
        { label: "Рост продаж", value: "180%" },
        { label: "Новых SKU", value: "150+" },
        { label: "Рост конверсии", value: "45%" },
      ],
      tags: ["Wildberries", "Электроника", "SEO"],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    },
    {
      title: "Спортивные товары на OZON",
      category: "Аналитика и оптимизация",
      description:
        "Автоматизировал процесс ценообразования и увеличил маржинальность на 35%",
      metrics: [
        { label: "Рост маржи", value: "35%" },
        { label: "Экономия времени", value: "20ч/нед" },
        { label: "Товарооборот", value: "₽15M+" },
      ],
      tags: ["OZON", "Спорт", "Автоматизация"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      title: "Косметика на Яндекс.Маркете",
      category: "Запуск с нуля",
      description:
        "Вывел бренд в ТОП-10 по категории за 6 месяцев с нулевого старта",
      metrics: [
        { label: "Позиция в ТОП", value: "#7" },
        { label: "Месячный оборот", value: "₽8M" },
        { label: "Средний чек", value: "+60%" },
      ],
      tags: ["Яндекс.Маркет", "Косметика", "Бренд"],
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Портфолио проектов
          </h2>
          <p className="font-opensans text-lg text-neutral max-w-2xl mx-auto">
            Конкретные кейсы с измеримыми результатами и ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="font-opensans text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="font-montserrat text-xl mb-2">
                  {project.title}
                </CardTitle>
                <p className="font-opensans text-sm text-neutral leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="font-montserrat font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="font-opensans text-xs text-neutral">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="font-opensans text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-opensans"
                >
                  <Icon name="ExternalLink" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
