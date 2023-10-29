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

function App() {
  const [count, setCount] = useState(0);
  const items = NODE_TYPES_ARRAY.map((value) => ({
    value: value,
    label: value,
  }));
  const methods = useForm<{ node_type: NODE_TYPE }>();
  const selectedNode = methods.watch("node_type", items[0].value);

  useGetNodes(selectedNode).then((value) => console.log(value));

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
    </Theme>
  );
}

export default App;
