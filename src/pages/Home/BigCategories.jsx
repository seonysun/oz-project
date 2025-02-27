/* eslint-disable tailwindcss/no-custom-classname */
import Button from '../../components/Button/Button';
import useData from '../../hooks/useData';

const COLOR_LIST = [
  'bg-[#FFFFFF]',
  'bg-[#F9F9F9]',
  'bg-[#EAEAEA]',
  'bg-[#2C2C2C]',
];

function BigCategory({ idx, color, src, name }) {
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

function BigCategories() {
  const { data = [] } = useData('categories/1/products', {
    limit: 4,
    offset: 0,
  });
  const updatedList = (data ?? []).map((item, idx) => ({
    ...item,
    color: COLOR_LIST[idx],
  }));

  return (
    <section className="hidden md:block">
      <div className="flex">
        {updatedList.map((item, idx) => (
          <BigCategory
            key={item.id}
            idx={idx}
            color={item.color}
            src={item.images[1]}
            name={item.category.name}
          />
        ))}
      </div>
    </section>
  );
}

export default BigCategories;
