import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { TeamMember } from './teamData';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

export const TeamMemberCard = ({ member, index, onClick }: TeamMemberCardProps) => {
  return (
    <Card 
      className="bg-background/10 border-background/20 backdrop-blur animate-fade-in hover-scale cursor-pointer" 
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
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
  );
};
