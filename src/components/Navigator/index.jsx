import { Box, Button } from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "../../context";

export const Navigator = ({ buttonType, buttonText, onClick }) => {
  const { darkToggleButton } = useContext(AppContext);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        variant="outlined"
        color="primary"
        style={{ margin: 10, width: "95%" }}
        type={buttonType || "button"}
        onClick={onClick || null}
      >
        {buttonText}
      </Button>
      {darkToggleButton}
    </Box>
  );
};
