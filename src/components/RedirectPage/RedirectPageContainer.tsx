import React, { useState } from "react";
import { NotFoundPage } from "../NotFoundPage";

import { axiosWithoutAuth } from "../../utils/axiosWithAuth";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  encoded: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const RedirectPageContainer: React.FC<Props> = ({
  match: {
    params: { encoded },
  },
}) => {
  // Store status of URL decoding
  // To determine whether to render a 404 page or nothing
  const [decodeFailed, setDecodeFailed] = useState<boolean>(false);

  // Query the backend to decode the URL
  // On success, extract the 'target' and redirect to that page
  // On failure, render a 404 page
  React.useEffect(() => {
    const queryUrl = `/links/decode/${encoded}`;
    axiosWithoutAuth()
      .get(queryUrl)
      .then(r => r.data.target)
      .then(target => (window.location.href = target))
      .catch(() => setDecodeFailed(true));
  }, [encoded]);

  // Will render nothing while the query is running
  // If it succeeds, we will be redirected away rather than rendering something
  return decodeFailed ? <NotFoundPage /> : null;
};

export default RedirectPageContainer;
