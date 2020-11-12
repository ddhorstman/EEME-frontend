import { Box, Button, CircularProgress, TextField } from "@material-ui/core";
import React from "react";
import { FormSubmissionHandler, InputHandler } from "../../../types/formTypes";

interface Props {
  value: string;
  error: boolean;
  isLoading: boolean;
  helperText: string | null;
  onInput: InputHandler;
  onSubmit: FormSubmissionHandler;
}

const RenderLinkShortener: React.FC<Props> = ({
  onInput,
  onSubmit,
  value,
  error,
  isLoading,
  helperText,
}) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <form onSubmit={onSubmit}>
        <TextField
          disabled={isLoading}
          style={{ minWidth: "500px" }}
          variant='outlined'
          placeholder='Me-ify your link'
          onInput={onInput}
          value={value}
          error={error}
          helperText={helperText}
        />
        <Button
          onClick={() => onSubmit()}
          disabled={error || isLoading}
          color='primary'
          variant='contained'
          size='large'
        >
          {isLoading ? <CircularProgress /> : "Me-ify!"}
        </Button>
      </form>
    </Box>
  );
};

export default RenderLinkShortener;
