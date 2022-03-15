import { useQuery } from "react-query";

const responseToJson = (response) => response.json();

const apiUri = "https://api.punkapi.com/v2";

export default function useBeers() {
  const { isLoading, error, data } = useQuery("beers", () =>
    fetch(`${apiUri}/beers`)
      .then(responseToJson)
      .then((data) => {
        console.log("Success:", data);
        return data;
      })
      .then((data) => {
        console.log("Success:", data);
        return data;
      })
      .then((data) => {
        console.log("Success:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  );

  return { isLoading, error, beers: data };
}
