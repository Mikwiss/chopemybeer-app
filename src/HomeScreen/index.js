import { Link } from "react-router-dom";
import logo from "./../beer-svgrepo-com.svg";

export default function HomeScreen() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Chope My Beer</p>
          <nav>
            <Link to="/basket">Voir mon panier</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
