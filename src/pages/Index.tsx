import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Хозтовары", icon: "Home", description: "Все для дома и уборки" },
    { name: "Канцтовары", icon: "PenTool", description: "Офисные принадлежности" },
    { name: "Сантехника", icon: "Droplets", description: "Сантехнические товары" },
    { name: "Электротовары", icon: "Zap", description: "Электрооборудование" },
    { name: "Инструменты", icon: "Wrench", description: "Ручные инструменты" },
    { name: "Бытовая химия", icon: "Beaker", description: "Химические средства" },
    { name: "Электроинструменты", icon: "Drill", description: "Электрические инструменты" },
    { name: "Скобяные изделия", icon: "Hammer", description: "Крепежные элементы" },
    { name: "Сухие смеси", icon: "Package", description: "Строительные смеси" },
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "9:00 - 19:00" },
    { day: "Суббота", time: "10:00 - 16:00" },
    { day: "Воскресенье", time: "Выходной" },
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Header */}
      <header className="bg-brand-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Store" size={32} className="text-brand-blue" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Находка</h1>
                <p className="text-blue-100 text-lg">все нужное рядом</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="text-center">
                <Icon name="Phone" size={20} className="mx-auto mb-1" />
                <p className="text-sm">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="Clock" size={20} className="mx-auto mb-1" />
                <p className="text-sm">Пн-Пт: 9:00-19:00</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={20} className="mx-auto mb-1" />
                <p className="text-sm">ул. Земляной вал, 24/32</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        
        {/* About Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-6">
            Магазин промышленных товаров
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Добро пожаловать в магазин "Находка"! Мы предлагаем широкий ассортимент 
            качественных товаров для дома, офиса и производства. У нас вы найдете все 
            необходимое для решения бытовых и профессиональных задач.
          </p>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-brand-blue mb-12">
            Наш ассортимент
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-brand-green hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={category.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-brand-blue group-hover:text-brand-green transition-colors">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Address & Hours */}
          <section>
            <Card className="h-full bg-gradient-to-br from-brand-beige to-brand-white border-2 border-brand-orange/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-brand-blue">Адрес и режим работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Наш адрес:</h4>
                  <p className="text-gray-700 text-lg">
                    г. Москва<br />
                    ул. Земляной вал, д. 24/32
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Режим работы:</h4>
                  <div className="space-y-2">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-white/50 rounded-lg">
                        <span className="text-gray-700">{schedule.day}</span>
                        <Badge variant="outline" className="text-brand-blue border-brand-blue">
                          {schedule.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contacts */}
          <section>
            <Card className="h-full bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border-2 border-brand-blue/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-brand-blue">Контакты</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-blue">Телефон</p>
                      <p className="text-gray-700">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-blue">Email</p>
                      <p className="text-gray-700">info@nahodka-store.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-blue">Мессенджеры</p>
                      <p className="text-gray-700">WhatsApp, Telegram</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button className="bg-brand-blue hover:bg-blue-700 text-white w-full">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать нам
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Почему выбирают нас?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Качество</h4>
              <p className="text-blue-100">Только проверенные товары от надежных поставщиков</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрое обслуживание</h4>
              <p className="text-blue-100">Оперативная помощь в выборе и оформлении покупки</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Star" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Опыт</h4>
              <p className="text-blue-100">Многолетний опыт работы в сфере промышленных товаров</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Store" size={24} className="text-brand-blue" />
            <span className="text-xl font-bold">Находка</span>
          </div>
          <p className="text-gray-400 mb-2">все нужное рядом</p>
          <p className="text-gray-500 text-sm">
            © 2024 Магазин "Находка". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;