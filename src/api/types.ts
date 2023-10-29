export type NODE_TYPE = (typeof NODE_TYPES_ARRAY)[number];

export const NODE_TYPES_ARRAY = [
  "CreditCard",
  "FraudReport",
  "IPAddress",
  "Location",
  "Transaction",
  "TransactionType",
  "User",
] as const;

export type RELATIONSHIP_TYPES =
  | "BELONGS_TO"
  | "HAS_CREDIT_CARD"
  | "HAS_IP_ADDRESS"
  | "HAS_LOCATION"
  | "LOCATED_AT"
  | "REPORTS_FRAUD";

export type NODE = {
  node_id: string;
};
export type TRANSACTION_NODE = {
  amount: number;
  timestamp: string;
  relationship: {
    IS_OF_TYPE: string[];
    BELONGS_TO: string[];
  };
} & NODE;

export type CREDIT_CARD_NODE = {
  card_number: string;
  expiration_date: string;
  cvv: string;
  relationship: {
    HAS_CREDIT_CARD: string[];
  };
} & NODE;

export type FRAUD_REPORT_NODE = {
  description: string;
  relationship: {
    REPORTS_FRAUD: string[];
  };
} & NODE;

export type IP_ADDRESS_NODE = {
  ip_address: string;
  relationship: {
    HAS_IP_ADDRESS: string[];
    LOCATED_AT: string[];
  };
} & NODE;

export type LOCATION_NODE = {
  latitude: number;
  longitude: number;
  relationship: {
    HAS_LOCATION: string[];
  };
} & NODE;

export type TRANSACTION_TYPE_NODE = {
  name: string;
  description: string;
} & NODE;

export type USER_NODE = {
  name: string;
  email: string;
  age: number;
  address: string;
} & NODE;
