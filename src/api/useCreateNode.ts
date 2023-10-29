import { API_CREATE_NODE } from "./constants";
import { CreateInputType } from "./types";

export const useCreateNode = async (nodeData: CreateInputType) => {
  const response = await fetch(`${API_CREATE_NODE}`, {
    method: "POST",
    body: JSON.stringify([{ ...nodeData }]),
  });
  return await response.json();
};
