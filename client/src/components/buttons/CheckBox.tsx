import checkedIconPath from "/icons/checkedSquare.svg";
import notCheckedIconPath from "/icons/notCheckedSquare.svg";

interface CheckBoxProps {
  checked: boolean;
  onClick: () => void;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onClick, className }) => {
  return (
    <button
      tabIndex={-1}
      className={`${className ? className : ""} select-none`}
      onClick={onClick}
    >
      <img
        className="w-full"
        src={checked ? checkedIconPath : notCheckedIconPath}
        alt="checkbox"
      />
    </button>
  );
};

export default CheckBox;
