import { Link } from "react-router-dom";

export default function BeerScreen() {
  return (
    <>
      <p>Le chope</p>
      <nav>
        <Link to="/">Chope my beer</Link>
      </nav>
    </>
  );
}
