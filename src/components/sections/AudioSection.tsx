import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const audioTracks = [
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

const AudioSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Аудиозаписи</h2>
          <p className="text-lg text-muted-foreground">
            Слушайте наши подкасты и интервью
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioTracks.map((track, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
      </div>
    </section>
  );
};

export default AudioSection;
