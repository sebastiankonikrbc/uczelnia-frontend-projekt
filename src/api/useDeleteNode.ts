import { API_DELETE_NODE } from "./constants";
import { NODES_TYPES } from "./useGetNodes";

export const useDeleteNode = async (nodeType: NODES_TYPES, nodeId: string) => {
  const response = await fetch(`${API_DELETE_NODE}/${nodeType}/${nodeId}`, {
    method: "DELETE",
  });
  return await response.json();
};
