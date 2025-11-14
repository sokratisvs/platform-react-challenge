import type { CatImage } from '@cats/cats.types';
import {
  API_BASE_URL,
  defaultHeaders,
  RESULTS_PER_PAGE,
} from '@shared/constants';

export async function fetchRandomCats(
  page: number,
  limit = RESULTS_PER_PAGE
): Promise<CatImage[]> {
  const res = await fetch(
    `${API_BASE_URL}/images/search?limit=${limit}&page=${page}&has_breeds=1`,
    {
      headers: defaultHeaders,
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Failed to fetch random cats:  ${errorData.message}`);
  }
  return res.json();
}

export async function fetchCatImageById(imageId: string): Promise<CatImage> {
  const res = await fetch(`${API_BASE_URL}/images/${imageId}`, {
    headers: defaultHeaders,
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Failed to fetch cat image by id: ${errorData.message}`);
  }
  return res.json();
}
