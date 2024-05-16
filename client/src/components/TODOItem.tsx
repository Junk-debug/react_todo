import { useEffect, useRef, useState } from "react";
import { TODOItemType } from "../todo";
import CloseIcon from "../../public/icons/close.svg?react";
import EditIcon from "../../public/icons/edit.svg?react";
import IconButton from "./buttons/IconButton";
import CheckBox from "./buttons/CheckBox";

interface TODOItemProps {
  item: TODOItemType;
  onEditClick: () => void;
}

const TODOItem: React.FC<TODOItemProps> = ({ item, onEditClick }) => {
  const [checked, setChecked] = useState<boolean>(item.checked);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(item.name);
  const spanRef = useRef<HTMLSpanElement>(null);

  const focusAndCoursorToEnd = () => {
    if (spanRef.current) {
      spanRef.current.focus();

      const content = spanRef.current?.textContent;
      const range = document.createRange();

      if (content) {
        range.setStart(spanRef.current.childNodes[0], content.length);
        range.setEnd(spanRef.current.childNodes[0], content.length);
      }

      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  const onDoubleClick = () => {
    setIsEditable(true);
  };

  useEffect(() => {
    if (isEditable) {
      focusAndCoursorToEnd();
    }
  }, [isEditable]);

  return (
    <>
      <div
        onDoubleClick={onDoubleClick}
        className="group flex items-baseline py-[6px] border rounded-md justify-between px-2 select-none"
      >
        <div className="flex items-baseline gap-2">
          <CheckBox
            className="shrink-0"
            checked={checked}
            onClick={() => setChecked((prev) => !prev)}
          />

          <span
            ref={spanRef}
            onChange={() => {
              if (spanRef.current?.textContent) {
                setValue(spanRef.current.textContent);
              }
            }}
            onBlur={() => setIsEditable(false)}
            contentEditable={isEditable ? "plaintext-only" : false}
            suppressContentEditableWarning={true}
            style={{ wordBreak: "break-word" }}
            className={`${isEditable ? "text-gray-500" : ""} ${
              checked ? "line-through opacity-50" : ""
            } focus-visible:outline-none shrink`}
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
