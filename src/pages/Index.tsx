import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Хозтовары", icon: "Home", color: "bg-brand-blue" },
    { name: "Канцтовары", icon: "PenTool", color: "bg-brand-green" },
    { name: "Сантехника", icon: "Droplets", color: "bg-brand-orange" },
    { name: "Электротовары", icon: "Zap", color: "bg-brand-red" },
    { name: "Инструменты", icon: "Wrench", color: "bg-brand-blue" },
    { name: "Бытовая химия", icon: "Beaker", color: "bg-brand-green" },
    { name: "Электроинструменты", icon: "Drill", color: "bg-brand-orange" },
    { name: "Скобяные изделия", icon: "Hammer", color: "bg-brand-red" },
    { name: "Сухие смеси", icon: "Package", color: "bg-brand-blue" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-beige to-brand-white">
      {/* Header */}
      <header className="bg-brand-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <Icon name="Store" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-blue">Находка</h1>
                <p className="text-sm text-gray-600">все нужное рядом</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-brand-blue transition-colors">Главная</a>
              <a href="#products" className="text-gray-700 hover:text-brand-blue transition-colors">Ассортимент</a>
              <a href="#address" className="text-gray-700 hover:text-brand-blue transition-colors">Адрес</a>
              <a href="#contacts" className="text-gray-700 hover:text-brand-blue transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-brand-blue mb-6">
              Магазин промышленных товаров
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Широкий выбор качественных товаров для дома, офиса и производства. 
              У нас вы найдете все необходимое для решения любых задач.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-3 text-lg animate-scale-in"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Посмотреть ассортимент
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/img/e5390370-230c-4c35-b571-7dd2c9e1c750.jpg" 
              alt="Магазин Находка" 
              className="w-full h-96 object-cover rounded-lg shadow-lg animate-scale-in"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue mb-6">Наш ассортимент</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий выбор товаров для различных сфер деятельности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-gray-100 hover:border-brand-blue"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={category.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-blue">{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section id="address" className="py-20 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Как нас найти</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-lg">
                    г. Москва<br />
                    ул. Земляной вал, д. 24/32
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Clock" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-lg">
                    Пн-Пт: 9:00 - 19:00<br />
                    Сб: 10:00 - 16:00<br />
                    Вс: выходной
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-blue mb-8">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-brand-green">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-brand-blue">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    +7 (495) 123-45-67
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-brand-orange">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-brand-blue">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    info@nahodka-store.ru
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-brand-red">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-brand-blue">Мессенджеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    WhatsApp, Telegram
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Icon name="Store" size={20} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold">Находка</h3>
            </div>
            <p className="text-blue-100 mb-4">все нужное рядом</p>
            <p className="text-blue-200 text-sm">
              © 2024 Магазин "Находка". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;