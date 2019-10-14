import { Draft } from "immer";
import {
  Cases,
  createImmerReducer,
  IAction,
} from "../hooks/createImmerReducer";

export interface StepState {
  step: number;
}

export interface StepPayload {
  n: number;
}

export type StepAction = "INCREASE_STEP" | "DECREASE_STEP";

type StepCases = Cases<StepState> &
  {
    [_ in StepAction]: (d: Draft<StepState>, payload: StepPayload) => void;
  };

export const stepReducer = createImmerReducer<StepState, IAction, StepCases>(
  {
    INCREASE_STEP: draft => draft.step++,
    DECREASE_STEP: draft => draft.step--,
  },
  { step: 1 } as StepState
);
