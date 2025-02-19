import { ChevronDown } from '../../assets/icons/index';

function DropdownInput() {
  return (
    <div className="flex h-[40px] w-[230px] items-center justify-between rounded-lg border border-[#d4d4d4] bg-white px-4 py-2">
      <span>DropdownInput</span>
      <img src={ChevronDown} alt="arrowdown" />
    </div>
  );
}

export default DropdownInput;
