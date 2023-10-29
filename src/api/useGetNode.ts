import { API_GET_NODE_BY_TYPE_AND_ID } from "./constants";
import { NODE_TYPE } from "./types";

export const useGetNode = async (nodeType: NODE_TYPE, nodeId: string) => {
  const response = await fetch(
    `${API_GET_NODE_BY_TYPE_AND_ID}/${nodeId}/${nodeType}`
  );
  return await response.json();
};
