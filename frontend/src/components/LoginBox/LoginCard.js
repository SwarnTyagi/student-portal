import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import school from "../../assets/school.jpeg";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 450, align: "center", display: "inline-block" }}>
      <CardActionArea>
        <CardMedia component="img" height="150" image={school} />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions align="center"></CardActions>
    </Card>
  );
}
