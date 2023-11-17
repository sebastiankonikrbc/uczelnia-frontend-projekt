import reactLogo from "./assets/react.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";

import { Select } from "./components/Select";
import { Theme } from "@radix-ui/themes";
import {
  NODE_TYPES_ARRAY,
  NODE_TYPE,
  RELATIONSHIP_TYPES,
  RELATIONSHIPS,
} from "./api/types";
import { FormProvider, useForm } from "react-hook-form";
import { NodeTables } from "./components/tables/NodeTables";
import { RefetchContextProvider } from "./RefetchContext";
import { CreateRelationhipForm } from "./components/forms/CreateRelationshipForm";

function App() {
  const items = NODE_TYPES_ARRAY.map((value) => ({
    value: value,
    label: value,
  }));
  const nodeMethods = useForm<{ node_type: NODE_TYPE }>();
  const selectedNode = nodeMethods.watch("node_type", items[0].value);

  const relationshipMethods = useForm<{
    relationship_type: RELATIONSHIP_TYPES;
  }>();
  const selectedRelationship = relationshipMethods.watch("relationship_type");

  // useEffect(() => {
  // useCreateRelationship({
  //   source_type: "Transaction",
  //   source: "75039549-0e7d-46d5-8eda-ecb85ce1e6af",
  //   type: "IS_OF_TYPE",
  //   target: "2061c67c-9f22-4907-925d-4e84b97b6195",
  //   target_type: "TransactionType",
  // });
  // }, []);

  return (
    <Theme>
      <RefetchContextProvider>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <FormProvider {...nodeMethods}>
          <Select
            name="node_type"
            items={NODE_TYPES_ARRAY.map((value) => ({
              value: value,
              label: value,
            }))}
          />
        </FormProvider>
        <NodeTables nodeType={selectedNode} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            gap: 24,
          }}
        >
          <FormProvider {...relationshipMethods}>
            <Select
              name="relationship_type"
              items={RELATIONSHIPS.map((value) => ({
                value: value,
                label: value,
              }))}
            />
          </FormProvider>
          <CreateRelationhipForm relationshipType={selectedRelationship} />
        </div>
      </RefetchContextProvider>
    </Theme>
  );
}

export default App;
