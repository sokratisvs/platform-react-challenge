import {
  CatGridSkeleton,
  CatGrid,
  Card,
  ErrorFallback,
} from '@shared/components';
import { useFavourites } from '@favourites/hooks/useFavourites';
import { useModalNavigation } from '@shared/utils/useModalNavigation';
import { toggleSelection } from '@favourites/utils';
import { useState } from 'react';
import RemoveFavouritesButton from '@/features/favourites/components/RemoveFavouritesButton';

const FavouritesPage = () => {
  const { data: favourites, isLoading, isError, error } = useFavourites();
  const { openModal } = useModalNavigation();

  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleCardClick = (catId: string, favouriteId: number) => {
    if (!isSelectionMode) {
      openModal('cats', catId);
      return;
    }

    toggleSelection(setSelectedIds, favouriteId);
  };

  if (isLoading)
    return (
      <>
        <CatGridSkeleton />
      </>
    );

  if (isError) {
    return (
      <ErrorFallback message={error?.message || 'Failed to load favourites'} />
    );
  }

  return (
    <>
      <CatGrid>
        {favourites?.map((favourite) => {
          if (!favourite?.image?.url) {
            return null;
          }
          const imageId = favourite.image.id;
          const favouriteId = favourite.id;
          const isSelected = selectedIds.includes(favouriteId);

          return (
            <Card
              key={`${favourite.id}`}
              catId={imageId}
              imageUrl={favourite.image.url}
              onClick={() => handleCardClick(imageId, favouriteId)}
              alt="Cat"
              isSelectable={isSelectionMode}
              isSelected={isSelected}
            />
          );
        })}
      </CatGrid>
      <RemoveFavouritesButton
        isSelectionMode={isSelectionMode}
        selectedIds={selectedIds}
        setIsSelectionMode={setIsSelectionMode}
        setSelectedIds={setSelectedIds}
        disabled={favourites?.length === 0}
      />
    </>
  );
};

export default FavouritesPage;
