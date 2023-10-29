import { Select as RadixSelect } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";

type Item = {
  label: string;
  value: string;
};
export const Select = ({ items, name }: { items: Item[]; name: string }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      defaultValue={items[0].value}
      render={({ field: { onChange, value } }) => (
        <RadixSelect.Root onValueChange={onChange} value={value}>
          <RadixSelect.Trigger />
          <RadixSelect.Content>
            <RadixSelect.Group>
              {items.map(({ value, label }) => (
                <RadixSelect.Item key={`key_${value}_${label}`} value={value}>
                  {label}
                </RadixSelect.Item>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Content>
        </RadixSelect.Root>
      )}
      name={name}
    ></Controller>
  );
};
