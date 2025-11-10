import { useQuery } from '@tanstack/react-query';
import { fetchBreedImagesById } from '../breeds.api';
import type { BreedImage } from '@breeds/breeds.types';

export function useBreedImages(breedId: string) {
  return useQuery<BreedImage[]>({
    queryKey: ['breedImages', breedId],
    queryFn: () => fetchBreedImagesById(breedId),
  });
}
