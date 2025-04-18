/* eslint-disable react/no-array-index-key */
import CardSkeleton from './CardSkeleton';

function ListSkeleton({ num, size }) {
  return (
    <div className={`h-full ${size}`}>
      {Array.from({ length: num }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default ListSkeleton;
