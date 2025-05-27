import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Search",
      title: "Диагностика АКПП",
      description:
        "Комплексная диагностика с использованием современного оборудования",
      price: "от 2 000 ₽",
    },
    {
      icon: "Wrench",
      title: "Ремонт АКПП",
      description: "Капитальный ремонт с заменой изношенных деталей",
      price: "от 25 000 ₽",
    },
    {
      icon: "Droplets",
      title: "Замена масла",
      description: "Замена трансмиссионного масла и фильтров АКПП",
      price: "от 3 500 ₽",
    },
    {
      icon: "Settings",
      title: "Настройка ТО",
      description: "Профилактическое обслуживание и настройка системы",
      price: "от 5 000 ₽",
    },
    {
      icon: "RefreshCw",
      title: "Промывка системы",
      description: "Полная промывка гидроблока и системы охлаждения",
      price: "от 8 000 ₽",
    },
    {
      icon: "Shield",
      title: "Гарантийное обслуживание",
      description: "Послегарантийное обслуживание в течение 12 месяцев",
      price: "Бесплатно",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автоматических коробок
            передач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-scale"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Icon name={service.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-orange-500">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
