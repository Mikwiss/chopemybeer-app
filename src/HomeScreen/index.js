import { Link } from "react-router-dom";
import Screen from "../Screen";

export default function HomeScreen() {
  return (
    <>
      <Screen
        title="Welcome to Chope My Beer"
        navigation={<Link to="/basket">Voir mon panier</Link>}
        isHome
      />
    </>
  );
}
