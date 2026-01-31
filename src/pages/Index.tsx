import { useState, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { AddressSearch } from '@/components/AddressSearch';
import { OfficialsList } from '@/components/OfficialsList';
import { Footer } from '@/components/Footer';
import { Official } from '@/types/official';
import { getMockOfficials } from '@/data/mockOfficials';

const Index = () => {
  const [officials, setOfficials] = useState<Official[]>([]);
  const [searchedAddress, setSearchedAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const results = getMockOfficials(address);
    setOfficials(results);
    setSearchedAddress(address);
    setHasSearched(true);
    setIsLoading(false);
  };

  const handleClear = () => {
    setOfficials([]);
    setSearchedAddress('');
    setHasSearched(false);
    scrollToSearch();
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStarted={scrollToSearch} />
      
      <div ref={searchRef}>
        <AddressSearch onSearch={handleSearch} isLoading={isLoading} />
      </div>

      {hasSearched && (
        <OfficialsList 
          officials={officials} 
          address={searchedAddress}
          onClear={handleClear}
        />
      )}

      <Footer />
    </div>
  );
};

export default Index;
