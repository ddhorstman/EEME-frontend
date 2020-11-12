import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormGroup,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
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
    <Box>
      <form onSubmit={onSubmit}>
        <FormControl variant='outlined' error={error}>
          <FormGroup style={{ flexDirection: "row" }}>
            <OutlinedInput
              placeholder='Me-ify your link...'
              disabled={isLoading}
              value={value}
              onInput={onInput}
              style={{ minWidth: "500px" }}
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
          </FormGroup>
          {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </form>
    </Box>
  );
};

export default RenderLinkShortener;
