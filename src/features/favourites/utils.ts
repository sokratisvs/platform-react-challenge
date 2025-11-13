import type { Dispatch, SetStateAction } from 'react';

export const enableSelectionMode = (
  setSelectedIds: Dispatch<SetStateAction<number[]>>,
  setIsSelectionMode: Dispatch<SetStateAction<boolean>>
) => {
  setIsSelectionMode(true);
  setSelectedIds([]);
};

export const clearSelection = (
  setSelectedIds: Dispatch<SetStateAction<number[]>>,
  setIsSelectionMode: Dispatch<SetStateAction<boolean>>
) => {
  setSelectedIds([]);
  setIsSelectionMode(false);
};

export const toggleSelection = (
  setSelectedIds: Dispatch<SetStateAction<number[]>>,
  id: number
) => {
  setSelectedIds((prev) =>
    prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
  );
};
