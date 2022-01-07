import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "../../components/Card/Card";
import College from "../../assets/collegevent.jpg";
import culture from "../../assets/cultural.jfif";
import orient from "../../assets/orient.jpg";
import fest from "../../assets/fest.jpg";

export default function Dashboard() {
  return (
    <div>
      <Card
        sx={{ minWidth: 275, maxHeight: 100 }}
        body={
          <CardMedia
            component="img"
            height="150"
            sx={{ width: 258 }}
            image={College}
            alt="schoolevent"
          />
        }
        buttonText={"Next"}
      ></Card>
      <Card
        sx={{ minWidth: 275 }}
        body={
          <CardMedia
            component="img"
            height="150"
            sx={{ width: 258 }}
            image={fest}
            alt="schoolevent"
          />
        }
        buttonText={"Next"}
      ></Card>
      <Card
        sx={{ minWidth: 275 }}
        body={
          <CardMedia
            component="img"
            height="150"
            sx={{ width: 258 }}
            image={culture}
            alt="schoolevent"
          />
        }
        buttonText={"Next"}
      ></Card>
      <Card
        sx={{ minWidth: 275 }}
        body={
          <CardMedia
            component="img"
            height="150"
            sx={{ width: 258 }}
            image={orient}
            alt="schoolevent"
          />
        }
        buttonText={"Next"}
      ></Card>
    </div>
  );
}
