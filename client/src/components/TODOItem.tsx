import { useRef, useState } from "react";
import { TODOItemType } from "../todo";
import CloseIcon from "../../public/icons/close.svg?react";
import EditIcon from "../../public/icons/edit.svg?react";
import IconButton from "./buttons/IconButton";
import CheckBox from "./buttons/CheckBox";
import AdjustableInput from "./AdjustableInput";

interface TODOItemProps {
  item: TODOItemType;
  onEditClick: () => void;
}

const TODOItem: React.FC<TODOItemProps> = ({ item, onEditClick }) => {
  const [checked, setChecked] = useState<boolean>(item.checked);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(item.name);
  const inputRef = useRef<HTMLInputElement>(null);

  const coursorToEnd = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  };

  const onDoubleClick = () => {
    setIsEditable(true);
    coursorToEnd();
  };

  return (
    <>
      <div
        onDoubleClick={onDoubleClick}
        className="group flex min-h-[40px] h-fit border rounded-md justify-between items-center px-2"
      >
        <div className="flex items-baseline gap-2">
          <CheckBox
            checked={checked}
            onClick={() => setChecked((prev) => !prev)}
          />
          <AdjustableInput
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setIsEditable(false)}
            readOnly={!isEditable}
            className={`${
              checked ? "line-through opacity-50" : ""
            } focus-visible:outline-none`}
          />
        </div>
        <div className="flex gap-[5px] invisible group-hover:visible">
          <IconButton
            className="w-[18px] opacity-50 hover:opacity-100"
            icon={<EditIcon className="w-full" />}
            onClick={onEditClick}
          />
          <IconButton
            className="w-[15px] opacity-50 hover:opacity-100"
            icon={<CloseIcon className="w-full" />}
            onClick={() => console.log("delete")}
          />
        </div>
      </div>
    </>
  );
};

export default TODOItem;
