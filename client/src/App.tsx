import "./App.css";
import TODOItem from "./components/TODOItem";
import { todoItems } from "./todo";

function App() {
  return (
    <>
      <div className="flex gap-4 flex-col px-7 py-7 min-w-[300px] max-w-[400px] w-[40vw] min-h-96 h-[50vh] rounded-xl border bg-white shadow">
        <div>
          <h1 className="text-4xl">Category</h1>
        </div>
        <ul className="flex flex-col gap-2 flex-grow overflow-auto">
          {todoItems.map((item) => (
            <TODOItem key={item.id} item={item} />
          ))}
        </ul>
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-lg focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Add new"
          type="text"
        />
      </div>
    </>
  );
}

export default App;
