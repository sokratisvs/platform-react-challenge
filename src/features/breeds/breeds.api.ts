import type { CatBreedSummary, BreedImage } from '@breeds/breeds.types';
import {
  API_BASE_URL,
  defaultHeaders,
  RESULTS_PER_PAGE,
} from '@shared/constants';

export async function fetchRandomBreeds(
  page: number,
  limit = RESULTS_PER_PAGE
): Promise<CatBreedSummary[]> {
  const res = await fetch(
    `${API_BASE_URL}/breeds?limit=${limit}&page=${page}`,
    {
      headers: defaultHeaders,
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Failed to fetch random breeds: ${errorData.message}`);
  }
  return res.json();
}

export async function fetchBreedImagesById(
  breedId: string,
  limit = 4
): Promise<BreedImage[]> {
  const res = await fetch(
    `${API_BASE_URL}/images/search?breed_ids=${breedId}&limit=${limit}`
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Failed to fetch breed images: ${errorData.message}`);
  }
  return res.json();
}
