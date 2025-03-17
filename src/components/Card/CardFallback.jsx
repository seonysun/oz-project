/* eslint-disable react/no-array-index-key */
function CardFallback({ num }) {
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-4 p-4">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="animate-spark mb-4 flex flex-col gap-6 px-6"
        >
          <div className="bg-gray-default size-56 rounded-xl" />
          <p className="bg-gray-default h-8 rounded-lg" />
          <p className="bg-gray-default h-8 rounded-lg" />
        </section>
      ))}
    </div>
  );
}

export default CardFallback;
