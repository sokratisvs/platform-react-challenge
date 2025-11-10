import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useRandomBreeds } from '@breeds/hooks/useRandomeBreeds';
import { SkeletonLayout, Loader } from '@shared/components';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';

const BreedsPage = () => {
  const {
    data: breeds,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRandomBreeds();

  const navigate = useNavigate();
  const location = useLocation();

  const handleImageBreedClick = (id: string) => {
    navigate(`/breeds/${id}`, { state: { backgroundLocation: location } });
  };

  const flattenedBreeds = (breeds?.pages ?? []).flat();

  if (isLoading)
    return (
      <>
        <SkeletonLayout />
      </>
    );

  if (isError)
    return (
      <div className="col-span-full text-center text-red-500">
        Failed to load images
      </div>
    );

  return (
    <ErrorBoundary fallback={<div>Failed to load cat content.</div>}>
      {flattenedBreeds.map((breed) => (
        <div
          key={breed.id}
          onClick={() => handleImageBreedClick(breed.id)}
          className={clsx(
            'cursor-pointer',
            'rounded-lg',
            'overflow-hidden',
            'bg-gray-800',
            'hover:bg-gray-700',
            'transition',
            'shadow-md'
          )}
        >
          <img
            src={breed.image.url}
            alt="Cat"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      ))}
      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={clsx(
            'col-span-full',
            'mt-4',
            'px-4 py-2',
            'rounded-lg',
            'bg-indigo-600',
            'hover:bg-indigo-500',
            'disabled:bg-indigo-400',
            'disabled:cursor-progress',
            'text-white',
            'font-medium',
            'transition'
          )}
        >
          {isFetchingNextPage ? <Loader /> : 'Load more cats'}
        </button>
      )}
    </ErrorBoundary>
  );
};

export default BreedsPage;
