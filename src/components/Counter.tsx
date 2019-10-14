import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../hooks/createImmerReducer";
import { State } from "../store";
import { CountAction, CountPayload, CountState } from "../store/count";
import { StepState } from "../store/step";

export const Counter: React.FC = () => {
  const { count } = useSelector<State, CountState>(s => s.count);
  const { step } = useSelector<State, StepState>(s => s.step);
  const dispatch = useDispatch<Dispatch<IAction<CountAction, CountPayload>>>();

  return (
    <div>
      Count: {count}
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { n: step } })}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { n: step } })}
      >
        -
      </button>
    </div>
  );
};
