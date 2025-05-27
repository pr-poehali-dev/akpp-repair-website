import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ до 12 месяцев",
    },
    {
      icon: "Clock",
      title: "Быстрое выполнение",
      description: "Диагностика за 1 день, большинство ремонтов за 2-3 дня",
    },
    {
      icon: "DollarSign",
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых доплат",
    },
    {
      icon: "Users",
      title: "Опытные мастера",
      description: "Команда сертифицированных специалистов с опытом 15+ лет",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Наши преимущества, которые делают нас лидерами в сфере ремонта АКПП
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Icon name={benefit.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
