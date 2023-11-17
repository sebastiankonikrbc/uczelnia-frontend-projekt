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
import { useUpdateNode } from "../api/useUpdateNode";
import { useContext, useEffect } from "react";
import { RefetchContext } from "../RefetchContext";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";

export const EditNodeDialogForUser = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  Trigger?: () => React.ReactNode;
  defaultValues?: any;
}) => {
  const methods = useForm<USER>();

  const { setRefetch } = useContext(RefetchContext);

  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("User", defaultValues.node_id, {
      ...value,
    });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset(
      { name: "", email: "", age: null, address: "" },
      { keepValues: false }
    );
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerVariant="ghost"
        triggerTitle={"Edit User Node"}
        title={"Edit User Node"}
        description={
          "Fill all necessary data in order to edit User node in the graph."
        }
        Trigger={Trigger}
        onClickSave={onClickSave}
      >
        <CreateUserNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const EditNodeDialogForTransactionType = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<TRANSACTION_TYPE>();

  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("TransactionType", defaultValues.node_id, {
      ...value,
    });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset({ name: "", description: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        Trigger={Trigger}
        triggerVariant="ghost"
        triggerTitle={"Edit Transaction Type Node"}
        title={"Edit Transaction Type Node"}
        description={
          "Fill all necessary data in order to edit Transaction Type node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateTransactionTypeNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const EditNodeDialogForLocation = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<LOCATION>();

  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("Location", defaultValues.node_id, { ...value });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset({ latitude: 0, longitude: 0 }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        Trigger={Trigger}
        triggerVariant="ghost"
        triggerTitle={"Edit Location Node"}
        title={"Edit Location  Node"}
        description={
          "Fill all necessary data in order to edit Location node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateLocationNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const EditNodeDialogForIpAddress = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<IP_ADDRESS>();

  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("IPAddress", defaultValues.node_id, { ...value });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset({ ip_address: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerVariant="ghost"
        Trigger={Trigger}
        triggerTitle={"Edit IP Address Node"}
        title={"Edit IP Address Node"}
        description={
          "Fill all necessary data in order to edit IP Address node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateIpAddressNodeForm />
      </Dialog>
    </FormProvider>
  );
};
export const EditNodeDialogForFraudReport = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<FRAUD_REPORT>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("FraudReport", defaultValues.node_id, { ...value });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset({ description: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerVariant="ghost"
        Trigger={Trigger}
        triggerTitle={"Edit Fraud Report Node"}
        title={"Edit Fraud Report Node"}
        description={
          "Fill all necessary data in order to edit Fraud Report node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateFraudReportNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const EditNodeDialogForCreditCard = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<CREDIT_CARD>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("CreditCard", defaultValues.node_id, { ...value });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    methods.reset(
      { card_number: "", expiration_date: "", cvv: "string" },
      { keepValues: false }
    );
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerVariant="ghost"
        Trigger={Trigger}
        triggerTitle={"Edit Credit Card Node"}
        title={"Edit Credit Card Node"}
        description={
          "Fill all necessary data in order to edit Credit Card node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateCreditCardNodeForm />
      </Dialog>
    </FormProvider>
  );
};

export const EditNodeDialogForTransaction = ({
  Trigger = () => <Pencil2Icon />,
  defaultValues,
}: {
  defaultValues?: any;
  Trigger?: () => React.ReactNode;
}) => {
  const { setRefetch } = useContext(RefetchContext);
  const methods = useForm<TRANSACTION>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useUpdateNode("Transaction", defaultValues.node_id, { ...value });
    toast.success("Successfully edited node", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    methods.reset({ amount: 0, timestamp: "" }, { keepValues: false });
    setRefetch((prev: number) => prev + 1);
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerVariant="ghost"
        Trigger={Trigger}
        triggerTitle={"Edit Transaction Node"}
        title={"Edit Transaction Node"}
        description={
          "Fill all necessary data in order to edit Transaction node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateTransactionNodeForm />
      </Dialog>
    </FormProvider>
  );
};
