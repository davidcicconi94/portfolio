import { Typography } from "@mui/material";
import React from "react";
import "./CertificateCard.css";

type CertificateProps = {
  title: string;
  image: string;
  date: string;
};

const CertificateCard = (props: CertificateProps) => {
  return (
    <div className="cardCertificate">
      <Typography variant="h4"> {props.title} </Typography>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default CertificateCard;
