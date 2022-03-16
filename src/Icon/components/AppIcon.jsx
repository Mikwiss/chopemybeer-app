import { Icon } from "@mui/material";
import logo from "./../images/beer.svg";

export default function AppIcon(props) {
  return (
    <Icon>
      <img src={logo} alt="Chope my beer logo" />
    </Icon>
  );
}
