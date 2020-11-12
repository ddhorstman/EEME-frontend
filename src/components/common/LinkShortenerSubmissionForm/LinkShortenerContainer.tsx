import React from "react";
import { ButtonClickHandler, InputHandler } from "../../../types/formTypes";
import RenderLinkShortener from "./RenderLinkShortener";

import { isHttpUri, isHttpsUri } from "valid-url";

interface Props {}
interface State {
  url: string;
  error: boolean;
  helperText: null;
}

class LinkShortenerSubmission extends React.Component<Props, State> {
  state: State = {
    url: "",
    error: false,
    helperText: null,
  };

  validateUrl = (value: string): boolean => {
    return !!(isHttpUri(value) || isHttpsUri(value));
  };

  onClick: ButtonClickHandler = () => {
    console.log(this.state.url);
  };

  onInput: InputHandler = ({ target: { value } }) => {
    this.setState({ url: value });
    console.log(this.validateUrl(value) + value);
  };

  render() {
    return (
      <RenderLinkShortener
        helperText={this.state.helperText}
        error={this.state.error}
        value={this.state.url}
        onClick={this.onClick}
        onInput={this.onInput}
      />
    );
  }
}

export default LinkShortenerSubmission;
