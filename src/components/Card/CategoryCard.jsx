/* eslint-disable react/prop-types */
function CategoryCard({ src, name }) {
  return (
    <div className="flex h-[128px] w-[160px] flex-col items-center justify-center rounded-2xl bg-[#EDEDED]">
      {src && <img src={src} alt={name} className="size-12" />}
      <span className="mt-1 font-medium">{name}</span>
    </div>
  );
}

export default CategoryCard;
