import { Text, TextField } from "@radix-ui/themes";
import { useFormContext } from "react-hook-form";
import { USER } from "../../api/types";

export const CreateNodeForm = () => {
  const { register } = useFormContext<USER>();
  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Name
        </Text>
        <TextField.Input
          {...register("name", { required: true })}
          placeholder="Enter your full name"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Email
        </Text>
        <TextField.Input
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Age
        </Text>
        <TextField.Input
          {...register("age", { valueAsNumber: true })}
          placeholder="Enter your email"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Address
        </Text>
        <TextField.Input
          {...register("address", { required: true })}
          placeholder="Enter your email"
        />
      </label>
    </>
  );
};
