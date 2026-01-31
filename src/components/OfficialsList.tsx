import { Official, OfficeLevel } from '@/types/official';
import { OfficialCard } from './OfficialCard';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OfficialsListProps {
  officials: Official[];
  address: string;
  onClear: () => void;
}

export const OfficialsList = ({ officials, address, onClear }: OfficialsListProps) => {
  // Group officials by level
  const federalOfficials = officials.filter(o => o.level === 'Federal');
  const stateOfficials = officials.filter(o => o.level === 'State');
  const localOfficials = officials.filter(o => o.level === 'Local');

  const renderSection = (title: string, officialsList: Official[], startIndex: number) => {
    if (officialsList.length === 0) return null;

    return (
      <div className="mb-10">
        <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
          {title}
          <span className="text-sm font-sans font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {officialsList.length}
          </span>
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {officialsList.map((official, idx) => (
            <OfficialCard 
              key={official.id} 
              official={official} 
              index={startIndex + idx}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
          <div>
            <h2 className="font-display text-3xl text-foreground">
              YOUR INCUMBENTS
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Results for: <span className="text-foreground">{address}</span>
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onClear}>
            <X className="w-4 h-4 mr-2" />
            New Search
          </Button>
        </div>

        {/* Warning Banner */}
        <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg mb-8">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">
              These officials are currently in power
            </p>
            <p className="text-sm text-muted-foreground">
              Check your local election dates and make sure you're registered to vote at{' '}
              <a 
                href="https://vote.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vote.gov
              </a>
            </p>
          </div>
        </div>

        {/* Officials by Level */}
        {renderSection('Federal Officials', federalOfficials, 0)}
        {renderSection('State Officials', stateOfficials, federalOfficials.length)}
        {renderSection('Local Officials', localOfficials, federalOfficials.length + stateOfficials.length)}

        {officials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No officials found for this address.</p>
          </div>
        )}
      </div>
    </section>
  );
};
