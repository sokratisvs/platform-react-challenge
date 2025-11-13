import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavourite } from '../favourites.api';
import { favouritesKey } from './useFavourites';
import type { Favourite } from '../favourites.types';
import { useNotification } from '@/shared/utils/useNotification';

export function useAddFavourite() {
  const queryClient = useQueryClient();
  const { error: notifyError } = useNotification();

  return useMutation({
    mutationFn: (imageId: string) => addFavourite(imageId),
    onSuccess: (newFav: Favourite) => {
      queryClient.setQueryData<Favourite[]>(favouritesKey, (old) =>
        old ? [...old, newFav] : [newFav]
      );
    },
    onMutate: async (_imageId: string) => {
      // Cancel any outgoing refetches to not overwrite optimistic update
      await queryClient.cancelQueries({ queryKey: favouritesKey });

      const previousFavouritesList =
        queryClient.getQueryData<Favourite[]>(favouritesKey);

      const optimisticFavourite: Favourite = {
        id: Date.now(),
        user_id: 'optimistic-user',
        image_id: _imageId,
        created_at: new Date().toISOString(),
        image: {
          id: _imageId,
          width: 0,
          height: 0,
          url: '',
        },
      };

      queryClient.setQueryData<Favourite[]>(favouritesKey, (old) =>
        old ? [...old, optimisticFavourite] : [optimisticFavourite]
      );

      return {
        previousFavouritesList,
        optimisticFavourite,
      };
    },
    onError: (error: Error, _imageId, context) => {
      queryClient.setQueryData<Favourite[] | undefined>(
        favouritesKey,
        context?.previousFavouritesList
      );
      notifyError(error.message || 'Failed to add favourite');
    },
  });
}
