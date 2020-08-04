import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "Thirunavukarasu Thirumoorthy"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};	