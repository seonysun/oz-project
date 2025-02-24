import { Arrowdown, ArrowdownWhite } from '../../assets/icons/index';

function Button({
  color = 'black',
  size = 'high',
  icon = false,
  text = 'Button',
  customSize = '',
}) {
  const colorList = {
    black: 'bg-black text-white',
    whiteText: 'border border-white text-white',
    blackText: 'border border-black text-black',
  };
  const sizeList = {
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
      className={`flex items-center justify-around ${colorList[color]} ${customSize || sizeList[size]}`}
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
