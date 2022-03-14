import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <p>Welcome to Chope My Beer</p>
      <nav>
        <Link to="/basket">Voir mon panier</Link>
      </nav>
    </>
  );
}
