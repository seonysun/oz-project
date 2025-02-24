import { DoneChecked, DoneUnchecked } from '../../assets/icons';

function Checkbox({ item, checked, onChange }) {
  return (
    <label htmlFor={item.id} className="flex cursor-pointer gap-1">
      <input
        type="checkbox"
        id={item.id}
        value={item.name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <img src={checked ? DoneChecked : DoneUnchecked} alt="checkBtn" />
      {item.name}
    </label>
  );
}

export default Checkbox;
