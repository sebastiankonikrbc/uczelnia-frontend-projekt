import { FormProvider, useForm } from "react-hook-form";
import { Dialog } from "../components/Dialog";
import {
  CreateCreditCardNodeForm,
  CreateFraudReportNodeForm,
  CreateIpAddressNodeForm,
  CreateLocationNodeForm,
  CreateTransactionNodeForm,
  CreateTransactionTypeNodeForm,
  CreateUserNodeForm,
} from "../components/forms/CreateNodeForm";
import {
  CREDIT_CARD,
  FRAUD_REPORT,
  IP_ADDRESS,
  LOCATION,
  TRANSACTION,
  TRANSACTION_TYPE,
  USER,
} from "../api/types";
import { useCreateNode } from "../api/useCreateNode";
import { useContext } from "react";
import { RefetchContext } from "../RefetchContext";

export const CreateNodeDialogForUser = () => {
  const methods = useForm<USER>();
  const { setRefetch } = useContext(RefetchContext);
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "User" });
    methods.reset(
      { name: "", email: "", age: undefined, address: "" },
      { keepValues: false }
    );
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new User Node"}
        title={"Create new User Node"}
        description={
          "Fill all necessary data in order to create new User node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateUserNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const CreateNodeDialogForTransactionType = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<TRANSACTION_TYPE>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "TransactionType" });
    methods.reset({ name: "", description: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Transaction Type Node"}
        title={"Create new Transaction Type Node"}
        description={
          "Fill all necessary data in order to create new Transaction Type node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateTransactionTypeNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const CreateNodeDialogForLocation = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<LOCATION>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "Location" });
    methods.reset({ latitude: 0, longitude: 0 }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Location Node"}
        title={"Create new Location  Node"}
        description={
          "Fill all necessary data in order to create new Location node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateLocationNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const CreateNodeDialogForIpAddress = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<IP_ADDRESS>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "IPAddress" });
    methods.reset({ ip_address: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new IP Address Node"}
        title={"Create new IP Address Node"}
        description={
          "Fill all necessary data in order to create new IP Address node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateIpAddressNodeForm />
      </Dialog>
    </FormProvider>
  );
};
export const CreateNodeDialogForFraudReport = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<FRAUD_REPORT>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "FraudReport" });
    methods.reset({ description: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Fraud Report Node"}
        title={"Create new Fraud Report Node"}
        description={
          "Fill all necessary data in order to create new Fraud Report node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateFraudReportNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const CreateNodeDialogForCreditCard = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<CREDIT_CARD>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "CreditCard" });
    methods.reset(
      { card_number: "", expiration_date: "", cvv: "string" },
      { keepValues: false }
    );
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Credit Card Node"}
        title={"Create new Credit Card Node"}
        description={
          "Fill all necessary data in order to create new Credit Card node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateCreditCardNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const CreateNodeDialogForTransaction = () => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<TRANSACTION>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "Transaction" });
    methods.reset({ amount: 0, timestamp: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Transaction Node"}
        title={"Create new Transaction Node"}
        description={
          "Fill all necessary data in order to create new Transaction node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateTransactionNodeForm />
      </Dialog>
    </FormProvider>
  );
};
