import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { achievements, teamMembers } from './about/teamData';
import { TeamMemberCard } from './about/TeamMemberCard';
import { MemberDialog } from './about/MemberDialog';
import type { TeamMember } from './about/teamData';

const AboutSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberSelect = (member: TeamMember) => {
    setSelectedMember(member);
  };

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
              <TeamMemberCard
                key={index}
                member={member}
                index={index}
                onClick={() => handleMemberSelect(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <MemberDialog
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};

export default AboutSection;
