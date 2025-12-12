import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('training');

  const achievements = [
    { number: '150+', label: 'Участников' },
    { number: '50+', label: 'Марафонов' },
    { number: '200+', label: 'Медалей' },
    { number: '5', label: 'Лет опыта' }
  ];

  const teamMembers = [
    {
      name: 'Юрий Большаков',
      role: 'Владелец клуба',
      achievement: 'Бежит всегда, бежит везде. Примерный семьянин, многодетный отец'
    },
    {
      name: 'Наталья Куйдина',
      role: 'Тигрица из Тюмени',
      achievement: 'Педагог от Бога. Обворожительная блондинка'
    },
    {
      name: 'Елена Шовковая',
      role: 'Леди Байкал',
      achievement: 'Спортивный концентрат. Бег, лыжи, горы - кайф'
    },
    {
      name: 'Марина Любимова',
      role: 'Августовская Тигрица',
      achievement: 'Ни дня без бега'
    },
    {
      name: 'Маргарита Самойлова',
      role: 'Риточка',
      achievement: 'Бегу, дышу'
    },
    {
      name: 'Раушан Рафикова',
      role: 'Раушан',
      achievement: 'Бегу и сочиняю стихи на ходу'
    },
    {
      name: 'Александр Редькин',
      role: 'Саша',
      achievement: 'Бег и хобби'
    },
    {
      name: 'Оксана Алексеева',
      role: 'Оксана',
      achievement: 'Бегу за Ярославль'
    },
    {
      name: 'Динара',
      role: 'Динара',
      achievement: 'Бег в суровом Челябе'
    },
    {
      name: 'Валентина',
      role: 'Валентина',
      achievement: 'Бегу в СПБ'
    },
    {
      name: 'Светлана',
      role: 'Светлана',
      achievement: 'Улан удэ тудэ сюдэ'
    },
    {
      name: 'Николай',
      role: 'Скиф',
      achievement: 'ZA Челябинск'
    },
    {
      name: 'Юлия Аридова',
      role: 'Юлия',
      achievement: 'Карельский бег'
    },
    {
      name: 'Михаил Марков',
      role: 'МыслейНет',
      achievement: 'Челябинск'
    },
    {
      name: 'Алёна',
      role: 'Алёна',
      achievement: 'Новосибирск'
    }
  ];

  const schedule = {
    training: [
      { day: 'Понедельник', time: '18:00 - 20:00', type: 'Интервальная тренировка', location: 'Стадион "Динамо"' },
      { day: 'Среда', time: '18:00 - 20:00', type: 'Длительный бег', location: 'Парк Горького' },
      { day: 'Пятница', time: '18:00 - 20:00', type: 'Темповый бег', location: 'Стадион "Динамо"' },
      { day: 'Суббота', time: '09:00 - 11:00', type: 'ОФП и растяжка', location: 'Спортзал' }
    ],
    competitions: [
      { date: '15 января', event: 'Зимний полумарафон', location: 'Москва', status: 'Регистрация открыта' },
      { date: '5 февраля', event: 'Кубок Тигра 10км', location: 'Парк Горький', status: 'Скоро' },
      { date: '20 марта', event: 'Весенний марафон', location: 'Санкт-Петербург', status: 'Планируется' }
    ]
  };

  const gallery = [
    { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/0a5bf2b7-e38b-4588-9bb8-b1f45f0b9949.jpg', title: 'Командное фото' },
    { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/3aeaa24b-a148-47d5-8a46-37abc023b89b.jpg', title: 'Тренировка на рассвете' },
    { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/5fd86a57-021e-4521-baf9-8e57670b9428.jpg', title: 'Наши достижения' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/0a5bf2b7-e38b-4588-9bb8-b1f45f0b9949.jpg" 
            alt="Тигриный чат" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary hover:bg-primary/90">#декабрьская_беготня</Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Вечно голодная 
тигриная стая</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Профессиональное сообщество бегунов. Тренируйся с лучшими, достигай невозможного.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale">
              <Icon name="Users" className="mr-2" size={24} />
              Присоединиться
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-foreground hover-scale">
              <Icon name="Calendar" className="mr-2" size={24} />
              Расписание
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-base px-4 py-1">
              О команде
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              КТО МЫ ТАКИЕ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Сообщество бегунов любителей. Тренируйся с тиграми, достигай невозможного.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Icon name="Target" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Помогать каждому достичь своих спортивных целей через профессиональный 
                    подход, командный дух и постоянное совершенствование.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <Icon name="Award" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Наши ценности</h3>
                  <p className="text-muted-foreground">
                    Дисциплина, взаимоподдержка, стремление к победе. Мы тренируемся как 
                    профессионалы и поддерживаем друг друга на каждом этапе.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Icon name="TrendingUp" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Наш подход</h3>
                  <p className="text-muted-foreground">
                    Индивидуальные планы тренировок, профессиональное сопровождение на 
                    соревнованиях и регулярный мониторинг прогресса каждого спортсмена.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden animate-scale-in shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/3aeaa24b-a148-47d5-8a46-37abc023b89b.jpg" 
                alt="Тренировка команды" 
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-base px-4 py-1 border-background text-background">
              Достижения
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              НАШИ РЕЗУЛЬТАТЫ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((item, index) => (
              <Card key={index} className="bg-background/10 border-background/20 backdrop-blur animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="text-lg text-background/80">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-background/10 border-background/20 backdrop-blur animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-background">{member.name}</h3>
                      <p className="text-background/70">{member.role}</p>
                    </div>
                  </div>
                  <Badge className="bg-secondary hover:bg-secondary/90">
                    <Icon name="Trophy" className="mr-1" size={14} />
                    {member.achievement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-base px-4 py-1">
              Галерея
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              МОМЕНТЫ ПОБЕД
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Запечатлённые моменты наших тренировок и соревнований
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="relative h-80 rounded-xl overflow-hidden group animate-scale-in shadow-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-base px-4 py-1">
              Расписание
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              КОГДА МЫ ТРЕНИРУЕМСЯ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Актуальное расписание тренировок и предстоящих соревнований
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="training" className="text-lg py-3">
                <Icon name="Dumbbell" className="mr-2" size={20} />
                Тренировки
              </TabsTrigger>
              <TabsTrigger value="competitions" className="text-lg py-3">
                <Icon name="Trophy" className="mr-2" size={20} />
                Соревнования
              </TabsTrigger>
            </TabsList>

            <TabsContent value="training" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {schedule.training.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{item.day}</h3>
                          <p className="text-muted-foreground flex items-center">
                            <Icon name="Clock" className="mr-2" size={16} />
                            {item.time}
                          </p>
                        </div>
                        <Badge className="bg-primary">
                          {item.type}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Icon name="MapPin" className="mr-2" size={16} />
                        {item.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="animate-fade-in">
              <div className="space-y-6 max-w-4xl mx-auto">
                {schedule.competitions.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center min-w-[80px]">
                            <div className="text-2xl font-bold">{item.date.split(' ')[0]}</div>
                            <div className="text-sm">{item.date.split(' ')[1]}</div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                            <p className="text-muted-foreground flex items-center">
                              <Icon name="MapPin" className="mr-2" size={16} />
                              {item.location}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-base px-4 py-2">
                          {item.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ГОТОВ СТАТЬ ЧАСТЬЮ КОМАНДЫ?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Присоединяйся к Тигриному чату и начни путь к своим спортивным достижениям
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-foreground hover:bg-white/90 hover-scale">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать нам
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-foreground hover-scale">
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ТИГРИНЫЙ ЧАТ</h3>
              <p className="text-background/70">
                Профессиональный беговой клуб для тех, кто стремится к победам
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@tigerchat.ru
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2025 Тигриный чат. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;