import { useQuery } from "react-query";

import { fetchPunkApi } from "./../../fetch";

export default function useBeers() {
  const { isLoading, error, data } = useQuery("beers", () =>
    fetchPunkApi("beers")
  );

  return { isLoading, error, beers: data };
}
