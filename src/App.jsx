import { CssBaseline, IconButton } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import { useState } from "react";
import { JsonEditor } from "./components/JsonEditor";
import { JsonGraph } from "./components/JsonGraph";
import { AppContext } from "./context";

export const App = () => {
  const [showEditor, setShowEditor] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [json, setJson] = useState("{}");
  const palletType = darkMode ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const toggleEditor = () => {
    setShowEditor((prevState) => !prevState);
  };
  const handleThemeChange = () => {
    setDarkMode((prevState) => !prevState);
  };
  const darkToggleButton = (
    <IconButton aria-label="delete" onClick={handleThemeChange}>
      {darkMode ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
    </IconButton>
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider
        value={{ json, setJson, toggleEditor, darkToggleButton }}
      >
        <CssBaseline />
        {showEditor ? <JsonEditor /> : <JsonGraph />}
      </AppContext.Provider>
    </ThemeProvider>
  );
};
