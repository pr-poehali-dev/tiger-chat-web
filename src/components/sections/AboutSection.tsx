import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const achievements = [
  { number: '19', label: 'Участников' },
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
    achievement: 'Педагог от Бога. Обворожительная блондинка',
    image: 'https://cdn.poehali.dev/files/kdn.png'
  },
  {
    name: 'Елена Шовковая',
    role: 'Леди Байкал',
    achievement: 'Спортивный концентрат. Бег, лыжи, горы - кайф',
    image: 'https://cdn.poehali.dev/files/shovk.png'
  },
  {
    name: 'Марина Любимова',
    role: 'Августовская Тигрица',
    achievement: 'Ни дня без бега'
  },
  {
    name: 'Маргарита Самойлова',
    role: 'Риточка',
    achievement: 'Бегу, дышу',
    image: 'https://cdn.poehali.dev/files/Ri.png'
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
  },
  {
    name: 'Марина',
    role: 'Марина',
    achievement: 'Кемерово'
  },
  {
    name: 'Константин',
    role: 'Константин',
    achievement: 'Иркутск'
  },
  {
    name: 'Ксения Петербургская',
    role: 'Ксения',
    achievement: 'СПБ',
    image: 'https://cdn.poehali.dev/files/ksu.png'
  },
  {
    name: 'Владимир Коротин',
    role: 'VK',
    achievement: 'Вологда'
  }
];

const AboutSection = () => {
  return (
    <>
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
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="User" size={28} className="text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-background">{member.name}</h3>
                      <p className="text-sm text-background/60">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-background/80">{member.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
