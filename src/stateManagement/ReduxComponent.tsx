import { useSelector, useDispatch } from "react-redux";
import { updateCounter } from "./Redux/counterSlice";

export function ReduxComponent() {
  const data = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(updateCounter({ counter: 100 }));
  };

  return (
    <div>
      {data.counter}
      <button onClick={handler}>Update</button>
    </div>
  );
}
