import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import "./App.css";
import { CounterProvider } from "./ContextCounter";

const App = () => {
  return (
    <div className="app">
      <CounterProvider>
        <Header></Header>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
};

export default App;
