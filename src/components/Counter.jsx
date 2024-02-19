import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="bg-[#38419D] p-14 rounded text-white flex gap-4">
      <button className="p-2 bg-red-500 rounded">Decrement</button>
      <div className="p-2">
        <h1>{count}</h1>
      </div>
      <button className="p-2 bg-green-400 rounded">Increment</button>
    </div>
  );
};

export default Counter;
