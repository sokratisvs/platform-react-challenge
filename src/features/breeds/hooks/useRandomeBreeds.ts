import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchRandomBreeds } from '../breeds.api';
import type { CatBreedSummary } from '@breeds/breeds.types';
import { RESULTS_PER_PAGE } from '@/shared/constants';

export function useRandomBreeds() {
  return useInfiniteQuery<CatBreedSummary[]>({
    queryKey: ['randomBreeds'],
    queryFn: ({ pageParam }) => fetchRandomBreeds(pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < RESULTS_PER_PAGE) return null;
      return allPages.length;
    },
  });
}
