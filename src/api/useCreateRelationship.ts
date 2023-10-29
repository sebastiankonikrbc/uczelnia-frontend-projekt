import { API_CREATE_RELATIONSHIPS } from "./constants";
import { NODE_TYPE, RELATIONSHIP_TYPES } from "./types";

type InputData = {
  source_type: NODE_TYPE;
  source: string;
  type: RELATIONSHIP_TYPES;
  target_type: NODE_TYPE;
  target: string;
};
export const useCreateRelationship = async (inputData: InputData) => {
  const response = await fetch(`${API_CREATE_RELATIONSHIPS}`, {
    method: "POST",
    body: JSON.stringify({ relationships: [{ ...inputData }] }),
  });
  return await response.json();
};
