import { API_GET_NODES_BY_TYPE } from "./constants";
import {
  CREDIT_CARD_NODE,
  FRAUD_REPORT_NODE,
  IP_ADDRESS_NODE,
  LOCATION_NODE,
  NODE_TYPE,
  TRANSACTION_NODE,
  TRANSACTION_TYPE_NODE,
  USER_NODE,
} from "./types";

export type NODES_TYPES =
  | TRANSACTION_NODE[]
  | CREDIT_CARD_NODE[]
  | FRAUD_REPORT_NODE[]
  | IP_ADDRESS_NODE[]
  | LOCATION_NODE[]
  | TRANSACTION_TYPE_NODE[]
  | USER_NODE[]
  | TRANSACTION_NODE[];

export const useGetNodes = async (
  nodeType: NODE_TYPE
): Promise<NODES_TYPES> => {
  const response = await fetch(`${API_GET_NODES_BY_TYPE}/${nodeType}`);
  return await response.json();
};
