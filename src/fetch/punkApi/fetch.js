const responseToJson = (response) => response.json();

const apiUri = "https://api.punkapi.com/v2";

export default function fetchPunkApi(route) {
  return () =>
    fetch(`${apiUri}${route}`)
      .then((response) => {
        console.log("Response useBeers:", response);
        return response;
      })
      .then(responseToJson);
}
