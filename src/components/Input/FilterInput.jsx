import { FilterIcon } from '../../assets/icons';

function FilterInput() {
  return (
    <div className="flex h-[40px] w-[230px] items-center justify-between rounded-lg border border-[#d4d4d4] bg-white px-4 py-2">
      <span>filter</span>
      <img src={FilterIcon} alt="filterIcon" />
    </div>
  );
}

export default FilterInput;
