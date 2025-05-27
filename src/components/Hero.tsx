import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Профессиональный ремонт{" "}
              <span className="text-orange-400">АКПП</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Диагностика, ремонт и обслуживание автоматических коробок передач
              любой сложности. Гарантия качества и доступные цены.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Записаться на диагностику</span>
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Узнать стоимость
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-blue-100">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">2000+</div>
                <div className="text-blue-100">отремонтированных АКПП</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">12</div>
                <div className="text-blue-100">месяцев гарантии</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1632823469850-36362799cd0f?w=600&h=400&fit=crop"
              alt="Ремонт АКПП"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
