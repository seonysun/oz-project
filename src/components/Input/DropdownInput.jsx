import { useState } from 'react';
import { ChevronDown } from '../../assets/icons';

function DropdownInput({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(text);

  const dropList = ['1번', '2번', '3번'];

  const dropClick = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-[200px] flex-col text-sm">
      <div className="flex h-[40px] justify-between rounded-lg border border-[#d4d4d4] p-2">
        <span>{selected}</span>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Filter"
        >
          <img src={ChevronDown} alt="arrowdown" />
        </button>
      </div>
      {isOpen && (
        <ul className="absolute left-0 top-full z-10 flex w-full flex-col rounded-lg border bg-white">
          {dropList.map((list) => (
            <button type="button" key={list} onClick={() => dropClick(list)}>
              <li className="p-1 hover:bg-slate-100">{list}</li>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownInput;
