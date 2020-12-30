import React, { useState, createContext } from "react";

export const ContextCounter = createContext();

export function CounterProvider(props) {
  const [count, setCount] = useState(0);
  return (
    <ContextCounter.Provider value={[count, setCount]}>
      {props.children}
    </ContextCounter.Provider>
  );
}
