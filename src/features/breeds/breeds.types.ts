export interface CatBreedSummary {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  life_span?: string;
  wikipedia_url?: string;
  image: BreedImage;
}

export interface BreedImage {
  id: string;
  width: number;
  height: number;
  url: string;
}
