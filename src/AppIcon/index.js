import { Icon } from "@mui/material";
import logo from "./beer.svg";

export default function AppIcon(props) {
  return (
    <Icon>
      <img src={logo} alt="Chope my beer logo" />
    </Icon>
  );
}
