import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl mb-2">VOTE THEM OUT</h3>
            <p className="text-secondary-foreground/70 text-sm max-w-md">
              A non-partisan tool to help citizens understand who currently holds power. 
              Knowledge is the first step to change.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <a 
              href="https://vote.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
            >
              Register to Vote →
            </a>
            <a 
              href="https://www.usa.gov/elected-officials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
            >
              Official Government Resources →
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/50 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> for democracy
          </p>
          <p className="text-xs text-secondary-foreground/40 mt-2">
            This is a demonstration app using mock data. For official election information, visit your state's election website.
          </p>
        </div>
      </div>
    </footer>
  );
};
