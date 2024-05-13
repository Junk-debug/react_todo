import "./App.css";
import TODOItem from "./components/TODOItem";
import { TODOItemType } from "./todo";

function App() {
  const todo: TODOItemType = {
    name: "test",
    description: "test description",
    id: "2323rrwrwr",
    creationDate: new Date(),
    checked: true,
  };

  return (
    <>
      <div className="w-[200px]">
        <TODOItem item={todo} />
      </div>
    </>
  );
}

export default App;
