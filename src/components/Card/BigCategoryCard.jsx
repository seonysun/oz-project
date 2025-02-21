/* eslint-disable tailwindcss/no-custom-classname */
import Button from '../Button/Button';

function BigCategoryCard({ idx, color, src, name }) {
  const textColor = idx % 4 === 3 ? 'white' : 'black';

  return (
    <div className={`w-1/4 ${color} flex flex-col gap-4 px-8 py-14`}>
      <img src={src} alt={name} />
      <p className={`text-${textColor} text-3xl font-normal`}>{name}</p>
      <Button
        color={`${textColor}Text`}
        text="Shop Now"
        customSize="w-2/3 h-[56px] rounded-lg"
      />
    </div>
  );
}

export default BigCategoryCard;
