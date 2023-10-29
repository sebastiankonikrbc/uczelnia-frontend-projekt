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

export type CREATE_NODE_DATA = {
  type: NODE_TYPE;
};

export const RELATIONSHIPS = [
  "BELONGS_TO",
  "HAS_CREDIT_CARD",
  "HAS_IP_ADDRESS",
  "HAS_LOCATION",
  "LOCATED_AT",
  "REPORTS_FRAUD",
  "IS_OF_TYPE",
] as const;

export type RELATIONSHIP_TYPES = (typeof RELATIONSHIPS)[number];

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
};

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

export type USER = Omit<USER_NODE, "node_id">;
export type TRANSACTION_TYPE = Omit<TRANSACTION_TYPE_NODE, "node_id">;
export type LOCATION = Omit<LOCATION_NODE, "node_id">;
export type IP_ADDRESS = Omit<IP_ADDRESS_NODE, "node_id">;
export type FRAUD_REPORT = Omit<FRAUD_REPORT_NODE, "node_id">;
export type CREDIT_CARD = Omit<CREDIT_CARD_NODE, "node_id">;
export type TRANSACTION = Omit<TRANSACTION_NODE, "node_id">;

export type CreateInputType = (
  | USER
  | TRANSACTION_TYPE
  | LOCATION
  | IP_ADDRESS
  | FRAUD_REPORT
  | CREDIT_CARD
  | TRANSACTION
) & { type: NODE_TYPE };
