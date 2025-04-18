/* eslint-disable tailwindcss/no-custom-classname */
import defaultImg from '../../assets/images/defaultImg.png';
import Button from '../../components/Button/Button';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import useFetch from '../../hooks/useFetch';
import useLazyImage from '../../hooks/useLazyImage';

const COLOR_LIST = [
  'bg-[#FFFFFF]',
  'bg-[#F9F9F9]',
  'bg-[#EAEAEA]',
  'bg-[#2C2C2C]',
];

function BigCategories() {
  const { data } = useFetch('categories/1/products', {
    limit: MAX_LIST_LENGTH.HOME.BIG_CATEGORY,
    offset: 0,
  });
  const updatedList = data?.map((item, idx) => ({
    ...item,
    color: COLOR_LIST[idx],
  }));

  return (
    <section className="hidden md:block">
      <div className="flex">
        {updatedList.map((item, idx) => (
          <BigCategory key={item.id} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function BigCategory({ idx, item }) {
  const textColor = idx % 4 === 3 ? 'white' : 'black';

  const imgRef = useLazyImage();

  return (
    <div className={`w-1/4 ${item.color} flex flex-col gap-4 px-8 py-14`}>
      <img
        ref={imgRef}
        src={defaultImg}
        data-src={item.images[1]}
        alt={item.category.name}
        onError={(e) => {
          e.currentTarget.src = defaultImg;
        }}
      />
      <p className={`text-${textColor} text-3xl font-normal`}>
        {item.category.name}
      </p>
      <Button
        color={`${textColor}Text`}
        text="Shop Now"
        customSize="w-2/3 h-[56px] rounded-lg"
      />
    </div>
  );
}

export default BigCategories;
