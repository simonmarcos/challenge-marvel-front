import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";

const ButtonSelectedComponent = (props: {
  handleChange: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
}) => {
  return (
    <Button
      style={{ display: "flex", margin: "0 auto" }}
      onClick={props.handleChange}
    >
      {props.icon}
    </Button>
  );
};

export default ButtonSelectedComponent;
