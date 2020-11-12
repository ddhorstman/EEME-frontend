import { Button, Container, TextField } from "@material-ui/core";
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
    <Container>
      <TextField
        placeholder='Enter any link...'
        onInput={onInput}
        value={value}
        error={error}
        helperText={helperText}
      />
      <Button onClick={onClick} color='primary'>
        Me-ify!
      </Button>
    </Container>
  );
};

export default RenderLinkShortener;
