import { combineReducers, createStore } from "redux";
import { countReducer } from "./count";
import { stepReducer } from "./step";

const rootReducer = combineReducers({
  count: countReducer,
  step: stepReducer,
});

export type State = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, {});
