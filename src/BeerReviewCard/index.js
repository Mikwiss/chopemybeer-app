import styled from "@emotion/styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import useCounter from "../useCounter";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function BeerReviewCard({
  initialQuantity = 0,
  maxQuantity,
  id,
}) {
  const [quantity, { increment, decrement }] = useCounter(
    initialQuantity,
    maxQuantity,
    1
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://picsum.photos/200?random=${id}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={increment}>
          <StyledBadge badgeContent={quantity} color="primary">
            <AddShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="add to cart" onClick={decrement}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
