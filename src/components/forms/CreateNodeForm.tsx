import { Text, TextField } from "@radix-ui/themes";
import { useFormContext } from "react-hook-form";
import {
  CREDIT_CARD,
  FRAUD_REPORT,
  IP_ADDRESS,
  LOCATION,
  TRANSACTION,
  TRANSACTION_TYPE,
  USER,
} from "../../api/types";
import { useEffect } from "react";

export const CreateUserNodeForm = () => {
  const { register, reset } = useFormContext<USER>();
  useEffect(() => {
    reset();
  }, []);
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
          placeholder="Enter your age"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Address
        </Text>
        <TextField.Input
          {...register("address", { required: true })}
          placeholder="Enter your Address"
        />
      </label>
    </>
  );
};

export const CreateTransactionTypeNodeForm = () => {
  const { register } = useFormContext<TRANSACTION_TYPE>();
  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Name of transaction
        </Text>
        <TextField.Input
          {...register("name", { required: true })}
          placeholder="Enter name of transaction type"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Description
        </Text>
        <TextField.Input
          {...register("description", { required: true })}
          placeholder="Enter description of transaction type"
        />
      </label>
    </>
  );
};

export const CreateLocationNodeForm = () => {
  const { register } = useFormContext<LOCATION>();
  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Latitude
        </Text>
        <TextField.Input
          {...register("latitude", { required: true, valueAsNumber: true })}
          placeholder="Enter latitude"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Longitude
        </Text>
        <TextField.Input
          {...register("longitude", { required: true, valueAsNumber: true })}
          placeholder="Enter longitude"
        />
      </label>
    </>
  );
};

export const CreateIpAddressNodeForm = () => {
  const { register } = useFormContext<IP_ADDRESS>();
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        IP Address
      </Text>
      <TextField.Input
        {...register("ip_address", { required: true })}
        placeholder="Enter ip address"
      />
    </label>
  );
};

export const CreateFraudReportNodeForm = () => {
  const { register } = useFormContext<FRAUD_REPORT>();
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Description
      </Text>
      <TextField.Input
        {...register("description", { required: true })}
        placeholder="Enter description of the fraud report"
      />
    </label>
  );
};

export const CreateCreditCardNodeForm = () => {
  const { register } = useFormContext<CREDIT_CARD>();
  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Card number
        </Text>
        <TextField.Input
          {...register("card_number", { required: true })}
          placeholder="Enter credit card number"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Expiration Date
        </Text>
        <TextField.Input
          {...register("expiration_date", { required: true })}
          placeholder="Enter card expiration date"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          CVV
        </Text>
        <TextField.Input
          {...register("cvv", { required: true })}
          placeholder="Enter card cvv"
        />
      </label>
    </>
  );
};

export const CreateTransactionNodeForm = () => {
  const { register } = useFormContext<TRANSACTION>();
  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Amount
        </Text>
        <TextField.Input
          {...register("amount", { required: true, valueAsNumber: true })}
          placeholder="Enter transaction amount"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Expiration Date
        </Text>
        <TextField.Input
          {...register("timestamp", { required: true })}
          placeholder="Enter timestamp of transaction"
        />
      </label>
    </>
  );
};
