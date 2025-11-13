import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchRandomCats } from '../cats.api';
import type { CatImage } from '../cats.types';
import { RESULTS_PER_PAGE } from '@/shared/constants';

export function useRandomCats() {
  return useInfiniteQuery<CatImage[]>({
    queryKey: ['randomCats'],
    queryFn: ({ pageParam }) => fetchRandomCats(pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < RESULTS_PER_PAGE) return null;
      return allPages.length;
    },
  });
}
