import React from "react";
import axios from "axios";

import config from "../../config";

interface Props {
  location: {
    pathname: string;
  };
}

const RedirectPageContainer: React.FC<Props> = props => {
  let {
    location: { pathname },
  } = props;
  pathname = pathname.slice(1);

  React.useEffect(() => {
    const queryUrl = `https://cors-anywhere-citrics.herokuapp.com/${config.backendUrl}/links/decode/${pathname}`;
    axios
      .get(queryUrl)
      .then(r => r.data.target)
      .then(target => (window.location.href = target))
      .catch(console.error);
  }, [pathname]);

  return <div>Redirect page!</div>;
};

export default RedirectPageContainer;
