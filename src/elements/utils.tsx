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
import {
  EditNodeDialogForCreditCard,
  EditNodeDialogForFraudReport,
  EditNodeDialogForIpAddress,
  EditNodeDialogForLocation,
  EditNodeDialogForTransaction,
  EditNodeDialogForTransactionType,
  EditNodeDialogForUser,
} from "./EditNodeDialog";

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
export const getEditDialog = (nodeType: NODE_TYPE, defaultValues: any) => {
  if (nodeType === "User")
    return <EditNodeDialogForUser defaultValues={defaultValues} />;
  else if (nodeType === "TransactionType")
    return <EditNodeDialogForTransactionType defaultValues={defaultValues} />;
  else if (nodeType === "Location")
    return <EditNodeDialogForLocation defaultValues={defaultValues} />;
  else if (nodeType === "IPAddress")
    return <EditNodeDialogForIpAddress defaultValues={defaultValues} />;
  else if (nodeType === "FraudReport")
    return <EditNodeDialogForFraudReport defaultValues={defaultValues} />;
  else if (nodeType === "CreditCard")
    return <EditNodeDialogForCreditCard defaultValues={defaultValues} />;
  else if (nodeType === "Transaction")
    return <EditNodeDialogForTransaction defaultValues={defaultValues} />;
};
