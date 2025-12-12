import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const gallery = [
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/0a5bf2b7-e38b-4588-9bb8-b1f45f0b9949.jpg', title: 'Командное фото' },
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/3aeaa24b-a148-47d5-8a46-37abc023b89b.jpg', title: 'Тренировка на рассвете' },
  { url: 'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/5fd86a57-021e-4521-baf9-8e57670b9428.jpg', title: 'Наши достижения' }
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
            <div className="text-center py-12">
              <Icon name="Music" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Аудиозаписи скоро появятся</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MediaSection;
