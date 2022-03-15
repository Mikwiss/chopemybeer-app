import { Box, Grid } from "@mui/material";
import React from "react";
import BeerReviewCard from "../BeerReviewCard";
import { useBeers } from "../hooks";

export default function Beers() {
  const [beers] = useBeers();

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
            <BeerReviewCard beer={beer}></BeerReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
