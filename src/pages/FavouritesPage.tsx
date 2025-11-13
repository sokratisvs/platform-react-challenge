import { useLocation, useNavigate } from 'react-router-dom';
import {
  CatGridSkeleton,
  CatGrid,
  Card,
  ErrorFallback,
} from '@shared/components';
import { useFavourites } from '@favourites/hooks/useFavourites';

const FavouritesPage = () => {
  const { data: favourites, isLoading, isError, error } = useFavourites();

  const navigate = useNavigate();
  const location = useLocation();

  const handleImageCatClick = (id: string) => {
    navigate(`/cats/${id}`, {
      state: { backgroundLocation: location.pathname },
    });
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
        {favourites?.map((favourite, index) => {
          if (!favourite?.image?.url) {
            return null;
          }
          return (
            <Card
              key={`${index}-${favourite.id}`}
              catId={favourite.image.id}
              imageUrl={favourite.image.url}
              onClick={handleImageCatClick}
              alt="Cat"
            />
          );
        })}
      </CatGrid>
    </>
  );
};

export default FavouritesPage;
