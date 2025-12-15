import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const gallery = [
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/0a5bf2b7-e38b-4588-9bb8-b1f45f0b9949.jpg', title: 'Командное фото' },
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/3aeaa24b-a148-47d5-8a46-37abc023b89b.jpg', title: 'Тренировка на рассвете' },
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/5fd86a57-021e-4521-baf9-8e57670b9428.jpg', title: 'Наши достижения' }
];

const audioTracks = [
  {
    title: 'Декабрьская беготня',
    description: 'Зимние пробежки и подготовка к новому сезону',
    duration: '20:00',
    url: ''
  },
  {
    title: 'Подкаст о беге #1',
    description: 'Обсуждаем подготовку к марафону',
    duration: '15:30',
    url: ''
  },
  {
    title: 'Интервью с участниками',
    description: 'Истории успеха наших бегунов',
    duration: '22:15',
    url: ''
  },
  {
    title: 'Советы тренера',
    description: 'Как избежать травм при беге',
    duration: '18:45',
    url: ''
  }
];

const MediaSection = () => {
  const [mediaTab, setMediaTab] = useState('photos');

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-base px-4 py-1">
            Медиа
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            МОМЕНТЫ ПОБЕД
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Запечатлённые моменты наших тренировок и соревнований
          </p>
        </div>

        <Tabs value={mediaTab} onValueChange={setMediaTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="photos" className="text-lg py-3">
              <Icon name="Image" className="mr-2" size={20} />
              Фото
            </TabsTrigger>
            <TabsTrigger value="audio" className="text-lg py-3">
              <Icon name="Music" className="mr-2" size={20} />
              Аудио
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-0">
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
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioTracks.map((track, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Music" className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {track.duration}
                      </span>
                    </div>

                    {track.url ? (
                      <audio controls className="w-full">
                        <source src={track.url} type="audio/mpeg" />
                        Ваш браузер не поддерживает аудио.
                      </audio>
                    ) : (
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground">Скоро появится</p>
                      </div>
                    )}
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

export default MediaSection;