import { API_EDIT_NODE } from "./constants";
import { CreateInputType, NODE_TYPE } from "./types";

export const useUpdateNode = async (
  nodeType: NODE_TYPE,
  nodeId: string,
  nodeData: CreateInputType
) => {
  const response = await fetch(`${API_EDIT_NODE}/${nodeType}/${nodeId}`, {
    method: "PUT",
    body: JSON.stringify({ ...nodeData }),
  });
  return response;
};
