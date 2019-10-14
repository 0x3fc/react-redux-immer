import { Draft } from "immer";
import {
  Cases,
  createImmerReducer,
  IAction,
} from "../hooks/createImmerReducer";

export interface CountState {
  count: number;
}

export interface CountPayload {
  n: number;
}

export type CountAction = "INCREMENT" | "DECREMENT";

type CountCases = Cases<CountState> &
  {
    [_ in CountAction]: (d: Draft<CountState>, payload: CountPayload) => void;
  };

export const countReducer = createImmerReducer<CountState, IAction, CountCases>(
  {
    INCREMENT: (draft, payload) => (draft.count += payload.n),
    DECREMENT: (draft, payload) => (draft.count -= payload.n),
  },
  { count: 0 } as CountState
);
