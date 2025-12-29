import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { TeamMember } from './teamData';
import { MemberGallery } from './MemberGallery';

interface MemberDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const MemberDialog = ({ member, onClose }: MemberDialogProps) => {
  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            {member?.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover object-top"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="User" size={32} className="text-primary" />
              </div>
            )}
            <div>
              <DialogTitle className="text-2xl">{member?.name}</DialogTitle>
              <p className="text-primary font-semibold">{member?.role}</p>
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
              {member?.description || member?.achievement}
            </p>
          </div>

          {member?.achievements && member.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                Достижения
              </h3>
              <ul className="space-y-2">
                {member.achievements.map((achievement, idx) => (
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
              {member?.achievement}
            </p>
          </div>

          {member?.gallery && member.gallery.length > 0 && (
            <MemberGallery gallery={member.gallery} memberName={member.name} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};