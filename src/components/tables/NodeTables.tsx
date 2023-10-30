import { useEffect, useState } from "react";
import { NODE_TYPE } from "../../api/types";
import { NODES_TYPES, useGetNodes } from "../../api/useGetNodes";
import { Table } from "@radix-ui/themes";

export const NodeTables = ({ nodeType }: { nodeType: NODE_TYPE }) => {
  const [nodes, setNodes] = useState<NODES_TYPES>([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetNodes(nodeType).then((value) => setNodes(value ?? []));
  }, [nodeType]);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {Object.keys(nodes[0] ?? {})?.map((key, indx) => (
            <Table.ColumnHeaderCell key={indx + key}>
              {key}
            </Table.ColumnHeaderCell>
          ))}
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {nodes.length > 0 &&
          nodes?.map((value, indx) => (
            <Table.Row key={indx}>
              {Object.values(value ?? {})?.map((val, inx) => {
                console.log(value, "cze");
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
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
};
