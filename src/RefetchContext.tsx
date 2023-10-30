import React from "react";
import { createContext, useState } from "react";

export const RefetchContext = createContext({
  refetch: 0,
  setRefetch: (x: number) => {
    x;
  },
});

export const RefetchContextProvider = (props: React.PropsWithChildren) => {
  const [refetch, setRefetch] = useState(0);
  return (
    <RefetchContext.Provider value={{ refetch, setRefetch }}>
      {props.children}
    </RefetchContext.Provider>
  );
};
