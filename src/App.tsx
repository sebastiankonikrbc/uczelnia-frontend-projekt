import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";

import { Select } from "./components/Select";
import { Theme } from "@radix-ui/themes";
import { NODE_TYPES_ARRAY, NODE_TYPE } from "./api/types";
import { FormProvider, useForm } from "react-hook-form";
import { useGetNodes } from "./api/useGetNodes";
import { CreateNodeDialog } from "./elements/CreateNodeDialog";

function App() {
  const [count, setCount] = useState(0);
  const items = NODE_TYPES_ARRAY.map((value) => ({
    value: value,
    label: value,
  }));
  const methods = useForm<{ node_type: NODE_TYPE }>();
  const selectedNode = methods.watch("node_type", items[0].value);

  useGetNodes(selectedNode).then((value) => console.log(value));

  // useEffect(() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useCreateNode({
  //   type: "User",
  //   name: "cze",
  //   email: "cze@cze.pl",
  //   age: 12,
  //   address: "czsakjdhaksd",
  // });
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FormProvider {...methods}>
        <Select
          name="node_type"
          items={NODE_TYPES_ARRAY.map((value) => ({
            value: value,
            label: value,
          }))}
        />
      </FormProvider>
      <CreateNodeDialog />
    </Theme>
  );
}

export default App;
