import React, { useState } from "react";
import { NotFoundPage } from "../NotFoundPage";

import { axiosWithoutAuth } from "../../utils/axiosWithAuth";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  encoded: string;
}

const RedirectPageContainer: React.FC<RouteComponentProps<MatchParams>> = ({
  match: {
    params: { encoded },
  },
}) => {
  const [decodeFailed, setDecodeFailed] = useState<boolean>(false);
  React.useEffect(() => {
    const queryUrl = `/links/decode/${encoded}`;
    axiosWithoutAuth()
      .get(queryUrl)
      .then(r => r.data.target)
      .then(target => (window.location.href = target))
      .catch(() => setDecodeFailed(true));
  }, [encoded]);

  return decodeFailed ? <NotFoundPage /> : null;
};

export default RedirectPageContainer;
