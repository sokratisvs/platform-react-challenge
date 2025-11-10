import type { CatBreedSummary, BreedImage } from '@breeds/breeds.types';
import { API_BASE_URL, API_KEY } from '@shared/constants';

export async function fetchRandomBreeds(
  page: number,
  limit = 10
): Promise<CatBreedSummary[]> {
  const res = await fetch(
    `${API_BASE_URL}/breeds?limit=${limit}&page=${page}&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error('Failed to fetch random breeds');
  return res.json();
}

export async function fetchBreedImagesById(
  breedId: string,
  limit = 4
): Promise<BreedImage[]> {
  const res = await fetch(
    `${API_BASE_URL}/images/search?breed_ids=${breedId}&limit=${limit}`
  );
  if (!res.ok) throw new Error('Failed to fetch breed images');
  return res.json();
}
