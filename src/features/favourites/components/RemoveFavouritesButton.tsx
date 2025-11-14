import { ActionButton } from '@shared/components';
import { useRemoveFavourites } from '../hooks/useRemoveFavourites';
import { enableSelectionMode, clearSelection } from '@favourites/utils';
import type { Dispatch, SetStateAction } from 'react';

interface RemoveFavouritesButtonProps {
  isSelectionMode: boolean;
  selectedIds: number[];
  setIsSelectionMode: Dispatch<SetStateAction<boolean>>;
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
  disabled?: boolean;
}

const RemoveFavouritesButton = ({
  isSelectionMode,
  selectedIds,
  setSelectedIds,
  setIsSelectionMode,
  disabled,
}: RemoveFavouritesButtonProps) => {
  const { mutate: deleteFavourites, isPending: isDeleting } =
    useRemoveFavourites();

  const handleClick = () => {
    if (!isSelectionMode) {
      enableSelectionMode(setSelectedIds, setIsSelectionMode);

      return;
    }

    if (selectedIds.length === 0) {
      clearSelection(setSelectedIds, setIsSelectionMode);
      return;
    }

    const numericIds = selectedIds.map((id) => Number(id));
    deleteFavourites(numericIds, {
      onSuccess: () => {
        clearSelection(setSelectedIds, setIsSelectionMode);
      },
    });
  };

  const label = (() => {
    if (!isSelectionMode) return 'Press to enable selection mode to delete';
    if (selectedIds.length === 0) return 'Cancel selection mode';
    return `Delete ${selectedIds.length} selected`;
  })();

  return (
    <ActionButton
      onClick={handleClick}
      isLoading={isDeleting}
      disabled={disabled || isDeleting}
      label={label}
    />
  );
};

export default RemoveFavouritesButton;
