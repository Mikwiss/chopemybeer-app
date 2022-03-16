import {
  Box,
  CircularProgress,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import BeerReviewCard from "./BeerReviewCard";
import { useBeers } from "../../hooks";
import useFilterState from "../hooks/useStateFilter";

export default function Beers() {
  const [params, { byName, byIbu }] = useFilterState();
  const { isLoading, beers } = useBeers(params);

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} m={1} mt={2}>
        <TextField
          id="outlined-basic"
          label="Beer name"
          variant="outlined"
          onChange={(e) => byName(e.target.value)}
        />
        <Typography id="input-slider" gutterBottom>
          IBU Greater than
        </Typography>
        <Slider
          lab
          defaultValue={0}
          aria-label="IBU Greater than"
          valueLabelDisplay="auto"
          step={10}
          onChange={(e) => byIbu(e.target.value)}
          min={0}
          max={1500}
        />
      </Box>

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
    </>
  );
}
