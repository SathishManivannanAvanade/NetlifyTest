import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";

const containerStyle = css`
  background-color: #FFBE33;
  color: #C233FF;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CustomTemplate: FunctionComponent<
  TemplateProps<CustomTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <PrintWatermark />
      <br></br>
      <br></br>
      <br></br>
      <h1>Opencerts</h1>
      <h3>This is to certify that</h3>
      <h2>{document.recipient.name}</h2>
      <h3>has successfully completed </h3> 
      <br></br>
      <br></br>
     <h3>the Opencerts Demo</h3>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};