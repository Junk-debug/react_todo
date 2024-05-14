import { useState } from "react";
import { TODOItemType } from "../todo";
import CloseIcon from "../../public/icons/close.svg?react";
import EditIcon from "../../public/icons/edit.svg?react";
import IconButton from "./buttons/IconButton";
import CheckBox from "./buttons/CheckBox";

interface TODOItemProps {
  item: TODOItemType;
}

// TODO add modal window component
// TODO add logic of adding new todo

const TODOItem: React.FC<TODOItemProps> = ({ item }) => {
  const [checked, setChecked] = useState<boolean>(item.checked);
  return (
    <>
      <div className="group flex min-h-[40px] h-fit border rounded-md justify-between items-center px-2">
        <div className="flex items-baseline gap-2">
          <CheckBox
            checked={checked}
            onClick={() => setChecked((prev) => !prev)}
          />
          <span className={checked ? "line-through opacity-50" : ""}>
            {item.name}
          </span>
        </div>
        <div className="flex gap-[5px] invisible group-hover:visible">
          <IconButton
            className="w-[18px] opacity-50 hover:opacity-100"
            icon={<EditIcon className="w-full" />}
            onClick={() => console.log("Кнопка нажата")}
          />
          <IconButton
            className="w-[15px] opacity-50 hover:opacity-100"
            icon={<CloseIcon className="w-full" />}
            onClick={() => console.log("Кнопка нажата")}
          />
        </div>
      </div>
    </>
  );
};

export default TODOItem;
