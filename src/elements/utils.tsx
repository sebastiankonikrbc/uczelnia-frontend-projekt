import { NODE_TYPE } from "../api/types";
import {
  CreateNodeDialogForCreditCard,
  CreateNodeDialogForFraudReport,
  CreateNodeDialogForIpAddress,
  CreateNodeDialogForLocation,
  CreateNodeDialogForTransaction,
  CreateNodeDialogForTransactionType,
  CreateNodeDialogForUser,
} from "./CreateNodeDialog";

export const getCreateDialog = (nodeType: NODE_TYPE) => {
  if (nodeType === "User") return <CreateNodeDialogForUser />;
  else if (nodeType === "TransactionType")
    return <CreateNodeDialogForTransactionType />;
  else if (nodeType === "Location") return <CreateNodeDialogForLocation />;
  else if (nodeType === "IPAddress") return <CreateNodeDialogForIpAddress />;
  else if (nodeType === "FraudReport")
    return <CreateNodeDialogForFraudReport />;
  else if (nodeType === "CreditCard") return <CreateNodeDialogForCreditCard />;
  else if (nodeType === "Transaction")
    return <CreateNodeDialogForTransaction />;
};
