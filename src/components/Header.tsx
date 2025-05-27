import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Wrench" size={32} className="text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">АвтоАКПП</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Преимущества
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <div className="text-xl font-bold text-gray-800">
              +7 (495) 123-45-67
            </div>
            <div className="text-sm text-gray-600">Ежедневно 9:00-21:00</div>
          </div>
          <Icon name="Phone" size={24} className="text-blue-600 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
