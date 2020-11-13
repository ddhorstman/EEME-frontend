import { TableRow, TableCell, Link, Button, Icon } from "@material-ui/core";
import React from "react";
import { EncodedLink } from "../../types/dataExchangeTypes";
import CopyToClipboard from "react-copy-to-clipboard";

interface Props {
  link: EncodedLink;
}

const RenderLink: React.FC<Props> = ({ link }) => {
  const eemeHref = `https://eeme.me/${link.encodedPath}`;

  return (
    <TableRow key={link.id}>
      <TableCell align='center'>
        <Link href={eemeHref} target='_blank'>
          eeme.me/{link.encodedPath}
        </Link>
        <CopyToClipboard text={eemeHref}>
          <Button>
            <Icon>content_copy</Icon>
          </Button>
        </CopyToClipboard>
      </TableCell>
      <TableCell align='center'>
        <Link href={link.target} target='_blank'>
          {link.target}
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default RenderLink;
