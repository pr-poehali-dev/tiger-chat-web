import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
    achievement: 'Бежит всегда, бежит везде. Примерный семьянин, многодетный отец',
    image: 'https://cdn.poehali.dev/files/ura.png',
    gallery: [
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/ff2c8613-a10b-4eec-887f-a24a202ac39d.jpg',
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/ea3e6d41-f067-415b-8ad3-d51467240ea4.jpg',
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/2bea2de9-f579-4c5b-bf69-531df941bc86.jpg'
    ],
    description: 'Основатель клуба и вдохновитель команды. Многолетний опыт в беге и организации спортивных мероприятий.',
    achievements: ['10+ марафонов', 'Организатор беговых клубов', 'Наставник начинающих бегунов']
  },
  {
    name: 'Наталья Куйдина',
    role: 'Тигрица из Тюмени',
    achievement: 'Педагог от Бога. Обворожительная блондинка',
    image: 'https://cdn.poehali.dev/files/kdn.png',
    description: 'Профессиональный педагог и страстный бегун. Вдохновляет своим примером учеников и коллег.',
    achievements: ['15+ марафонов', 'Призёр региональных соревнований', 'Лучший темп в команде']
  },
  {
    name: 'Елена Шовковая',
    role: 'Леди Байкал',
    achievement: 'Спортивный концентрат. Бег, лыжи, горы - кайф',
    image: 'https://cdn.poehali.dev/files/shovk.png',
    description: 'Универсальная спортсменка с опытом в беге, лыжах и горном туризме. Покоряет вершины и дистанции.',
    achievements: ['Участница Байкальского марафона', 'Мастер горного бега', '20+ медалей']
  },
  {
    name: 'Марина Любимова',
    role: 'Августовская Тигрица',
    achievement: 'Ни дня без бега',
    image: 'https://cdn.poehali.dev/files/Lub.png',
    description: 'Настоящий пример постоянства и дисциплины. Ежедневные тренировки - её образ жизни.',
    achievements: ['365 дней бега подряд', '12 марафонов за год', 'Рекорд клуба по регулярности']
  },
  {
    name: 'Маргарита Самойлова',
    role: 'Риточка',
    achievement: 'Бегу, дышу',
    image: 'https://cdn.poehali.dev/files/Ri.png',
    description: 'Бег - это её медитация и способ находить гармонию с собой.',
    achievements: ['8 марафонов', 'Полумарафон до 1:45', 'Вдохновляет новичков']
  },
  {
    name: 'Раушан Рафикова',
    role: 'Раушан',
    achievement: 'Бегу и сочиняю стихи на ходу',
    description: 'Творческая натура, которая находит вдохновение в каждой пробежке.',
    achievements: ['Автор беговых стихов', '6 марафонов', 'Душа команды']
  },
  {
    name: 'Александр Редькин',
    role: 'Mag_Fafnir',
    achievement: 'Бег и хобби',
    description: 'Бег - это не просто спорт, а любимое хобби и способ самовыражения.',
    achievements: ['5 марафонов', 'Участник трейлов', 'Фотограф команды']
  },
  {
    name: 'Оксана Алексеева',
    role: 'Оксана',
    achievement: 'Бегу за Ярославль',
    image: 'https://cdn.poehali.dev/files/oks.png',
    description: 'Представляет Ярославль на всероссийских соревнованиях с гордостью.',
    achievements: ['Чемпионка области', '7 марафонов', 'Амбассадор Ярославля']
  },
  {
    name: 'Динара',
    role: 'Динара',
    achievement: 'Бег в суровом Челябе',
    description: 'Челябинская закалка помогает преодолевать любые дистанции.',
    achievements: ['Бег при -30°C', '4 марафона', 'Железная воля']
  },
  {
    name: 'Валентина',
    role: 'Валентина',
    achievement: 'Бегу в СПБ',
    description: 'Покоряет улицы и набережные Санкт-Петербурга.',
    achievements: ['Марафон Белые ночи', '10 полумарафонов', 'Городской рекорд']
  },
  {
    name: 'Светлана',
    role: 'Светлана',
    achievement: 'Улан удэ тудэ сюдэ',
    description: 'Бегает по всему Улан-Удэ, изучая родной город.',
    achievements: ['Локальный эксперт', '5 марафонов', 'Организатор пробежек']
  },
  {
    name: 'Николай',
    role: 'Скиф',
    achievement: 'ZA Челябинск',
    description: 'Стойкий и выносливый, как древний воин-скиф.',
    achievements: ['Ультрамарафон 50км', '8 марафонов', 'Несгибаемый дух']
  },
  {
    name: 'Юлия Аридова',
    role: 'Юлия',
    achievement: 'Карельский бег',
    image: 'https://cdn.poehali.dev/files/ari.png',
    description: 'Бегает по карельским лесам и тропам, находя силы в природе.',
    achievements: ['Трейлраннер', '6 марафонов', 'Покорительница Карелии']
  },
  {
    name: 'Михаил Марков',
    role: 'МыслейНет',
    achievement: 'Челябинск',
    image: 'https://cdn.poehali.dev/files/mih.png',
    description: 'Во время бега отключает мысли и наслаждается процессом.',
    achievements: ['Медитативный бег', '7 марафонов', 'Дзен-мастер']
  },
  {
    name: 'Алёна Луговая',
    role: 'Алёна',
    achievement: 'Новосибирск',
    description: 'Представляет Новосибирск на спортивной карте России.',
    achievements: ['Сибирский марафон', '9 марафонов', 'Топ-3 региона']
  },
  {
    name: 'Марина Булгакова',
    role: 'Марина',
    achievement: 'Кемерово',
    image: 'https://cdn.poehali.dev/files/Bul.png',
    description: 'Кемеровская бегунья с большими амбициями.',
    achievements: ['5 марафонов', 'Рекорд города', 'Командный игрок']
  },
  {
    name: 'Константин',
    role: 'Константин',
    achievement: 'Иркутск',
    description: 'Иркутский бегун с настоящим сибирским характером.',
    achievements: ['Байкальский лёд', '6 марафонов', 'Зимний воин']
  },
  {
    name: 'Ксения Петербургская',
    role: 'Ксения',
    achievement: 'СПБ',
    image: 'https://cdn.poehali.dev/files/ksu.png',
    description: 'Петербургская элегантность сочетается с железной волей.',
    achievements: ['15 марафонов', 'Белые ночи чемпион', 'Лидер команды СПБ']
  },
  {
    name: 'Владимир Коротин',
    role: 'VK',
    achievement: 'Вологда',
    description: 'Вологодский бегун с современным подходом к тренировкам.',
    achievements: ['IT и спорт', '8 марафонов', 'Гаджет-фанат']
  }
];

const AboutSection = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

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
              <Card 
                key={index} 
                className="bg-background/10 border-background/20 backdrop-blur animate-fade-in hover-scale cursor-pointer" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover object-top transition-transform duration-300 hover:scale-125"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-125">
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

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedMember?.image ? (
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover object-top"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl">{selectedMember?.name}</DialogTitle>
                <p className="text-primary font-semibold">{selectedMember?.role}</p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Icon name="User" size={20} />
                О спортсмене
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedMember?.description || selectedMember?.achievement}
              </p>
            </div>

            {selectedMember?.achievements && selectedMember.achievements.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Trophy" size={20} />
                  Достижения
                </h3>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground italic">
                {selectedMember?.achievement}
              </p>
            </div>

            {selectedMember?.gallery && selectedMember.gallery.length > 0 && (
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Image" size={20} />
                  Галерея
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedMember.gallery.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${selectedMember.name} - фото ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => window.open(photo, '_blank')}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutSection;