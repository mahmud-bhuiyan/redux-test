import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#38419D] p-14 rounded text-white flex gap-4">
      <button
        className="p-2 bg-red-700 rounded"
        onClick={() => dispatch(decrementByValue(5))}
      >
        Decrement By 5
      </button>

      <button
        className="p-2 bg-red-500 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <div className="p-2">
        <h1>{count}</h1>
      </div>

      <button
        className="p-2 bg-green-400 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        className="p-2 bg-green-600 rounded"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment By 5
      </button>
    </div>
  );
};

export default Counter;
