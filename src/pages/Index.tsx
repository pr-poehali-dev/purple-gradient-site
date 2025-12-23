import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      id: 1,
      name: "Базовый",
      price: 100,
      description: "Поддержка сервера на день",
      features: ["Особая роль в чате", "Приветствие при входе", "1 донат-командa"],
      icon: "Heart",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "Продвинутый",
      price: 500,
      description: "Поддержка сервера на неделю",
      features: ["VIP роль", "Цветной ник", "5 донат-команд", "Доступ к VIP зоне"],
      icon: "Sparkles",
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      id: 3,
      name: "Премиум",
      price: 1000,
      description: "Поддержка сервера на месяц",
      features: ["Premium роль", "Уникальный префикс", "Все донат-команды", "Приоритет в очереди", "Особые эффекты"],
      icon: "Crown",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DonateServer
            </h1>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                О проекте
              </button>
              <button onClick={() => scrollToSection('donations')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Донаты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Icon name="Zap" size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Сервер открыт 24/7</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Добро пожаловать<br />на наш сервер!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Поддержи развитие сервера и получи эксклюзивные возможности. 
            Каждый донат помогает нам становиться лучше!
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('donations')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            >
              <Icon name="Gift" size={20} className="mr-2" />
              Выбрать донат
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-purple-200 hover:bg-purple-50 px-8 py-6 text-lg"
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-scale-in">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">1000+ игроков</h3>
              <p className="text-gray-600 text-sm">Активное комьюнити</p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">99.9% Uptime</h3>
              <p className="text-gray-600 text-sm">Стабильная работа</p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Новые режимы</h3>
              <p className="text-gray-600 text-sm">Постоянные обновления</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              О проекте
            </h2>
            <p className="text-gray-600 text-lg">
              Наша миссия — создать лучший игровой опыт для каждого игрока
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle>Наша цель</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы создаем уникальное игровое пространство, где каждый может найти что-то для себя. 
                  Ваша поддержка помогает нам развивать новые режимы, улучшать сервер и добавлять крутые функции.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <CardTitle>Куда идут средства</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы стараемся для вас
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Heart" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Благодарим за поддержку!</h3>
                <p className="text-gray-700">
                  Каждый донат важен для нас. Благодаря вам мы можем продолжать развивать проект и делать его лучше. 
                  Все донатеры получают особый статус и эксклюзивные возможности на сервере.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donations" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Выберите пакет
            </h2>
            <p className="text-gray-600 text-lg">
              Получите особые привилегии и поддержите развитие сервера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative hover:scale-105 transition-all duration-300 animate-scale-in ${
                  pkg.popular ? 'border-2 border-purple-400 shadow-xl' : 'border-purple-100'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={pkg.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {pkg.price}₽
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold`}
                    size="lg"
                  >
                    Приобрести
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Не нашли подходящий пакет?</p>
            <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 px-6 border-t border-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            DonateServer
          </h2>
          <p className="text-gray-600 mb-6">
            Спасибо за вашу поддержку! Вместе мы делаем проект лучше 💜
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Icon name="Globe" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;