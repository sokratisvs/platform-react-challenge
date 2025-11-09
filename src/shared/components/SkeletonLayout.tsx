import Skeleton from './Skeleton';

export interface SkeletonLayoutProps {
  count?: number;
}

const SkeletonLayout = ({ count = 10 }: SkeletonLayoutProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          size="lg"
          className="w-full h-48 bg-gray-700 rounded-lg shadow-md"
        />
      ))}
    </>
  );
};

export default SkeletonLayout;
