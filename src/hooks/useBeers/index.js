import { useQuery } from "react-query";
import queryString from "query-string";

import { fetchPunkApi } from "./../../fetch";

export default function useBeers(params) {
  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: params,
  });

  const { isLoading, error, data } = useQuery("beers", fetchPunkApi(beersUrl));

  return { isLoading, error, beers: data };
}
