import React from "react";
import { createContext, useState } from "react";
import { NODE_TYPE } from "./api/types";

export const RefetchContext = createContext({
  refetch: 0,
  setRefetch: (x: number) => {
    x;
  },
  nodeTypeToRefetch: "CreditCard",
  setNodeTypeToRefetch: (x: NODE_TYPE) => {
    x;
  },
});

export const RefetchContextProvider = (props: React.PropsWithChildren) => {
  const [refetch, setRefetch] = useState(0);
  const [nodeTypeToRefetch, setNodeTypeToRefetch] =
    useState<NODE_TYPE>("CreditCard");
  return (
    <RefetchContext.Provider
      value={{ refetch, setRefetch, nodeTypeToRefetch, setNodeTypeToRefetch }}
    >
      {props.children}
    </RefetchContext.Provider>
  );
};
