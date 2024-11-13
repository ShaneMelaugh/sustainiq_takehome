export interface Card {
  title: string;
  desc: string;
}

export interface TableData {
  id: number;
  location: string;
  deliveryDate: string;
  name: string;
  company: string;
  distance: number;
  kgCO2e: number;
  tCO2e: number;
}

export interface FormData {
  name: string;
  company: string;
  deliveryDate: Date | null;
  reason: string;
  distanceTravelled: string;
  notes?: string;
  file?: FileList;
}

export interface DropdownOption {
  value: string;
  label: string;
}