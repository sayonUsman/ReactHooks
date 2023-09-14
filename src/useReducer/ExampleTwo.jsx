import { useReducer } from "react";
import "../style.css";

const ExampleTwo = () => {
  const initialState = {
    counter: 0,
  };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return { counter: currentState.counter + action.value };
      case "decrement":
        return { counter: currentState.counter - action.value };
      default:
        return currentState;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer</h1>

      <div>
        <h2> Count = {count.counter}</h2>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment By 1
        </button>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "increment", value: 5 })}
        >
          Increment By 5
        </button>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement By 1
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          Decrement By 5
        </button>
      </div>
    </>
  );
};

export default ExampleTwo;
