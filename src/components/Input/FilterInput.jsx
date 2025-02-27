import { useNavigate, useParams } from 'react-router-dom';
import { FilterIcon } from '../../assets/icons';

function FilterInput({ size }) {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        navigate(`/list/${category}/filter`);
      }}
      className={`flex h-[40px] ${size} justify-between rounded-lg border border-[#d4d4d4] bg-white px-4 py-2`}
    >
      <span>filters</span>
      <img src={FilterIcon} alt="filterIcon" />
    </button>
  );
}

export default FilterInput;
