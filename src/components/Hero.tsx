import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Ремонт и замена <span className="text-orange-500">АКПП</span>
            </h1>
            <p className="text-xl mb-4 text-gray-300">
              Car's Health позаботится о здоровье твоей машины
            </p>
            <p className="text-lg mb-2 text-gray-300">
              Гарантия{" "}
              <span className="text-orange-500 font-semibold">до 2 лет</span> на
              все работы
            </p>
            <div className="flex items-center text-gray-300 mb-8">
              <Icon name="MapPin" size={16} className="mr-2" />
              <span className="text-sm">
                Москва, Санкт-Петербург, Тверь, Ржев, Нижний Новгород
              </span>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors mb-12">
              Бесплатная консультация • скидка 5-15% на ремонт
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-700 rounded-lg p-4 text-center">
                <Icon
                  name="Search"
                  size={32}
                  className="text-orange-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-300">
                  Качественная диагностика
                </div>
              </div>
              <div className="border border-gray-700 rounded-lg p-4 text-center">
                <Icon
                  name="Settings"
                  size={32}
                  className="text-orange-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-300">Запчасти в наличии</div>
              </div>
              <div className="border border-gray-700 rounded-lg p-4 text-center">
                <Icon
                  name="Home"
                  size={32}
                  className="text-orange-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-300">
                  Приедем на дефектовку
                </div>
              </div>
              <div className="border border-gray-700 rounded-lg p-4 text-center">
                <Icon
                  name="FileText"
                  size={32}
                  className="text-orange-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-300">
                  Гарантия до двух лет
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1632823469850-36362799cd0f?w=600&h=400&fit=crop"
              alt="Ремонт АКПП"
              className="rounded-lg opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
