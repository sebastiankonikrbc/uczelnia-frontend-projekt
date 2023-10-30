import { FormProvider, useForm } from "react-hook-form";
import { Dialog } from "../components/Dialog";
import { CreateNodeForm } from "../components/forms/CreateNodeForm";
import { USER } from "../api/types";
import { useCreateNode } from "../api/useCreateNode";

export const CreateNodeDialog = () => {
  const methods = useForm<USER>();
  const onClickSave = async () => {
    const value = methods.getValues();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateNode({ ...value, type: "User" });
    methods.reset(
      { name: "", email: "", age: undefined, address: "" },
      { keepValues: false }
    );
  };
  return (
    <FormProvider {...methods}>
      <Dialog
        triggerTitle={"Create new Node"}
        title={"Create new Node"}
        description={
          "Fill all necessary data in order to create new node in the graph."
        }
        onClickSave={onClickSave}
      >
        <CreateNodeForm />
      </Dialog>
    </FormProvider>
  );
};
