import React from "react";
import { FormSubmissionHandler, InputHandler } from "../../../types/formTypes";
import RenderLinkShortener from "./RenderLinkShortener";

import { isHttpUri, isHttpsUri } from "valid-url";
import { axiosWithoutAuth } from "../../../utils/axiosWithAuth";

interface Props {}
interface State {
  url: string;
  error: boolean;
  isLoading: boolean;
  helperText: null;
}

class LinkShortenerSubmission extends React.Component<Props, State> {
  state: State = {
    url: "",
    error: false,
    isLoading: false,
    helperText: null,
  };

  validateUrl = (value: string): boolean => {
    return !!(isHttpUri(value) || isHttpsUri(value));
  };

  onSubmit: FormSubmissionHandler = e => {
    e?.preventDefault();
    if (!this.state.error) {
      this.setState({ isLoading: true, url: "" });
      // axiosWithoutAuth()
      //   .post("/links/encode", { target: this.state.url })
      //   .then(console.log);
      window.setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };

  onInput: InputHandler = ({ target: { value } }) => {
    this.setState({ url: value });
    this.setState({ error: !this.validateUrl(value) });
  };

  render() {
    return (
      <RenderLinkShortener
        helperText={this.state.error ? "Please enter a valid URL" : null}
        isLoading={this.state.isLoading}
        error={this.state.error}
        value={this.state.url}
        onSubmit={this.onSubmit}
        onInput={this.onInput}
      />
    );
  }
}

export default LinkShortenerSubmission;
