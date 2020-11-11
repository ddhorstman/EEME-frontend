import React, { useState } from "react";
import { NotFoundPage } from "../NotFoundPage";
import axios from "axios";

import config from "../../config";

interface Props {
  location: {
    pathname: string;
  };
}

const RedirectPageContainer: React.FC<Props> = props => {
  const [decodeFailed, setDecodeFailed] = useState<boolean>(false);

  let {
    location: { pathname },
  } = props;

  React.useEffect(() => {
    const queryUrl = `https://cors-anywhere-citrics.herokuapp.com/${
      config.backendUrl
    }/links/decode/${pathname.slice(1)}`;
    axios
      .get(queryUrl)
      .then(r => r.data.target)
      .then(target => (window.location.href = target))
      .catch(() => setDecodeFailed(true));
  }, [pathname]);

  return decodeFailed ? <NotFoundPage /> : null;
};

export default RedirectPageContainer;
