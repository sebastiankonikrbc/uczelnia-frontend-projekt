import { API_DELETE_NODE } from "./constants";
import { NODE_TYPE } from "./types";

export const useDeleteNode = async (nodeType: NODE_TYPE, nodeId: string) => {
  const response = await fetch(`${API_DELETE_NODE}/${nodeType}/${nodeId}`, {
    method: "DELETE",
  });
  return await response.json();
};
