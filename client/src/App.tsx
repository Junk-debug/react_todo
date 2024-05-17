import { useEffect, useRef, useState } from "react";
import "./App.css";
import { TODOItemType, todoItems } from "./todo";
import TODOItem from "./components/TODOItem";
import TODOModal from "./components/TODOModal";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<TODOItemType[]>(todoItems);
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowModal, setIsShowModal] = useState<boolean>(true);
  const listRef = useRef<HTMLUListElement>(null);
  const isShouldScroll = useRef<boolean>(false);
  const currTODOId = useRef<string | null>("1");

  const createTODO = (name: string): TODOItemType => {
    return {
      name,
      description: "",
      checked: false,
      creationDate: new Date(),
      id: uuidv4(),
    };
  };

  useEffect(() => {
    if (isShouldScroll.current) {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
      isShouldScroll.current = false;
    }
  }, [todos]);

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      setTodos((prev) => [...prev, createTODO(inputValue)]);
      setInputValue("");
      e.currentTarget.blur();
      isShouldScroll.current = true;
    }
  };

  return (
    <>
      <div className="flex gap-4 flex-col px-7 py-7 min-w-[300px] max-w-[400px] w-[40vw] min-h-96 h-[50vh] rounded-xl border bg-white shadow">
        <div className="flex flex-col gap-1">
          {/* TODO: add custom select dropdown */}
          <h1 className="text-4xl">Category</h1>
          <p className="text-xl text-gray-500">All</p>
        </div>
        <ul
          ref={listRef}
          id="todos-list"
          className="flex flex-col gap-2 flex-grow overflow-y-auto"
        >
          {todos.map((item) => {
            return (
              <TODOItem
                onEditClick={() => {
                  setIsShowModal(true);
                  currTODOId.current = item.id;
                }}
                key={item.id}
                item={item}
              />
            );
          })}
        </ul>
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-lg focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Add new"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyDown={onEnter}
        />
      </div>
      <TODOModal
        todo={todos.find((item) => item.id === currTODOId.current)}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </>
  );
}

export default App;
