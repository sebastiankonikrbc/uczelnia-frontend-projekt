import { useContext, useEffect, useState } from "react";
import { NODE_TYPE } from "../../api/types";
import { NODES_TYPES, useGetNodes } from "../../api/useGetNodes";
import { Button, Flex, Table } from "@radix-ui/themes";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { getCreateDialog, getEditDialog } from "../../elements/utils";
import { RefetchContext } from "../../RefetchContext";
import { useDeleteNode } from "../../api/useDeleteNode";
import React from "react";

export const NodeTables = ({ nodeType }: { nodeType: NODE_TYPE }) => {
  const [nodes, setNodes] = useState<NODES_TYPES>([]);
  const { refetch, setRefetch, nodeTypeToRefetch } = useContext(RefetchContext);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetNodes(nodeType ?? nodeTypeToRefetch).then((value) =>
      setNodes(value ?? [])
    );
  }, [nodeType, refetch, nodeTypeToRefetch]);

  const deleteNode = async (nodeType: NODE_TYPE, nodeId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useDeleteNode(nodeType, nodeId);
    setRefetch((prev) => prev + 1);
  };
  const CreateDialog = () => getCreateDialog(nodeType);
  return (
    <div>
      <CreateDialog />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {Object.keys(nodes[0] ?? {})?.map((key, indx) => (
              <Table.ColumnHeaderCell
                key={indx + key}
                style={{ textTransform: "capitalize" }}
              >
                {key}
              </Table.ColumnHeaderCell>
            ))}
            {nodes.length > 0 && (
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            )}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {nodes.length > 0 &&
            nodes?.map((value, indx) => (
              <Table.Row key={indx}>
                {Object.values(value)?.map((val, inx) => {
                  if (typeof val === "object")
                    return (
                      <Table.Cell key={inx}>
                        {JSON.stringify({ ...val })
                          .replaceAll("{", "")
                          .replaceAll("}", "")
                          .replaceAll('"', "")
                          .replaceAll(":", ": ")
                          .replaceAll(",", "\n")}
                      </Table.Cell>
                    );
                  return <Table.Cell key={inx}>{val}</Table.Cell>;
                })}
                <Table.Cell>
                  <Flex gap="2" justify="center">
                    <Button
                      variant="ghost"
                      onClick={() => deleteNode(nodeType, value["node_id"])}
                    >
                      <CircleBackslashIcon color="red" />
                    </Button>
                    <React.Fragment key={indx}>
                      {getEditDialog(nodeType, value)}
                    </React.Fragment>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
