import { API_DELETE_RELATIONSHIP } from "./constants";
import { NODE_TYPE, RELATIONSHIP_TYPES } from "./types";

export const useDeleteRelationship = async (
  relationshipType: RELATIONSHIP_TYPES,
  sourceId: string,
  targetId: string,
  sourceType: NODE_TYPE,
  targetType: NODE_TYPE
) => {
  const response = await fetch(
    `${API_DELETE_RELATIONSHIP}/${relationshipType}/${sourceId}/${targetId}/${sourceType}/${targetType}`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
};
