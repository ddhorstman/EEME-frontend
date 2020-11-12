import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { ButtonClickHandler, InputHandler } from "../../../types/formTypes";

interface Props {
  value: string;
  error: boolean;
  helperText: string | null;
  onInput: InputHandler;
  onClick: ButtonClickHandler;
}

const RenderLinkShortener: React.FC<Props> = ({
  onInput,
  onClick,
  value,
  error,
  helperText,
}) => {
  return (
    <Box style={{ display: "flex", alignItems: "baseline" }}>
      <TextField
        style={{ minWidth: "500px" }}
        variant='outlined'
        placeholder='Me-ify your link'
        onInput={onInput}
        value={value}
        error={error}
        helperText={helperText}
      />
      <Button
        disabled={error}
        onClick={onClick}
        color='primary'
        variant='contained'
        size='large'
      >
        Me-ify!
      </Button>
    </Box>
  );
};

export default RenderLinkShortener;
