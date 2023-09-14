import { useReducer } from "react";
import "../style.css";

function ExampleOne() {
  const initialState = 0;
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

  return (
    <>
      <h1>useReducer</h1>

      <div>
        <h2> Count = {count}</h2>

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
    </>
  );
}

export default ExampleOne;
