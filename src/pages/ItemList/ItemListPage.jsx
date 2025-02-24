/* eslint-disable react/no-array-index-key */
import SearchFilter from '../../components/Filter/SearchFilter';

function ItemListPage() {
  const filterItemList = [
    {
      title: 'Brand',
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Xiaomi' },
        { id: 3, name: 'Poco' },
      ],
    },
    {
      title: 'Battery capacity',
      items: [{ id: 1, name: 'Apple' }],
    },
    {
      title: 'Screen type',
      items: [{ id: 1, name: 'Apple' }],
    },
  ];

  return (
    <div className="m-4 flex-col items-center space-y-4">
      <div className="flex flex-col gap-2">
        {filterItemList.map((filterItem, idx) => (
          <SearchFilter
            key={filterItem.title}
            filterItem={filterItem}
            firstFilter={idx === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemListPage;
