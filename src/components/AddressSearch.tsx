import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AddressSearchProps {
  onSearch: (address: string) => void;
  isLoading?: boolean;
}

export const AddressSearch = ({ onSearch, isLoading }: AddressSearchProps) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <section id="search" className="py-20 px-4 bg-background">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            FIND YOUR INCUMBENTS
          </h2>
          <p className="text-muted-foreground text-lg">
            Enter your full address to see who's currently holding office in your area
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter your full address (e.g., 123 Main St, Austin, TX 78701)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="pl-12 h-14 text-base bg-card border-2 border-border focus:border-primary transition-colors"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="xl" 
              disabled={isLoading || !address.trim()}
              className="sm:w-auto w-full"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Search
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          We use your address to find officials at federal, state, and local levels
        </p>
      </div>
    </section>
  );
};
