/* eslint-disable react/no-array-index-key */
function CardSkeleton() {
  return (
    <div className="flex w-full animate-spark flex-col gap-3">
      <div className="aspect-square rounded-xl bg-gray-default" />
      <p className="h-8 rounded-lg bg-gray-default" />
      <p className="h-8 rounded-lg bg-gray-default" />
    </div>
  );
}

export default CardSkeleton;
