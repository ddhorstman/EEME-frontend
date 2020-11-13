import { Card, Typography } from "@material-ui/core";
import React from "react";
import { LinkShortenerSubmissionForm } from "../common/LinkShortenerSubmissionForm";

interface Props {}

const RenderMainCard: React.FC<Props> = props => {
  const paragraphStyle: React.CSSProperties = {
    width: "90%",
    margin: "2% auto",
  };
  return (
    <Card style={{marginTop: "5%"}}>
      <Typography variant='h2' style={{ textAlign: "center", marginTop: "2%", padding: 0 }}>
        EEME - The URL Me-ifier
      </Typography>
      <Typography variant='h4' style={paragraphStyle}>
        EEME is the only URL obfuscator capable of converting your pesky,
        complicated URLs into a sublime combination of 'm's and 'e's.
      </Typography>
      {/* <Typography variant='h4' style={paragraphStyle}>
        Say no to products like bit.ly that optimize for fewest keystrokes - Let
        eeme optimize your URL for the fewest <em>unique</em> keystrokes!
      </Typography> */}
      <LinkShortenerSubmissionForm />
    </Card>
  );
};

export default RenderMainCard;
