import { useRef, useState } from "react";
import { TODOItemType } from "../todo";
import CloseIcon from "../../public/icons/close.svg?react";
import EditIcon from "../../public/icons/edit.svg?react";
import IconButton from "./buttons/IconButton";
import CheckBox from "./buttons/CheckBox";

interface TODOItemProps {
  item: TODOItemType;
  onEditClick: () => void;
}

// TODO add modal window component

// FIXME refactor code probably without using conentEditable and refactor logic

const TODOItem: React.FC<TODOItemProps> = ({ item, onEditClick }) => {
  const [checked, setChecked] = useState<boolean>(item.checked);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(item.name);
  const nameRef = useRef<HTMLSpanElement>(null);

  const onDoubleClick = () => {
    setIsEditable(true);
    if (nameRef.current) {
      nameRef.current.focus();

      const content = nameRef.current?.textContent;
      const range = document.createRange();

      if (content) {
        range.setStart(nameRef.current.childNodes[0], content.length);
        range.setEnd(nameRef.current.childNodes[0], content.length);
      }

      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
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
          <span
            onChange={(e) => {
              if (e.currentTarget.textContent !== null) {
                setValue(e.currentTarget.textContent);
              }
            }}
            onBlur={() => setIsEditable(false)}
            ref={nameRef}
            contentEditable={isEditable}
            className={`${
              checked ? "line-through opacity-50" : ""
            } focus-visible:outline-none`}
          >
            {value}
          </span>
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
