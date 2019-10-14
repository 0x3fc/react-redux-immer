import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../hooks/createImmerReducer";
import { State } from "../store";
import { StepAction, StepPayload, StepState } from "../store/step";

export const Step: React.FC = () => {
  const { step } = useSelector<State, StepState>(s => s.step);
  const dispatch = useDispatch<Dispatch<IAction<StepAction, StepPayload>>>();

  return (
    <div>
      Step: {step}
      <button onClick={() => dispatch({ type: "INCREASE_STEP" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE_STEP" })}>-</button>
    </div>
  );
};
