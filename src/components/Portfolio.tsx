import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "КЕЙС № 1",
      subtitle: "Электроника на Wildberries",
      category: "Категорийный менеджмент",
      task: "Увеличить продажи категории электроники через оптимизацию ассортимента и улучшение позиций в поиске",
      solution:
        "Провел глубокий анализ конкурентов, оптимизировал SEO-описания, внедрил матрицу ABC/XYZ для управления остатками",
      results: [
        { label: "Рост продаж", value: "180%" },
        { label: "Новых SKU", value: "150+" },
        { label: "Рост конверсии", value: "45%" },
        { label: "Позиции в ТОП-10", value: "85%" },
        { label: "ROI кампании", value: "320%" },
        { label: "Средний чек", value: "+40%" },
      ],
      tags: ["Wildberries", "Электроника", "SEO"],
    },
    {
      title: "КЕЙС № 2",
      subtitle: "Спортивные товары на OZON",
      category: "Аналитика и оптимизация",
      task: "Автоматизировать процесс ценообразования и увеличить маржинальность при сохранении объемов продаж",
      solution:
        "Разработал систему динамического ценообразования, настроил автоматические правила управления остатками и промо-акциями",
      results: [
        { label: "Рост маржи", value: "35%" },
        { label: "Экономия времени", value: "20ч/нед" },
        { label: "Товарооборот", value: "₽15M+" },
        { label: "Конверсия", value: "+28%" },
        { label: "Автоматизация", value: "90%" },
        { label: "Средний чек", value: "+25%" },
      ],
      tags: ["OZON", "Спорт", "Автоматизация"],
    },
    {
      title: "КЕЙС № 3",
      subtitle: "Косметика на Яндекс.Маркете",
      category: "Запуск с нуля",
      task: "Вывести новый бренд косметики в ТОП-10 категории за минимальные сроки с нулевого старта",
      solution:
        "Создал полную стратегию запуска: от анализа ниши до настройки рекламных кампаний и работы с influencer-маркетингом",
      results: [
        { label: "Позиция в ТОП", value: "#7" },
        { label: "Месячный оборот", value: "₽8M" },
        { label: "Средний чек", value: "+60%" },
        { label: "Узнаваемость", value: "40%" },
        { label: "Повторные покупки", value: "35%" },
        { label: "Рост за 6 мес", value: "450%" },
      ],
      tags: ["Яндекс.Маркет", "Косметика", "Бренд"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-white mb-4">
            Портфолио проектов
          </h2>
          <p className="font-opensans text-lg text-gray-300 max-w-2xl mx-auto">
            Конкретные кейсы с измеримыми результатами и детальным разбором
            решений
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Левая часть - информация */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <Icon
                            name="User"
                            size={24}
                            className="text-gray-900"
                          />
                        </div>
                        <div>
                          <div className="font-opensans text-sm text-gray-400">
                            Имя фамилия
                          </div>
                          <div className="font-opensans text-sm text-gray-400">
                            @ваш ник
                          </div>
                        </div>
                      </div>

                      <h3 className="font-montserrat text-3xl lg:text-4xl font-bold text-white mb-4">
                        {project.title}
                        <Icon
                          name="ArrowDown"
                          size={28}
                          className="inline ml-2"
                        />
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-montserrat text-xl font-semibold text-white mb-2">
                            Задача:
                          </h4>
                          <div className="bg-gray-700 rounded-lg p-4">
                            <p className="font-opensans text-gray-300 leading-relaxed">
                              {project.task}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-montserrat text-xl font-semibold text-white mb-2">
                            Решение:
                          </h4>
                          <div className="bg-gray-700 rounded-lg p-4">
                            <p className="font-opensans text-gray-300 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-gray-700 text-gray-300 font-opensans"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Правая часть - результаты */}
                  <div className="bg-gray-750 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h4 className="font-montserrat text-2xl font-semibold text-white mb-8">
                        Результат:
                      </h4>

                      <div className="grid grid-cols-2 gap-4">
                        {project.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="bg-red-600 rounded-lg p-4 text-center hover:bg-red-500 transition-colors duration-200"
                          >
                            <div className="font-montserrat text-2xl font-bold text-white mb-1">
                              {result.value}
                            </div>
                            <div className="font-opensans text-sm text-red-100">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900 font-montserrat"
                      >
                        <Icon name="ExternalLink" size={20} />
                        Подробный разбор кейса
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
