import { TableRow, TableCell, Link, Button } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import React from "react";
import { EncodedLink } from "../../types/dataExchangeTypes";
import { ButtonClickHandler } from "../../types/formTypes";

interface Props {
  link: EncodedLink;
}

const RenderLink: React.FC<Props> = ({ link }) => {
  const eemeHref = `https://eeme.me/${link.encodedPath}`;
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleCopy: ButtonClickHandler = ({ target }) => {
    textAreaRef?.current?.select();
    console.log(textAreaRef?.current?.value);
    document.execCommand("copy");
    target.focus();
  };

  return (
    <TableRow key={link.id}>
      <TableCell align='center'>
        <Link href={eemeHref} target='_blank'>
          <textarea
            ref={textAreaRef}
            style={{ display: "none" }}
            value={eemeHref}
          />
          eeme.me/{link.encodedPath}
        </Link>
        <Button onClick={handleCopy}>
          <FileCopy />
        </Button>
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
