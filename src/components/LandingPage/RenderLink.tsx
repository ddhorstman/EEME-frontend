import { TableRow, TableCell, Link } from "@material-ui/core";
import React from "react";
import { EncodedLink } from "../../types/dataExchangeTypes";

interface Props {
  link: EncodedLink;
}

const RenderLink: React.FC<Props> = ({ link }) => {
  return (
    <TableRow key={link.id}>
      <TableCell align='center'>
        <Link href={`https://eeme.me/${link.encodedPath}`} target='_blank'>
          eeme.me/{link.encodedPath}
        </Link>
      </TableCell>
      <TableCell align='center'>{link.target}</TableCell>
    </TableRow>
  );
};

export default RenderLink;
