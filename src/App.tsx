import React from "react";
import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { Step } from "./components/Step";
import { store } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Step />
    </Provider>
  );
};
