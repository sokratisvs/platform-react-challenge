import { useLocation, useNavigate } from 'react-router-dom';
import {
  CatGridSkeleton,
  ActionButton,
  CatGrid,
  Card,
  ErrorFallback,
} from '@shared/components';
import { useRandomCats } from '@cats/hooks/useRandomeCats';
import { Fragment } from 'react';

const CatsPage = () => {
  const {
    data: cats,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRandomCats();

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
    return <ErrorFallback message={error?.message || 'Failed to load cats.'} />;
  }

  return (
    <>
      <CatGrid>
        {cats?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.map((cat) => {
              if (!cat?.url) {
                return null;
              }
              return (
                <Card
                  key={`${pageIndex}-${cat.id}`}
                  catId={cat.id}
                  imageUrl={cat.url}
                  onClick={handleImageCatClick}
                  alt="Cat"
                />
              );
            })}
          </Fragment>
        ))}
      </CatGrid>
      <ActionButton
        onClick={() => fetchNextPage()}
        isLoading={isFetchingNextPage}
        disabled={!hasNextPage}
        label="Load more cats"
      />
    </>
  );
};

export default CatsPage;
