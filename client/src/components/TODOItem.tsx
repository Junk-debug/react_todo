import { TODOItemType } from "../todo";

interface TODOItemProps {
  item: TODOItemType;
}

const TODOItem: React.FC<TODOItemProps> = ({ item }) => {
  return (
    <div className="flex justify-between bg-red-400">
      <span>{item.name}</span>
    </div>
  );
};

export default TODOItem;
