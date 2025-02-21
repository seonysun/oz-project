import Button from '../../components/Button/Button';
import DropdownInput from '../../components/Input/DropdownInput';
import FilterInput from '../../components/Input/FilterInput';

function ItemListPage() {
  return (
    <div className="m-4 flex-col items-center space-y-4">
      <Button color="black" size="large" icon={false} text="Buy Now" />
      <div className="flex gap-4">
        <FilterInput />
        <DropdownInput />
      </div>
    </div>
  );
}

export default ItemListPage;
