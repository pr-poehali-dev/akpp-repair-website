import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300">
            Свяжитесь с нами для консультации и записи на диагностику
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4 mx-auto">
              <Icon name="Phone" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Телефон</h3>
            <p className="text-2xl font-bold text-orange-400">
              +7 (495) 123-45-67
            </p>
            <p className="text-gray-300">Ежедневно 9:00-21:00</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4 mx-auto">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Адрес</h3>
            <p className="text-gray-300">г. Москва, ул. Автомобильная, 15</p>
            <p className="text-gray-300">м. Автозаводская</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4 mx-auto">
              <Icon name="Mail" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">info@autoakpp.ru</p>
            <p className="text-gray-300">Ответим в течение часа</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
            <Icon name="Calendar" size={20} />
            <span>Записаться на диагностику</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
