function CategoryCard({ card }) {
  return (
    <div className="flex h-[128px] w-[160px] flex-col items-center justify-center rounded-2xl bg-[#EDEDED]">
      {card.src && <img src={card.src} alt={card.name} className="size-12" />}
      <span className="mt-1 font-medium">{card.name}</span>
    </div>
  );
}

export default CategoryCard;
