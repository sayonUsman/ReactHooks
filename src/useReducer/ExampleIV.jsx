import { useReducer } from "react";
import "../style.css";

const ExampleIV = () => {
  const initialState = -1;
  const initialState2 = 0;

  const reducer = (currentState, action) => {
    switch (action) {
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      default:
        return currentState;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <>
      <h1>useReducer</h1>

      <div>
        <h2> Count I = {count}</h2>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch("increment")}
        >
          Increment
        </button>

        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
      </div>

      <div>
        <h2> Count II = {count2}</h2>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch2("increment")}
        >
          Increment
        </button>

        <button type="button" onClick={() => dispatch2("decrement")}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default ExampleIV;
