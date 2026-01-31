import { Official } from '@/types/official';

// Mock data - in production, this would come from Google Civic API or similar
export const getMockOfficials = (address: string): Official[] => {
  // Simulate different results based on state in address
  const isTexas = address.toLowerCase().includes('tx') || address.toLowerCase().includes('texas');
  const isCalifornia = address.toLowerCase().includes('ca') || address.toLowerCase().includes('california');
  const isNewYork = address.toLowerCase().includes('ny') || address.toLowerCase().includes('new york');

  const baseOfficials: Official[] = [
    {
      id: '1',
      name: 'Current President',
      office: 'President of the United States',
      level: 'Federal',
      party: 'Democrat',
      since: '2021',
      nextElection: '2028',
    },
    {
      id: '2',
      name: 'Current Vice President',
      office: 'Vice President of the United States',
      level: 'Federal',
      party: 'Democrat',
      since: '2021',
      nextElection: '2028',
    },
  ];

  if (isTexas) {
    return [
      ...baseOfficials,
      {
        id: '3',
        name: 'John Cornyn',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Republican',
        since: '2002',
        nextElection: '2026',
      },
      {
        id: '4',
        name: 'Ted Cruz',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Republican',
        since: '2013',
        nextElection: '2030',
      },
      {
        id: '5',
        name: 'Greg Abbott',
        office: 'Governor of Texas',
        level: 'State',
        party: 'Republican',
        since: '2015',
        nextElection: '2026',
      },
      {
        id: '6',
        name: 'Dan Patrick',
        office: 'Lieutenant Governor of Texas',
        level: 'State',
        party: 'Republican',
        since: '2015',
        nextElection: '2026',
      },
    ];
  }

  if (isCalifornia) {
    return [
      ...baseOfficials,
      {
        id: '3',
        name: 'Alex Padilla',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Democrat',
        since: '2021',
        nextElection: '2028',
      },
      {
        id: '4',
        name: 'Adam Schiff',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Democrat',
        since: '2024',
        nextElection: '2030',
      },
      {
        id: '5',
        name: 'Gavin Newsom',
        office: 'Governor of California',
        level: 'State',
        party: 'Democrat',
        since: '2019',
        nextElection: '2026',
      },
    ];
  }

  if (isNewYork) {
    return [
      ...baseOfficials,
      {
        id: '3',
        name: 'Chuck Schumer',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Democrat',
        since: '1999',
        nextElection: '2028',
      },
      {
        id: '4',
        name: 'Kirsten Gillibrand',
        office: 'U.S. Senator',
        level: 'Federal',
        party: 'Democrat',
        since: '2009',
        nextElection: '2030',
      },
      {
        id: '5',
        name: 'Kathy Hochul',
        office: 'Governor of New York',
        level: 'State',
        party: 'Democrat',
        since: '2021',
        nextElection: '2026',
      },
    ];
  }

  // Default - generic officials
  return [
    ...baseOfficials,
    {
      id: '3',
      name: 'Your U.S. Senator',
      office: 'U.S. Senator',
      level: 'Federal',
      party: 'Republican',
      since: '2018',
      nextElection: '2024',
    },
    {
      id: '4',
      name: 'Your U.S. Senator',
      office: 'U.S. Senator',
      level: 'Federal',
      party: 'Democrat',
      since: '2020',
      nextElection: '2026',
    },
    {
      id: '5',
      name: 'Your Governor',
      office: 'Governor',
      level: 'State',
      party: 'Republican',
      since: '2022',
      nextElection: '2026',
    },
    {
      id: '6',
      name: 'Your Representative',
      office: 'U.S. Representative',
      level: 'Federal',
      party: 'Democrat',
      since: '2020',
      nextElection: '2024',
      district: 'District 5',
    },
  ];
};
