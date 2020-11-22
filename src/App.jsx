import "normalize.css";
import { useState } from "react";
import { JsonEditor } from "./components/JsonEditor";
import { JsonGraph } from "./components/JsonGraph";
function App() {
  const [showEditor, setShowEditor] = useState(true);
  const [json, setJson] = useState("{}");

  const showGraph = () => {
    setShowEditor(false);
  };
  const hideGraph = () => {
    setShowEditor(true);
  };

  return (
    <>
      {showEditor ? (
        <JsonEditor json={json} setJson={setJson} showGraph={showGraph} />
      ) : (
        <JsonGraph hideGraph={hideGraph} json={json} />
      )}
    </>
  );
}

export default App;
