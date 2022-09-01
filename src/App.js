import * as React from "react";
import { HeaderInputs } from "./component/HeaderInputs";

function App() {
  let headers = [
    { key: "", value: "" },
    { key: "From", value: "k-ohki@example.com" },
  ];
  return (
    <React.Fragment>
      <h1>MIME Generator</h1>
      <h2>Header</h2>
      <HeaderInputs headers={headers} />
    </React.Fragment>
  );
}

export default App;
