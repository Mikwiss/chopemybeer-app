import { Box, Grid } from "@mui/material";
import BeerReviewCard from "../BeerReviewCard";

export default function Beers() {
  const beers = new Array(20).fill(null).map((_, i) => ({
    id: i,
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
        {beers.map(({ id }) => (
          <Grid item>
            <BeerReviewCard key={id} id={id}></BeerReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
