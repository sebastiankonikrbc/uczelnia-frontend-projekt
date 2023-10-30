import { Button, Flex, Dialog as RadixDialog } from "@radix-ui/themes";

type Props = {
  triggerTitle: string;
  title: string;
  description: string;
  children: React.ReactNode;
  onClickSave: () => void;
};
export const Dialog = ({
  triggerTitle,
  title,
  description,
  children,
  onClickSave,
}: Props) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger>
        <Button>{triggerTitle}</Button>
      </RadixDialog.Trigger>

      <RadixDialog.Content style={{ maxWidth: 450 }}>
        <RadixDialog.Title>{title}</RadixDialog.Title>
        <RadixDialog.Description size="2" mb="4">
          {description}
        </RadixDialog.Description>

        <Flex direction="column" gap="3">
          {children}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <RadixDialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </RadixDialog.Close>
          <RadixDialog.Close>
            <Button onClick={onClickSave}>Save</Button>
          </RadixDialog.Close>
        </Flex>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
