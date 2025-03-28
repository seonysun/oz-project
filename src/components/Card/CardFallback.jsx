/* eslint-disable react/no-array-index-key */
function CardFallback({ num }) {
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-4">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="mb-4 flex w-[47%] animate-spark flex-col gap-4 px-2 lg:w-[23%]"
        >
          <div className="aspect-square rounded-xl bg-gray-default" />
          <p className="h-8 rounded-lg bg-gray-default" />
          <p className="h-8 rounded-lg bg-gray-default" />
        </section>
      ))}
    </div>
  );
}

export default CardFallback;
