import { Box, CircularProgress, Grid } from "@mui/material";
import React from "react";

import BeerReviewCard from "./BeerReviewCard";
import { useBeers } from "../../hooks";

export default function Beers() {
  const { isLoading, error, beers } = useBeers();

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <Box sx={{ flexGrow: 1 }} m={1} mt={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        {beers.map((beer) => (
          <Grid key={beer.id} item>
            <BeerReviewCard
              beer={beer}
              maxQuantity={beer.id + 2}
            ></BeerReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
