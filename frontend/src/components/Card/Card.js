import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function OutlinedCard({
  header,
  footer,
  body,
  buttonText,
  onClick,
  imgComponent = "img",
  imgHeight = "150",
  image,
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx>
        {image && (
          <CardMedia
            component={imgComponent}
            height={imgHeight}
            sx={{ width: 258 }}
            image={image}
          />
        )}

        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {header}
          </Typography>
          <Typography variant="h4" sx={{ mb: 1.5 }} color="text.secondary">
            {body}
          </Typography>
          <Typography variant="body2">{footer}</Typography>
        </CardContent>
        <CardActions>
          {buttonText && (
            <Button size="small" onClick={onClick}>
              {buttonText}
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
