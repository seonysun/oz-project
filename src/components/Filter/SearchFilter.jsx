import { useState } from 'react';
import { ExpandLess, ExpandMore } from '../../assets/icons';
import Checkboxes from '../Checkbox/Checkboxes';
import SearchInput from '../Input/SearchInput';

function SearchFilter({ filterItem, firstFilter }) {
  const [isOpen, setIsOpen] = useState(firstFilter);
  const [checkedList, setCheckedList] = useState([]);

  const updateCheckedList = (name) => {
    setCheckedList((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  return (
    <div className="flex w-[256px] flex-col px-2">
      <div className="mb-3 flex justify-between border-b py-3">
        <span className="font-medium">{filterItem.title}</span>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Filter"
        >
          <img src={isOpen ? ExpandLess : ExpandMore} alt="arrow" />
        </button>
      </div>
      {isOpen && (
        <>
          <SearchInput size="h-[40px] mb-2" />
          <Checkboxes
            items={filterItem.items}
            checkedList={checkedList}
            updateCheckedList={updateCheckedList}
          />
        </>
      )}
    </div>
  );
}

export default SearchFilter;
