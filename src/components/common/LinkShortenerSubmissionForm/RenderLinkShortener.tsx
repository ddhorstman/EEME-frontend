import {
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
    <form onSubmit={handleSubmit} style={{ width: "90%", margin: "5%" }}>
      <FormControl variant='outlined' error={error} fullWidth>
        {/* Wrapping the elements in a FormGroup allows the Input and Button to stay aligned */}
        <FormGroup style={{ flexDirection: "row" }}>
          <OutlinedInput
            style={{ borderRadius: "4px 0px 0px 4px", flexGrow: 1 }}
            placeholder='Me-ify your link...'
            disabled={isLoading}
            value={value}
            onInput={handleInput}
          />
          <Button
            style={{ borderRadius: "0px 4px 4px 0px" }}
            type='submit'
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
  );
};

export default RenderLinkShortener;
