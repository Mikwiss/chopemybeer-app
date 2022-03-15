import { Box, Grid } from "@mui/material";
import BeerReviewCard from "../BeerReviewCard";

export default function Beers() {
  const beers = new Array(20).fill(null).map((_, i) => ({
    id: i,
    country: "FR",
    stock: i + 1,
  }));

  return (
    <Box sx={{ flexGrow: 1 }} m={1} mt={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        {beers.map(({ id, stock }) => (
          <Grid key={id} item>
            <BeerReviewCard
              key={id}
              id={id}
              maxQuantity={stock}
            ></BeerReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
