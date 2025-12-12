import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState('training');

  return (
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

          <TabsContent value="training" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {schedule.training.map((item, index) => (
                <Card key={index} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{item.day}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          {item.time}
                        </p>
                      </div>
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {item.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="competitions" className="mt-0">
            <div className="space-y-6">
              {schedule.competitions.map((item, index) => (
                <Card key={index} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge>{item.date}</Badge>
                          <Badge variant="outline">{item.status}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {item.location}
                        </p>
                      </div>
                      <Button size="lg" className="hover-scale">
                        <Icon name="ExternalLink" className="mr-2" size={20} />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;
