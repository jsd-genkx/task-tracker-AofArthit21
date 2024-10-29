import { useState } from "react";

let Id = 0;

function App() {
  const [tasks, setTask] = useState([]);
  const [data, setData] = useState("");
  return (
    <>
      <div className="flex flex-col items-center ">
        <div>
          <div className="font-bold text-xl">Task Tracker</div>
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="border border-blue-300 rounded-md"
          />
          <button
            onClick={() => {
              setTask([...tasks, { id: Id++, data: data }]);
            }}
            className="bg-blue-500 py-2 px-4 ml-4 rounded-md text-white"
          >
            Add
          </button>
        </div>

        <ul>
          {tasks.map((t) => (
            <li key={t.id} className="list-disc ">
              {t.data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
