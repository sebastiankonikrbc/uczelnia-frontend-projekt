/* eslint-disable react-hooks/rules-of-hooks */
import { FormProvider, NonUndefined, useForm } from "react-hook-form";
import {
  NODE_TYPE,
  NODE_TYPES_ARRAY,
  RELATIONSHIP_TYPES,
} from "../../api/types";
import { useGetNodes } from "../../api/useGetNodes";
import { Select } from "../Select";
import { useContext, useEffect, useState } from "react";
import * as Label from "@radix-ui/react-label";
import { Button } from "@radix-ui/themes";
import { RefetchContext } from "../../RefetchContext";
import { useCreateRelationship } from "../../api/useCreateRelationship";
import { useDeleteRelationship } from "../../api/useDeleteRelationship";

const getPossibleNodes = (
  relationshipType: RELATIONSHIP_TYPES
): NonUndefined<{ source: NODE_TYPE; target: NODE_TYPE }> => {
  if (relationshipType === "BELONGS_TO")
    return { source: "Transaction", target: "User" };
  else if (relationshipType === "HAS_CREDIT_CARD")
    return { source: "User", target: "CreditCard" };
  else if (relationshipType === "HAS_IP_ADDRESS")
    return { source: "User", target: "IPAddress" };
  else if (relationshipType === "HAS_LOCATION")
    return { source: "User", target: "Location" };
  else if (relationshipType === "IS_OF_TYPE")
    return { source: "Transaction", target: "TransactionType" };
  else if (relationshipType === "LOCATED_AT")
    return { source: "IPAddress", target: "Location" };
  else if (relationshipType === "REPORTS_FRAUD")
    return { source: "FraudReport", target: "Transaction" };
  return { source: "CreditCard", target: "CreditCard" };
};
export const CreateRelationhipForm = ({
  relationshipType = "BELONGS_TO",
}: {
  relationshipType: RELATIONSHIP_TYPES;
}) => {
  if (!relationshipType) return null;
  const { setRefetch, setNodeTypeToRefetch } = useContext(RefetchContext);

  const [sourceIdTable, setSourceIdTable] = useState([]);
  const [targetIdTable, setTargetIdTable] = useState([]);

  const methods = useForm<{
    source_type: NODE_TYPE;
    source: string;
    target_type: NODE_TYPE;
    target: string;
  }>({
    defaultValues: {
      source_type: undefined,
    },
  });
  const possibleNodes = getPossibleNodes(relationshipType);

  useEffect(() => {
    methods.reset({
      source_type: possibleNodes.source,
      target: "",
      source: "",
      target_type: possibleNodes.target,
    });
  }, [relationshipType]);

  const onDelete = async () => {
    const values = methods.getValues();
    setRefetch((prev) => prev + 1);
    await useDeleteRelationship(
      relationshipType,
      values.source,
      values.target,
      values.source_type,
      values.target_type
    );
    setNodeTypeToRefetch(values.source);
    setNodeTypeToRefetch(values.target);
    methods.reset({
      source_type: "",
      target: "",
      source: "",
      target_type: "",
    });
  };

  const sourceIds = methods.watch("source_type");
  const targetIds = methods.watch("target_type");

  useEffect(() => {
    useGetNodes(sourceIds).then((res) => setSourceIdTable(res));
    useGetNodes(targetIds).then((res) => setTargetIdTable(res));
  }, [sourceIds, targetIds]);

  const onSuccess = async () => {
    const values = methods.getValues();
    setRefetch((prev) => prev + 1);
    await useCreateRelationship({ ...values, type: relationshipType });
    setNodeTypeToRefetch(values.source);
    setNodeTypeToRefetch(values.target);

    methods.reset({
      source_type: "",
      target: "",
      source: "",
      target_type: "",
    });
  };
  return (
    <div
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "50%",
      }}
    >
      <FormProvider {...methods}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Label.Root style={{ marginRight: "auto" }}>Source type:</Label.Root>
          <Select
            items={NODE_TYPES_ARRAY.filter(
              (value) => possibleNodes?.source === value
            ).map((value) => ({ value, label: value }))}
            name="source_type"
          />
        </div>
        {sourceIdTable.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Label.Root style={{ marginRight: "auto" }}>Source id:</Label.Root>
            <Select
              placeholder="Select target id"
              items={
                sourceIdTable.map((value) => ({
                  value: value.node_id,
                  label: value.node_id,
                })) ?? [{ value: "", label: "" }]
              }
              name="source"
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Label.Root style={{ marginRight: "auto" }}>Target type:</Label.Root>
          <Select
            items={NODE_TYPES_ARRAY.filter(
              (value) => possibleNodes?.target === value
            ).map((value) => ({ value, label: value }))}
            name="target_type"
          />
        </div>
        {targetIdTable.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Label.Root style={{ marginRight: "auto" }}>Target id:</Label.Root>
            <Select
              placeholder="Select target id"
              items={
                targetIdTable.map((value) => ({
                  value: value.node_id,
                  label: value.node_id,
                })) ?? []
              }
              name="target"
            />
          </div>
        )}
      </FormProvider>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          width: "100%",
          gap: 12,
        }}
      >
        <Button style={{ flex: 1 }} color="red" onClick={onDelete}>
          Delete
        </Button>
        <Button style={{ flex: 3 }} onClick={onSuccess}>
          Save
        </Button>
      </div>
    </div>
  );
};
