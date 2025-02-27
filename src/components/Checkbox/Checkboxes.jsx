import { DoneChecked, DoneUnchecked } from '../../assets/icons';

function Checkbox({ item, checked, onChange }) {
  return (
    <label htmlFor={item.id} className="flex cursor-pointer gap-1 text-sm">
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

function Checkboxes({ items, checkedList, updateCheckedList }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="mb-1">
          <Checkbox
            item={item}
            checked={checkedList.includes(item.name)}
            onChange={() => updateCheckedList(item.name)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Checkboxes;
