import React, { useState } from "react";
import { NotFoundPage } from "../NotFoundPage";

import { axiosWithoutAuth } from "../../utils/axiosWithAuth";

interface Props {
  location: {
    pathname: string;
  };
}

const RedirectPageContainer: React.FC<Props> = ({ location: { pathname } }) => {
  const [decodeFailed, setDecodeFailed] = useState<boolean>(false);

  React.useEffect(() => {
    const queryUrl = `/links/decode/${pathname.slice(1)}`;
    axiosWithoutAuth()
      .get(queryUrl)
      .then(r => r.data.target)
      .then(target => (window.location.href = target))
      .catch(() => setDecodeFailed(true));
  }, [pathname]);

  return decodeFailed ? <NotFoundPage /> : null;
};

export default RedirectPageContainer;
