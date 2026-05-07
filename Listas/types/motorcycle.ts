export type Motorcycle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
};

export type SectionData = {
  /* title: Motorcycle['category']; */
  title: string;
  data: Motorcycle[];
};
