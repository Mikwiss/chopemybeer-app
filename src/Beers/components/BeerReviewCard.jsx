import { number, shape, string } from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {
  Avatar,
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
import { useCounter } from "../../hooks";
import { StyledBadge } from "../styles/StyledBadge";

export default function BeerReviewCard({
  beer,
  initialQuantity = 0,
  maxQuantity,
}) {
  const { name, tagline, image_url: image, description, ibu } = beer;

  const [quantity, { increment, reset }] = useCounter(
    initialQuantity,
    maxQuantity,
    1
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {ibu}
          </Avatar>
        }
        title={name}
        subheader={tagline}
      />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={increment}>
          <StyledBadge badgeContent={quantity} color="primary">
            <AddShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="add to cart" onClick={reset}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

BeerReviewCard.propTypes = {
  beer: shape({
    id: number,
    name: string,
    tagline: string,
    description: string,
    image_url: string,
  }),
};
