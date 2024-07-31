export interface OpeningHours {
  [day: string]: string[];
}

export interface Business {
  id: string;
  name: string;
  address: string;
  websites: string[];
  phoneNumbers: string[];
  openingHours: OpeningHours;
}
