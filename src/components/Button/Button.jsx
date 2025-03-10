import { Arrowdown, ArrowdownWhite } from '../../assets/icons/index';

function Button({
  color = 'black',
  size = 'high',
  icon = false,
  text = 'Button',
  customSize = '',
  onClick,
}) {
  const BTN_COLOR = {
    black: 'bg-black text-white',
    whiteText: 'border border-white text-white',
    blackText: 'border border-black text-black',
  };
  const BTN_SIZE = {
    high: icon
      ? 'h-[56px] w-[182px] rounded-md'
      : 'h-[56px] w-[150px] rounded-md',
    low: icon
      ? 'h-[48px] w-[178px] rounded-lg'
      : 'h-[48px] w-[162px] rounded-lg',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-around ${BTN_COLOR[color]} ${customSize || BTN_SIZE[size]}`}
    >
      {text}
      {icon && (
        <img
          src={color === 'blackText' ? Arrowdown : ArrowdownWhite}
          alt="arrowdown"
          className="size-6"
        />
      )}
    </button>
  );
}

export default Button;
