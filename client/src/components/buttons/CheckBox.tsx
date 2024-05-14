import checkedIconPath from "/icons/checkedSquare.svg";
import notCheckedIconPath from "/icons/notCheckedSquare.svg";

interface CheckBoxProps {
  checked: boolean;
  onClick: () => void;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <img
        className="w-full"
        src={checked ? checkedIconPath : notCheckedIconPath}
        alt=""
      />
    </button>
  );
};

export default CheckBox;
