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
  handleInput: InputHandler;
  handleSubmit: FormSubmissionHandler;
}

const RenderLinkShortener: React.FC<Props> = ({
  handleInput,
  handleSubmit,
  value,
  error,
  isLoading,
  helperText,
}) => {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl variant='outlined' error={error}>
          {/* Wrapping the elements in a FormGroup allows the Input and Button to stay aligned */}
          <FormGroup style={{ flexDirection: "row" }}>
            <OutlinedInput
              placeholder='Me-ify your link...'
              disabled={isLoading}
              value={value}
              onInput={handleInput}
              style={{ minWidth: "500px" }}
            />
            <Button
              onClick={() => handleSubmit()}
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
