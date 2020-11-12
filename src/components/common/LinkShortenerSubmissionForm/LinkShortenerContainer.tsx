import React from "react";
import { FormSubmissionHandler, InputHandler } from "../../../types/formTypes";
import RenderLinkShortener from "./RenderLinkShortener";

import { isHttpUri, isHttpsUri } from "valid-url";
// import { axiosWithoutAuth } from "../../../utils/axiosWithAuth";

interface Props {}
interface State {
  url: string;
  error: boolean;
  isLoading: boolean;
}

class LinkShortenerSubmission extends React.Component<Props, State> {
  state: State = {
    url: "",
    error: false,
    isLoading: false,
  };

  /**
   * Wrapper for the {@link https://www.npmjs.com/package/valid-url|valid-url} package
   * to validate links and return a boolean value.
   * @param value The URL to validate
   */
  validateUrl = (value: string): boolean => {
    return !!(isHttpUri(value) || isHttpsUri(value));
  };

  handleSubmit: FormSubmissionHandler = e => {
    // Stop the default form event from reloading the page
    e?.preventDefault();

    const isValidUrl = this.validateUrl(this.state.url);

    // If the url is invalid, set error and don't submit
    if (!isValidUrl) {
      this.setState({ error: true });
      return;
    }

    //If the url has been validated successfully, send a request to the backend
    // TODO: Replace this with the real backend code
    this.setState({ isLoading: true });
    // axiosWithoutAuth()
    //   .post("/links/encode", { target: this.state.url })
    //   .then(console.log);
    window.setTimeout(() => this.setState({ isLoading: false, url: "" }), 1000);
  };

  // Read the URL from the input and reset validation errors
  handleInput: InputHandler = ({ target: { value } }) => {
    this.setState({ url: value });
    this.setState({ error: false });
  };

  render() {
    return (
      <RenderLinkShortener
        helperText={this.state.error ? "Please enter a valid URL" : null}
        isLoading={this.state.isLoading}
        error={this.state.error}
        value={this.state.url}
        handleSubmit={this.handleSubmit}
        handleInput={this.handleInput}
      />
    );
  }
}

export default LinkShortenerSubmission;
