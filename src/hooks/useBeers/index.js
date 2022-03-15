import React from "react";

const responseToJson = (response) => response.json();

export default function useBeers() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(responseToJson)
      .then((beers) => {
        console.log(beers);
        setBeers(beers);
      });
  }, [setBeers]);

  return [beers];
}
