import {
  Card,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import React from "react";
import { EncodedLink } from "../../types/dataExchangeTypes";
import RenderLink from "./RenderLink";

interface Props {
  links: EncodedLink[] | null;
}

const RenderLinksCard: React.FC<Props> = ({ links }) => {
  return (
    <Card style={{ marginTop: "5%" }}>
      <Typography
        variant='h3'
        style={{ textAlign: "center", marginTop: "2%", padding: 0 }}
      >
        Your Links:
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Me-ified</TableCell>
            <TableCell align='center'>Original</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links?.map(link => (
            <RenderLink link={link} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RenderLinksCard;
