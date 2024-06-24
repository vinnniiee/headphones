import React from "react";
import { Alert } from "react-bootstrap";
type MessageProps = {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: React.ReactNode;
};
const Message = ({ variant, children }: MessageProps) => {
  return <Alert className="" variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
