import { useReducer } from "react";
import "../style.css";

const ExampleIII = () => {
  const initialState = {
    counterI: 0,
    counterII: 0,
  };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "incrementI":
        return { ...currentState, counterI: currentState.counterI + 1 };
      case "decrementI":
        return { ...currentState, counterI: currentState.counterI - 1 };
      case "incrementII":
        return { ...currentState, counterII: currentState.counterII + 1 };
      case "decrementII":
        return { ...currentState, counterII: currentState.counterII - 1 };
      default:
        return currentState;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer</h1>

      <div>
        <h2> Count I = {count.counterI}</h2>
        <h2> Count II = {count.counterII}</h2>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "incrementI" })}
        >
          Increment I
        </button>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "decrementI" })}
        >
          Decrement I
        </button>

        <button
          style={{ marginRight: "15px" }}
          type="button"
          onClick={() => dispatch({ type: "incrementII" })}
        >
          Increment II
        </button>

        <button type="button" onClick={() => dispatch({ type: "decrementII" })}>
          Decrement II
        </button>
      </div>
    </>
  );
};

export default ExampleIII;
