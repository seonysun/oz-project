function CategoryCard({ card }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EDEDED] py-6">
      {card.src && <img src={card.src} alt={card.name} className="size-12" />}
      <span className="mt-1 font-medium">{card.name}</span>
    </div>
  );
}

export default CategoryCard;
