import { Official, Party } from '@/types/official';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface OfficialCardProps {
  official: Official;
  index: number;
}

const getPartyColor = (party: Party): string => {
  switch (party) {
    case 'Democrat':
      return 'bg-democrat';
    case 'Republican':
      return 'bg-republican';
    case 'Independent':
      return 'bg-independent';
    default:
      return 'bg-muted';
  }
};

const getPartyBadgeVariant = (party: Party): string => {
  switch (party) {
    case 'Democrat':
      return 'bg-democrat/10 text-democrat border-democrat/20';
    case 'Republican':
      return 'bg-republican/10 text-republican border-republican/20';
    case 'Independent':
      return 'bg-independent/10 text-independent border-independent/20';
    default:
      return '';
  }
};

const getLevelBadge = (level: string): string => {
  switch (level) {
    case 'Federal':
      return 'bg-secondary text-secondary-foreground';
    case 'State':
      return 'bg-primary/10 text-primary';
    case 'Local':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const OfficialCard = ({ official, index }: OfficialCardProps) => {
  const yearsInOffice = new Date().getFullYear() - parseInt(official.since);

  return (
    <div 
      className="card-elevated bg-card rounded-xl border border-border p-6 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar/Photo placeholder */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getPartyColor(official.party)} text-white shrink-0`}>
          <User className="w-8 h-8" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-lg text-card-foreground leading-tight">
                {official.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {official.office}
                {official.district && ` • ${official.district}`}
              </p>
            </div>
            <Badge className={getLevelBadge(official.level)}>
              {official.level}
            </Badge>
          </div>

          {/* Party Badge */}
          <Badge 
            variant="outline" 
            className={`mb-4 ${getPartyBadgeVariant(official.party)}`}
          >
            {official.party}
          </Badge>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">In office:</span>
              <span className="font-semibold text-card-foreground">{yearsInOffice} years</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Next election:</span>
              <span className="font-semibold text-primary">{official.nextElection}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
