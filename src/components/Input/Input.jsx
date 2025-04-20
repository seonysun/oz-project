function Input({ message, value, onChange }) {
  return (
    <input
      className="w-full bg-transparent outline-none"
      placeholder={message}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
