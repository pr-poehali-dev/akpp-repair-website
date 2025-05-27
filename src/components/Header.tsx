import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Icon name="Wrench" size={24} className="text-white" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">CAR'S</div>
            <div className="text-xs text-orange-500 font-medium">HEALTH</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            Не знаю, что сломалось
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            О нас
          </a>
          <a
            href="#reviews"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            Адреса
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            Ремонт вариатора
          </a>
          <a
            href="#shop"
            className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
          >
            Магазин
          </a>
        </nav>

        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm">
          Консультация
        </button>
      </div>
    </header>
  );
};

export default Header;
