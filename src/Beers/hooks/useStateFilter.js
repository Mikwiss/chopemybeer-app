import React from "react";

export default function useFilterState(initialParams = {}) {
  const [params, setParam] = React.useState(initialParams);

  const byName = (value) => setParam({ ...params, beer_name: value });
  const byIbu = (value) => setParam({ ...params, ibu_gt: value });

  console.log(params);

  return [params, { byName, byIbu }];
}
