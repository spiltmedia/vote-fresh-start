export type Party = 'Democrat' | 'Republican' | 'Independent';

export type OfficeLevel = 'Federal' | 'State' | 'Local';

export interface Official {
  id: string;
  name: string;
  office: string;
  level: OfficeLevel;
  party: Party;
  since: string;
  nextElection: string;
  photoUrl?: string;
  district?: string;
}

export interface AddressLookupResult {
  address: string;
  officials: Official[];
}
