import { Link } from "react-router-dom";
import Screen from "../Screen";

export default function BasketScreen() {
  return (
    <>
      <Screen title="Ma Chope" navigation={<Link to="/">Chope my beer</Link>} />
    </>
  );
}
