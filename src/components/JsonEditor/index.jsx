import { Box, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { validateJson } from "../../helpers";
import { Navigator } from "../Navigator";
export const JsonEditor = ({}) => {
  const [error, setError] = useState("");
  const { json, setJson, toggleEditor } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, error } = validateJson(json);
    if (valid) toggleEditor();
    else setError(error);
  };

  const handleJsonChange = (e) => {
    setJson(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" style={{ margin: 10 }} flexDirection="column">
        <TextField
          id="outlined-multiline-static"
          label="Json"
          multiline
          style={{ margin: 10 }}
          rows={21}
          value={json}
          onChange={handleJsonChange}
          variant="outlined"
        />
        {error && (
          <Alert style={{ margin: 10 }} severity="error">
            Invalid Json | {error}
          </Alert>
        )}
        <Navigator buttonType="submit" buttonText="Submit" />
      </Box>
    </form>
  );
};
