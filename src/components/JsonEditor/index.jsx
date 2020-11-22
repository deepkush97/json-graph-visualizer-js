import { Box, TextField, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { validateJson } from "../../helpers";
export const JsonEditor = ({ json, setJson, showGraph }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, error } = validateJson(json);
    if (valid) showGraph();
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
          rows={25}
          value={json}
          onChange={handleJsonChange}
          variant="outlined"
        />
        {error && (
          <Alert style={{ margin: 10 }} severity="error">
            Invalid Json | {error}
          </Alert>
        )}
        <Button
          variant="outlined"
          color="primary"
          style={{ margin: 10 }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};
